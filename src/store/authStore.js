import { create } from 'zustand'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getIdToken,
} from 'firebase/auth'
import { auth } from '../lib/firebase'
import { http, getToken, setToken } from '../lib/http'

// Maps a backend user payload to the shape expected across the app.
function mapUser(payload) {
  return {
    uid: payload.id || payload.uid,
    id: payload.id || payload.uid,
    email: payload.email || '',
    name: payload.name || '',
    phone: payload.phone || '',
    role: payload.role || 'user',
    provider: payload.provider || 'email',
    avatar: payload.avatar || '',
    createdAt: payload.createdAt || new Date().toISOString(),
  }
}

const useAuthStore = create((set) => ({
  user: null,
  userProfile: null,
  loading: true,

  initialize: async () => {
    const token = getToken()
    if (!token) {
      set({ user: null, userProfile: null, loading: false })
      return
    }
    try {
      const data = await http.get('/auth/me')
      const mapped = mapUser(data.user)
      set({ user: mapped, userProfile: data.user, loading: false })
    } catch {
      setToken('')
      set({ user: null, userProfile: null, loading: false })
    }
  },

  register: async (data) => {
    try {
      const result = await http.post('/auth/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone || '',
      })
      setToken(result.token)
      const mapped = mapUser(result.user)
      set({ user: mapped, userProfile: result.user, loading: false })
      return { success: true, role: result.user.role || 'user' }
    } catch (err) {
      return { success: false, error: err.error || err.message }
    }
  },

  login: async (email, password) => {
    try {
      const result = await http.post('/auth/login', { email, password })
      setToken(result.token)
      const mapped = mapUser(result.user)
      set({ user: mapped, userProfile: result.user, loading: false })
      return { success: true, role: result.user.role || 'user' }
    } catch (err) {
      return { success: false, error: err.error || err.message }
    }
  },

  socialLogin: async (provider) => {
    try {
      let authProvider
      if (provider === 'google') {
        authProvider = new GoogleAuthProvider()
      } else if (provider === 'facebook') {
        authProvider = new FacebookAuthProvider()
      } else {
        return { success: false, error: 'Unknown provider' }
      }

      const cred = await signInWithPopup(auth, authProvider)
      const idToken = await getIdToken(cred.user)

      const result = await http.post('/auth/social', { idToken, provider })
      setToken(result.token)
      const mapped = mapUser(result.user)
      set({ user: mapped, userProfile: result.user, loading: false })
      return { success: true, role: result.user.role || 'user' }
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        return { success: false, error: 'Sign-in was cancelled' }
      }
      return {
        success: false,
        error: err.error || err.message || 'Social sign-in failed',
      }
    }
  },

  logout: async () => {
    setToken('')
    set({ user: null, userProfile: null })
  },

  updateProfile: async (data) => {
    try {
      const result = await http.put('/auth/update-profile', {
        name: data.name,
        email: data.email,
        phone: data.phone,
      })
      const mapped = mapUser(result.user)
      set({ user: mapped, userProfile: result.user })
      return { success: true }
    } catch (err) {
      return { success: false, error: err.error || err.message }
    }
  },

  updatePassword: async ({ currentPassword, newPassword }) => {
    try {
      await http.put('/auth/update-password', {
        currentPassword,
        newPassword,
      })
      return { success: true }
    } catch (err) {
      return { success: false, error: err.error || err.message }
    }
  },

  clearError: () => {},
}))

export default useAuthStore
