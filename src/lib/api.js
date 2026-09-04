import { http } from './http'

// ─── Bookings ───
export const bookingsAPI = {
  create: async (data) => {
    const result = await http.post('/bookings', data)
    return result
  },

  getMine: async () => {
    return await http.get('/bookings')
  },

  getById: async (id) => {
    return await http.get(`/bookings/${id}`)
  },

  cancel: async (id) => {
    return await http.delete(`/bookings/${id}`)
  },
}

// ─── News / Updates ───
export const newsAPI = {
  getAll: async () => {
    return await http.get('/news')
  },

  add: async (data) => {
    return await http.post('/news', data)
  },

  update: async (id, data) => {
    return await http.put(`/news/${id}`, data)
  },

  delete: async (id) => {
    return await http.delete(`/news/${id}`)
  },
}

// ─── Events / Functions ───
export const eventsAPI = {
  getAll: async () => {
    return await http.get('/events')
  },

  add: async (data) => {
    return await http.post('/events', data)
  },

  update: async (id, data) => {
    return await http.put(`/events/${id}`, data)
  },

  delete: async (id) => {
    return await http.delete(`/events/${id}`)
  },
}

// ─── Menu Items ───
export const menuAPI = {
  getAll: async () => {
    return await http.get('/menu')
  },

  add: async (data) => {
    return await http.post('/menu', data)
  },

  update: async (id, data) => {
    return await http.put(`/menu/${id}`, data)
  },

  delete: async (id) => {
    return await http.delete(`/menu/${id}`)
  },
}

// ─── Site Content (CMS) ───
export const contentAPI = {
  getAll: async () => {
    return await http.get('/site-content')
  },

  get: async (key) => {
    return await http.get(`/site-content/${key}`)
  },

  set: async (key, data) => {
    return await http.put(`/site-content/${key}`, data)
  },
}

// ─── Contact / Messages ───
export const contactAPI = {
  send: async (data) => {
    return await http.post('/contact', data)
  },
}

// ─── Gallery ───
export const galleryAPI = {
  getAll: async (category) => {
    const qs = category ? `?category=${encodeURIComponent(category)}` : ''
    return await http.get(`/gallery${qs}`)
  },

  add: async (data) => {
    return await http.post('/gallery', data)
  },

  update: async (id, data) => {
    return await http.put(`/gallery/${id}`, data)
  },

  delete: async (id) => {
    return await http.delete(`/gallery/${id}`)
  },
}

// ─── Admin API ───
export const messagesAPI = {
  getAll: async () => {
    return await http.get('/contact')
  },

  markRead: async (id) => {
    return await http.put(`/contact/${id}/read`)
  },

  delete: async (id) => {
    return await http.delete(`/contact/${id}`)
  },
}

export const adminAPI = {
  getDashboard: async () => {
    return await http.get('/admin/dashboard')
  },

  getBookings: async (page = 1, perPage = 20) => {
    return await http.get(`/admin/bookings?page=${page}&limit=${perPage}`)
  },

  getCustomers: async () => {
    return await http.get('/admin/customers')
  },

  updateBookingStatus: async (id, status) => {
    return await http.put(`/bookings/${id}/status`, { status })
  },
}

// Default export for backward compatibility
export default {
  bookingsAPI,
  contactAPI,
  galleryAPI,
  messagesAPI,
  adminAPI,
  newsAPI,
  eventsAPI,
  menuAPI,
  contentAPI,
}
