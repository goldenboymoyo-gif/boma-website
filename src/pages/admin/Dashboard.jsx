import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'
import useAuthStore from '../../store/authStore'
import {
  LayoutDashboard, Newspaper, CalendarDays, UtensilsCrossed, Users,
  Image, Settings, Mail, FileText, ChevronRight, Menu, X, LogOut,
} from 'lucide-react'
import OverviewTab from './tabs/OverviewTab'
import NewsTab from './tabs/NewsTab'
import EventsTab from './tabs/EventsTab'
import MenuTab from './tabs/MenuTab'
import GalleryTab from './tabs/GalleryTab'
import ContentTab from './tabs/ContentTab'
import MessagesTab from './tabs/MessagesTab'
import UsersTab from './tabs/UsersTab'
import SettingsTab from './tabs/SettingsTab'

const sidebarNav = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'news', label: 'News & Updates', icon: Newspaper },
  { id: 'events', label: 'Events & Functions', icon: CalendarDays },
  { id: 'menu', label: 'Menu Items', icon: UtensilsCrossed },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'content', label: 'Site Content', icon: FileText },
  { id: 'messages', label: 'Messages', icon: Mail },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
]

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
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarNav.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                isActive ? 'bg-boma-rust/10 text-boma-rust' : 'text-boma-charcoal hover:bg-white'
              )}>
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
        <button onClick={() => { logout(); navigate('/login') }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors w-full mt-2">
          <LogOut className="w-4 h-4" /> Logout
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
        <main className="flex-1 p-6 lg:p-8 min-w-0">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
            {activeTab === 'news' && <NewsTab />}
            {activeTab === 'events' && <EventsTab />}
            {activeTab === 'menu' && <MenuTab />}
            {activeTab === 'gallery' && <GalleryTab />}
            {activeTab === 'content' && <ContentTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'users' && <UsersTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
