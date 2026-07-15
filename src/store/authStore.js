import { create } from 'zustand'
import { authAPI } from '../lib/api'

const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token'),
  loading: true,
  error: null,

  initialize: async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      set({ loading: false })
      return
    }
    try {
      const { user } = await authAPI.getProfile()
      set({ user, token, loading: false })
    } catch {
      localStorage.removeItem('token')
      set({ user: null, token: null, loading: false })
    }
  },

  login: async (email, password) => {
    set({ error: null })
    try {
      const { token, user } = await authAPI.login({ email, password })
      localStorage.setItem('token', token)
      set({ user, token, error: null })
      return { success: true }
    } catch (err) {
      const message = err.error || 'Login failed'
      set({ error: message })
      return { success: false, error: message }
    }
  },

  register: async (data) => {
    set({ error: null })
    try {
      const { token, user } = await authAPI.register(data)
      localStorage.setItem('token', token)
      set({ user, token, error: null })
      return { success: true }
    } catch (err) {
      const message = err.error || 'Registration failed'
      set({ error: message })
      return { success: false, error: message }
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null })
  },

  updateProfile: async (data) => {
    try {
      const { user } = await authAPI.updateProfile(data)
      set({ user })
      return { success: true }
    } catch (err) {
      return { success: false, error: err.error || 'Update failed' }
    }
  },

  updatePassword: async (data) => {
    try {
      await authAPI.updatePassword(data)
      return { success: true }
    } catch (err) {
      return { success: false, error: err.error || 'Password update failed' }
    }
  },

  clearError: () => set({ error: null }),
}))

export default useAuthStore
