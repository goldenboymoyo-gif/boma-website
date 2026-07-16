import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'
import useAuthStore from '../../store/authStore'
import { adminAPI, messagesAPI, galleryAPI } from '../../lib/api'
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Image,
  Settings,
  Mail,
  ChevronRight,
  DollarSign,
  Menu,
  X,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  AlertCircle,
  Plus,
  ChevronLeft,
  ExternalLink,
  Phone,
} from 'lucide-react'

const sidebarNav = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'Bookings', icon: CalendarDays },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'messages', label: 'Messages', icon: Mail },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const statusConfig = {
  confirmed: { label: 'Confirmed', icon: CheckCircle2, color: 'bg-green-100 text-green-700' },
  pending: { label: 'Pending', icon: Clock, color: 'bg-yellow-100 text-yellow-700' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'bg-red-100 text-red-700' },
  completed: { label: 'Completed', icon: CheckCircle2, color: 'bg-blue-100 text-blue-700' },
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const getInitials = (name) => {
  if (!name) return '??'
  return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-boma-charcoal/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-boma-rust rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <p className="font-bold text-boma-charcoal text-sm">BOMA</p>
            <p className="text-[10px] text-boma-charcoal uppercase tracking-wider">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {sidebarNav.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                isActive ? 'bg-boma-rust/10 text-boma-rust' : 'text-boma-charcoal hover:bg-white'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-boma-charcoal/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-boma-charcoal flex items-center justify-center text-white font-bold text-xs">
            {getInitials(user?.name)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-boma-charcoal truncate">{user?.name}</p>
            <p className="text-xs text-boma-charcoal truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => { logout(); navigate('/login') }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors w-full mt-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden bg-white border-b border-boma-charcoal/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)} className="p-2 text-boma-charcoal hover:bg-gray-100 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-boma-rust rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">B</span>
          </div>
          <p className="font-bold text-boma-charcoal text-sm">Admin</p>
        </div>
        <div className="w-9" />
      </div>

      <div className="flex">
        <aside className="hidden lg:block w-64 bg-white border-r border-boma-charcoal/10 min-h-screen sticky top-0">
          <SidebarContent />
        </aside>

        {sidebarOpen && (
          <>
            <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setSidebarOpen(false)} />
            <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-xl">
              <div className="flex justify-end p-4">
                <button onClick={() => setSidebarOpen(false)} className="p-2 text-boma-charcoal hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarContent />
            </aside>
          </>
        )}

        <main className="flex-1 p-6 lg:p-8">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
            {activeTab === 'bookings' && <BookingsTab />}
            {activeTab === 'customers' && <CustomersTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'gallery' && <GalleryTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

function OverviewTab({ setActiveTab }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminAPI.getDashboard().then((data) => { setStats(data.stats); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
  }

  const statCards = [
    { label: 'Total Bookings', value: stats?.totalBookings ?? 0, icon: CalendarDays, color: 'bg-blue-500/10 text-blue-600' },
    { label: 'Revenue', value: `$${(stats?.totalRevenue ?? 0).toLocaleString()}`, icon: DollarSign, color: 'bg-green-500/10 text-green-600' },
    { label: 'Total Guests', value: (stats?.totalGuests ?? 0).toLocaleString(), icon: Users, color: 'bg-purple-500/10 text-purple-600' },
    { label: 'Pending Bookings', value: stats?.pendingBookings ?? 0, icon: Clock, color: 'bg-orange-500/10 text-orange-600' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Overview</h1>
        <p className="text-sm text-boma-charcoal mt-1">Here's what's happening with your business.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-boma-charcoal/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.color)}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-2xl font-bold text-boma-charcoal">{stat.value}</p>
              <p className="text-xs text-boma-charcoal/60 mt-1">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-boma-charcoal/10">
          <div className="flex items-center justify-between p-5 border-b border-boma-charcoal/10">
            <h3 className="font-bold text-boma-charcoal">Recent Bookings</h3>
            <button onClick={() => setActiveTab('bookings')} className="text-xs text-boma-rust font-medium hover:text-boma-rust/80 flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-boma-charcoal/5">
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Customer</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Date</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Guests</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Amount</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {(stats?.recentBookings || []).map((booking) => {
                  const st = statusConfig[booking.status] || statusConfig.pending
                  const StatusIcon = st.icon
                  return (
                    <tr key={booking._id} className="border-b border-boma-charcoal/5 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-boma-charcoal">{booking.contactName || booking.user?.name || 'N/A'}</p>
                        <p className="text-xs text-boma-charcoal/60">{booking.contactEmail || booking.user?.email || ''}</p>
                      </td>
                      <td className="px-5 py-4 text-sm text-boma-charcoal">{formatDate(booking.date)}</td>
                      <td className="px-5 py-4 text-sm text-boma-charcoal">{booking.adults + (booking.children || 0)}</td>
                      <td className="px-5 py-4 text-sm font-medium text-boma-charcoal">${booking.totalPrice}</td>
                      <td className="px-5 py-4">
                        <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium', st.color)}>
                          <StatusIcon className="w-3 h-3" />{st.label}
                        </span>
                      </td>
                    </tr>
                  )
                })}
                {(!stats?.recentBookings || stats.recentBookings.length === 0) && (
                  <tr><td colSpan={5} className="px-5 py-8 text-center text-sm text-boma-charcoal/50">No bookings yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-boma-charcoal/10 p-5">
            <h3 className="font-bold text-boma-charcoal mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: 'Manage Bookings', icon: CalendarDays, tab: 'bookings' },
                { label: 'View Messages', icon: Mail, tab: 'messages' },
                { label: 'Manage Gallery', icon: Image, tab: 'gallery' },
                { label: 'View Customers', icon: Users, tab: 'customers' },
              ].map((action) => {
                const Icon = action.icon
                return (
                  <button key={action.label} onClick={() => setActiveTab(action.tab)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-boma-charcoal hover:bg-gray-50 transition-colors text-left">
                    <Icon className="w-4 h-4 text-boma-rust" />
                    {action.label}
                    <ChevronRight className="w-4 h-4 ml-auto text-boma-charcoal/30" />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookingsTab() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [statusFilter, setStatusFilter] = useState('all')
  const [updatingId, setUpdatingId] = useState(null)

  const fetchBookings = useCallback(async (p) => {
    setLoading(true)
    try {
      const data = await adminAPI.getBookings(p, 20)
      setBookings(data.bookings || [])
      setTotalPages(data.pages || 1)
    } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchBookings(page) }, [page, fetchBookings])

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id)
    try {
      await adminAPI.updateBookingStatus(id, newStatus)
      setBookings((prev) => prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b)))
    } catch { /* empty */ }
    setUpdatingId(null)
  }

  const filtered = statusFilter === 'all' ? bookings : bookings.filter((b) => b.status === statusFilter)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">Bookings</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">Manage all reservations</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'pending', 'confirmed', 'cancelled', 'completed'].map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={cn('px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize',
                statusFilter === s ? 'bg-boma-rust text-white' : 'bg-white border border-boma-charcoal/20 text-boma-charcoal/70 hover:bg-gray-50')}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
      ) : (
        <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-boma-charcoal/10 bg-gray-50/50">
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Customer</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Date & Time</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Guests</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Amount</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((booking) => {
                  const st = statusConfig[booking.status] || statusConfig.pending
                  const StatusIcon = st.icon
                  return (
                    <tr key={booking._id} className="border-b border-boma-charcoal/5 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-boma-charcoal">{booking.contactName || booking.user?.name || 'N/A'}</p>
                        <p className="text-xs text-boma-charcoal/60">{booking.contactEmail || booking.user?.email || ''}</p>
                        {booking.contactPhone && <p className="text-xs text-boma-charcoal/40">{booking.contactPhone}</p>}
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm text-boma-charcoal">{formatDate(booking.date)}</p>
                        <p className="text-xs text-boma-charcoal/60">{booking.time}</p>
                      </td>
                      <td className="px-5 py-4 text-sm text-boma-charcoal">
                        {booking.adults} adult{(booking.adults || 0) > 1 ? 's' : ''}
                        {(booking.children || 0) > 0 && `, ${booking.children} child${booking.children > 1 ? 'ren' : ''}`}
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-boma-charcoal">${booking.totalPrice}</td>
                      <td className="px-5 py-4">
                        <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium', st.color)}>
                          <StatusIcon className="w-3 h-3" />{st.label}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {updatingId === booking._id ? (
                          <div className="w-4 h-4 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" />
                        ) : (
                          <select
                            value={booking.status}
                            onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                            className="text-xs border border-boma-charcoal/20 rounded-lg px-2 py-1.5 bg-white text-boma-charcoal focus:outline-none focus:border-boma-rust cursor-pointer"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        )}
                      </td>
                    </tr>
                  )
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-12 text-center text-sm text-boma-charcoal/50">No bookings found</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-boma-charcoal/10">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="flex items-center gap-1 text-sm text-boma-charcoal/60 hover:text-boma-rust disabled:opacity-40 disabled:cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-sm text-boma-charcoal/60">Page {page} of {totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="flex items-center gap-1 text-sm text-boma-charcoal/60 hover:text-boma-rust disabled:opacity-40 disabled:cursor-not-allowed">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CustomersTab() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    adminAPI.getCustomers().then((data) => { setCustomers(data.users || []); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  const filtered = customers.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()) || c.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">Customers</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">{customers.length} registered users</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-boma-charcoal/40" />
          <input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust w-64" />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
      ) : (
        <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-boma-charcoal/10 bg-gray-50/50">
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Customer</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Email</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Phone</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((customer) => (
                  <tr key={customer._id} className="border-b border-boma-charcoal/5 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-boma-rust/10 flex items-center justify-center text-boma-rust font-bold text-xs">
                          {getInitials(customer.name)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-boma-charcoal">{customer.name}</p>
                          <p className="text-xs text-boma-charcoal/50">{customer.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-boma-charcoal">{customer.email}</td>
                    <td className="px-5 py-4 text-sm text-boma-charcoal/70">{customer.phone || '—'}</td>
                    <td className="px-5 py-4 text-sm text-boma-charcoal/70">{formatDate(customer.createdAt)}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={4} className="px-5 py-12 text-center text-sm text-boma-charcoal/50">No customers found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function MessagesTab() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState(null)

  const fetchMessages = useCallback(async () => {
    setLoading(true)
    try {
      const data = await messagesAPI.getAll()
      setMessages(data.messages || [])
    } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchMessages() }, [fetchMessages])

  const handleMarkRead = async (id) => {
    try {
      await messagesAPI.markRead(id)
      setMessages((prev) => prev.map((m) => (m._id === id ? { ...m, isRead: true } : m)))
      if (selectedMessage?._id === id) setSelectedMessage((prev) => ({ ...prev, isRead: true }))
    } catch { /* empty */ }
  }

  const handleDelete = async (id) => {
    try {
      await messagesAPI.delete(id)
      setMessages((prev) => prev.filter((m) => m._id !== id))
      if (selectedMessage?._id === id) setSelectedMessage(null)
    } catch { /* empty */ }
  }

  const unreadCount = messages.filter((m) => !m.isRead).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Messages</h1>
        <p className="text-sm text-boma-charcoal/60 mt-1">{unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden max-h-[70vh] flex flex-col">
            <div className="p-4 border-b border-boma-charcoal/10">
              <h3 className="font-bold text-sm text-boma-charcoal">Inbox</h3>
            </div>
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <button key={msg._id} onClick={() => { setSelectedMessage(msg); if (!msg.isRead) handleMarkRead(msg._id) }}
                  className={cn('w-full text-left px-4 py-3 border-b border-boma-charcoal/5 hover:bg-gray-50 transition-colors',
                    selectedMessage?._id === msg._id && 'bg-boma-rust/5 border-l-2 border-l-boma-rust',
                    !msg.isRead && 'bg-boma-rust/[0.02]')}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className={cn('text-sm truncate', !msg.isRead ? 'font-semibold text-boma-charcoal' : 'text-boma-charcoal/80')}>{msg.name}</p>
                      <p className="text-xs text-boma-charcoal/50 truncate">{msg.subject}</p>
                    </div>
                    {!msg.isRead && <div className="w-2 h-2 bg-boma-rust rounded-full shrink-0 mt-1.5" />}
                  </div>
                  <p className="text-[10px] text-boma-charcoal/40 mt-1">{formatDate(msg.createdAt)}</p>
                </button>
              ))}
              {messages.length === 0 && (
                <div className="px-4 py-12 text-center text-sm text-boma-charcoal/50">No messages yet</div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-boma-charcoal/10">
            {selectedMessage ? (
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-boma-charcoal">{selectedMessage.subject}</h3>
                    <p className="text-sm text-boma-charcoal/60 mt-1">From: {selectedMessage.name} ({selectedMessage.email})</p>
                    {selectedMessage.phone && <p className="text-sm text-boma-charcoal/60">Phone: {selectedMessage.phone}</p>}
                    <p className="text-xs text-boma-charcoal/40 mt-1">{formatDate(selectedMessage.createdAt)}</p>
                  </div>
                  <button onClick={() => handleDelete(selectedMessage._id)}
                    className="p-2 text-boma-charcoal/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-boma-charcoal/80 leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                <div className="flex gap-3 mt-6">
                  <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors flex items-center gap-2">
                    Reply via Email <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {selectedMessage.phone && (
                    <a href={`tel:${selectedMessage.phone}`}
                      className="px-4 py-2 border border-boma-charcoal/20 text-boma-charcoal rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[300px] text-boma-charcoal/40">
                <div className="text-center">
                  <Mail className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Select a message to read</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function GalleryTab() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [form, setForm] = useState({ title: '', image: '', category: 'venue' })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteId, setDeleteId] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      const data = await galleryAPI.getAll()
      setItems(data.items || [])
    } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchItems() }, [fetchItems])

  const handleAdd = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const data = await galleryAPI.add(form)
      setItems((prev) => [data.item, ...prev])
      setForm({ title: '', image: '', category: 'venue' })
      setShowAddForm(false)
    } catch (err) {
      setError(err.error || 'Failed to add item')
    }
    setSaving(false)
  }

  const handleDelete = async (id) => {
    setDeleteId(id)
    try {
      await galleryAPI.delete(id)
      setItems((prev) => prev.filter((i) => i._id !== id))
    } catch { /* empty */ }
    setDeleteId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">Gallery</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">{items.length} items</p>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Image
        </button>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAdd} className="bg-white rounded-xl border border-boma-charcoal/10 p-6 overflow-hidden">
            {error && (
              <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />{error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Title</label>
                <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="Image title" />
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Image URL</label>
                <input type="url" required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust bg-white">
                  <option value="venue">Venue</option>
                  <option value="dining">Dining</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="experience">Experience</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button type="submit" disabled={saving}
                className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60">
                {saving ? 'Adding...' : 'Add Image'}
              </button>
              <button type="button" onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-boma-charcoal/20 text-boma-charcoal rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {loading ? (
        <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-boma-charcoal truncate">{item.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] uppercase tracking-wider text-boma-charcoal/50 bg-boma-charcoal/5 px-2 py-0.5 rounded-full">{item.category}</span>
                  <button onClick={() => handleDelete(item._id)} disabled={deleteId === item._id}
                    className="p-1.5 text-boma-charcoal/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40">
                    {deleteId === item._id ? <div className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-full py-12 text-center text-sm text-boma-charcoal/50">No gallery items yet. Add your first image above.</div>
          )}
        </div>
      )}
    </div>
  )
}

function SettingsTab() {
  const { user, updateProfile, updatePassword } = useAuthStore()
  const [profileData, setProfileData] = useState({ name: '', email: '', phone: '' })
  const [profileSaving, setProfileSaving] = useState(false)
  const [profileMsg, setProfileMsg] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [passwordSaving, setPasswordSaving] = useState(false)
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (user) setProfileData({ name: user.name || '', email: user.email || '', phone: user.phone || '' })
  }, [user])

  const handleSaveProfile = async () => {
    setProfileSaving(true)
    setProfileMsg('')
    const result = await updateProfile(profileData)
    setProfileSaving(false)
    setProfileMsg(result.success ? 'Profile updated successfully.' : (result.error || 'Failed to update profile.'))
  }

  const handleChangePassword = async () => {
    setPasswordSaving(true)
    setPasswordMsg('')
    setPasswordError('')
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('Passwords do not match.')
      setPasswordSaving(false)
      return
    }
    const result = await updatePassword({ currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword })
    setPasswordSaving(false)
    if (result.success) {
      setPasswordMsg('Password updated successfully.')
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } else {
      setPasswordError(result.error || 'Failed to update password.')
    }
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Settings</h1>
        <p className="text-sm text-boma-charcoal/60 mt-1">Manage your admin account</p>
      </div>

      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-6">
        <h3 className="font-bold text-boma-charcoal mb-4">Profile</h3>
        {profileMsg && (
          <div className={cn('flex items-center gap-2 py-3 px-4 text-sm mb-4 rounded-lg',
            profileMsg.includes('success') ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700')}>
            <AlertCircle className="w-4 h-4 shrink-0" />{profileMsg}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Name</label>
            <input type="text" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Email</label>
            <input type="email" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Phone</label>
            <input type="tel" value={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <button onClick={handleSaveProfile} disabled={profileSaving}
            className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60">
            {profileSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-6">
        <h3 className="font-bold text-boma-charcoal mb-4">Change Password</h3>
        {passwordMsg && (
          <div className="flex items-center gap-2 py-3 px-4 bg-green-50 border border-green-200 text-green-700 text-sm mb-4 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />{passwordMsg}
          </div>
        )}
        {passwordError && (
          <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm mb-4 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />{passwordError}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Current Password</label>
            <input type="password" value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">New Password</label>
            <div className="relative">
              <input type={showNewPassword ? 'text' : 'password'} value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                className="w-full px-4 pr-11 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Enter new password" />
              <button type="button" onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/60 hover:text-boma-charcoal">
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Confirm New Password</label>
            <input type="password" value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Confirm new password" />
          </div>
          <button onClick={handleChangePassword} disabled={passwordSaving}
            className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60">
            {passwordSaving ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </div>
    </div>
  )
}
