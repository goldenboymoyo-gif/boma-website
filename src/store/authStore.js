import { create } from 'zustand'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile as fbUpdateProfile,
  updatePassword as fbUpdatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'

const useAuthStore = create((set) => ({
  user: null,
  userProfile: null,
  loading: true,

  initialize: () => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profileDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        const profile = profileDoc.exists() ? profileDoc.data() : {}
        set({
          user: {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || profile.name || '',
            phone: profile.phone || '',
            role: profile.role || 'user',
            createdAt: profile.createdAt?.toDate?.() || firebaseUser.metadata.creationTime,
          },
          userProfile: profile,
          loading: false,
        })
      } else {
        set({ user: null, userProfile: null, loading: false })
      }
    })
    return unsubscribe
  },

  register: async (data) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await fbUpdateProfile(cred.user, { displayName: data.name })
      await setDoc(doc(db, 'users', cred.user.uid), {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        role: 'user',
        createdAt: serverTimestamp(),
      })
      return { success: true }
    } catch (err) {
      const message = err.code === 'auth/email-already-in-use'
        ? 'An account with this email already exists'
        : err.message
      return { success: false, error: message }
    }
  },

  login: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return { success: true }
    } catch (err) {
      const message = err.code === 'auth/invalid-credential'
        ? 'Invalid email or password'
        : err.message
      return { success: false, error: message }
    }
  },

  logout: async () => {
    await signOut(auth)
    set({ user: null, userProfile: null })
  },

  updateProfile: async (data) => {
    try {
      const fbUser = auth.currentUser
      if (!fbUser) return { success: false, error: 'Not authenticated' }

      if (data.name && data.name !== fbUser.displayName) {
        await fbUpdateProfile(fbUser, { displayName: data.name })
      }

      const userRef = doc(db, 'users', fbUser.uid)
      const updates = {}
      if (data.name) updates.name = data.name
      if (data.email) updates.email = data.email
      if (data.phone !== undefined) updates.phone = data.phone
      await setDoc(userRef, updates, { merge: true })

      const profileDoc = await getDoc(userRef)
      const profile = profileDoc.data()
      set((state) => ({
        user: { ...state.user, name: data.name || state.user.name, email: data.email || state.user.email, phone: data.phone ?? state.user.phone },
        userProfile: { ...state.userProfile, ...profile },
      }))

      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  },

  updatePassword: async ({ currentPassword, newPassword }) => {
    try {
      const fbUser = auth.currentUser
      if (!fbUser) return { success: false, error: 'Not authenticated' }

      const credential = EmailAuthProvider.credential(fbUser.email, currentPassword)
      await reauthenticateWithCredential(fbUser, credential)
      await fbUpdatePassword(fbUser, newPassword)
      return { success: true }
    } catch (err) {
      const message = err.code === 'auth/wrong-password'
        ? 'Current password is incorrect'
        : err.message
      return { success: false, error: message }
    }
  },

  clearError: () => {},
}))

export default useAuthStore
