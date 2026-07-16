import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit as fbLimit,
  startAfter,
  serverTimestamp,
} from 'firebase/firestore'
import { auth, db } from './firebase'

function requireAuth() {
  const uid = auth.currentUser?.uid
  if (!uid) throw { error: 'Not authenticated' }
  return uid
}

// ─── Bookings ───
export const bookingsAPI = {
  create: async (data) => {
    const uid = requireAuth()
    const docRef = await addDoc(collection(db, 'bookings'), {
      userId: uid,
      date: data.date,
      time: data.time,
      adults: data.adults,
      children: data.children || 0,
      childAges: data.childAges || [],
      dietaryPreferences: data.dietaryPreferences || [],
      specialRequests: data.specialRequests || '',
      contactName: data.contactName,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone || '',
      status: 'pending',
      totalPrice: (data.adults || 1) * 65 + (data.children || 0) * 35,
      createdAt: serverTimestamp(),
    })
    return { success: true, booking: { _id: docRef.id, ...data } }
  },

  getMine: async () => {
    const uid = requireAuth()
    const q = query(collection(db, 'bookings'), where('userId', '==', uid), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    const bookings = snap.docs.map((d) => ({ _id: d.id, ...d.data() }))
    return { success: true, count: bookings.length, bookings }
  },

  getById: async (id) => {
    const snap = await getDoc(doc(db, 'bookings', id))
    if (!snap.exists()) throw { error: 'Booking not found' }
    return { success: true, booking: { _id: snap.id, ...snap.data() } }
  },

  cancel: async (id) => {
    await updateDoc(doc(db, 'bookings', id), { status: 'cancelled' })
    return { success: true }
  },
}

// ─── Contact / Messages ───
export const contactAPI = {
  send: async (data) => {
    await addDoc(collection(db, 'messages'), {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject,
      message: data.message,
      isRead: false,
      createdAt: serverTimestamp(),
    })
    return { success: true, message: 'Message sent successfully' }
  },
}

// ─── Gallery ───
export const galleryAPI = {
  getAll: async (category) => {
    let q
    if (category) {
      q = query(collection(db, 'gallery'), where('category', '==', category), orderBy('createdAt', 'desc'))
    } else {
      q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'))
    }
    const snap = await getDocs(q)
    return { success: true, count: snap.size, items: snap.docs.map((d) => ({ _id: d.id, ...d.data() })) }
  },

  add: async (data) => {
    const docRef = await addDoc(collection(db, 'gallery'), {
      title: data.title,
      image: data.image,
      category: data.category,
      isFeatured: data.isFeatured || false,
      createdAt: serverTimestamp(),
    })
    return { success: true, item: { _id: docRef.id, ...data, createdAt: new Date() } }
  },

  update: async (id, data) => {
    await updateDoc(doc(db, 'gallery', id), data)
    return { success: true }
  },

  delete: async (id) => {
    await deleteDoc(doc(db, 'gallery', id))
    return { success: true }
  },
}

// ─── Admin API ───
export const messagesAPI = {
  getAll: async () => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return { success: true, count: snap.size, messages: snap.docs.map((d) => ({ _id: d.id, ...d.data() })) }
  },

  markRead: async (id) => {
    await updateDoc(doc(db, 'messages', id), { isRead: true })
    return { success: true }
  },

  delete: async (id) => {
    await deleteDoc(doc(db, 'messages', id))
    return { success: true }
  },
}

export const adminAPI = {
  getDashboard: async () => {
    const bookingsSnap = await getDocs(collection(db, 'bookings'))
    const usersSnap = await getDocs(query(collection(db, 'users'), where('role', '==', 'user')))
    const messagesSnap = await getDocs(query(collection(db, 'messages'), where('isRead', '==', false)))

    let totalRevenue = 0
    let totalGuests = 0
    let pendingBookings = 0
    const recentBookings = []

    bookingsSnap.docs.forEach((d) => {
      const b = d.data()
      if (b.status === 'confirmed' || b.status === 'completed') {
        totalRevenue += b.totalPrice || 0
        totalGuests += (b.adults || 0) + (b.children || 0)
      }
      if (b.status === 'pending') pendingBookings++
    })

    const sortedBookings = bookingsSnap.docs
      .map((d) => ({ _id: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
      .slice(0, 5)

    return {
      success: true,
      stats: {
        totalBookings: bookingsSnap.size,
        totalUsers: usersSnap.size,
        totalRevenue,
        totalGuests,
        pendingBookings,
        unreadMessages: messagesSnap.size,
        recentBookings: sortedBookings,
      },
    }
  },

  getBookings: async (page = 1, perPage = 20) => {
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    const all = snap.docs.map((d) => ({ _id: d.id, ...d.data() }))
    const totalPages = Math.ceil(all.length / perPage) || 1
    const start = (page - 1) * perPage
    return {
      success: true,
      count: all.length,
      total: all.length,
      page,
      pages: totalPages,
      bookings: all.slice(start, start + perPage),
    }
  },

  getCustomers: async () => {
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return {
      success: true,
      count: snap.size,
      users: snap.docs.map((d) => ({ _id: d.id, ...d.data() })),
    }
  },

  updateBookingStatus: async (id, status) => {
    await updateDoc(doc(db, 'bookings', id), { status })
    return { success: true }
  },
}

// Default export for backward compatibility
export default {
  bookingsAPI,
  contactAPI,
  galleryAPI,
  messagesAPI,
  adminAPI,
}
