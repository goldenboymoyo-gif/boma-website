import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'
import { newsAPI, eventsAPI, menuAPI, galleryAPI, messagesAPI } from '../../../lib/api'
import {
  LayoutDashboard, Newspaper, CalendarDays, UtensilsCrossed, Image,
  Mail, ChevronRight, FileText,
} from 'lucide-react'

export default function OverviewTab({ setActiveTab }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      newsAPI.getAll().catch(() => ({ items: [] })),
      eventsAPI.getAll().catch(() => ({ items: [] })),
      menuAPI.getAll().catch(() => ({ items: [] })),
      galleryAPI.getAll().catch(() => ({ items: [] })),
      messagesAPI.getAll().catch(() => ({ messages: [] })),
    ]).then(([news, events, menu, gallery, messages]) => {
      setStats({
        newsCount: news.items?.length || 0,
        eventsCount: events.items?.length || 0,
        menuCount: menu.items?.length || 0,
        galleryCount: gallery.items?.length || 0,
        unreadMessages: messages.messages?.filter((m) => !m.isRead).length || 0,
      })
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
  }

  const statCards = [
    { label: 'News Articles', value: stats?.newsCount ?? 0, icon: Newspaper, color: 'bg-blue-500/10 text-blue-600', tab: 'news' },
    { label: 'Events', value: stats?.eventsCount ?? 0, icon: CalendarDays, color: 'bg-green-500/10 text-green-600', tab: 'events' },
    { label: 'Menu Items', value: stats?.menuCount ?? 0, icon: UtensilsCrossed, color: 'bg-purple-500/10 text-purple-600', tab: 'menu' },
    { label: 'Gallery Images', value: stats?.galleryCount ?? 0, icon: Image, color: 'bg-orange-500/10 text-orange-600', tab: 'gallery' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Dashboard</h1>
        <p className="text-sm text-boma-charcoal mt-1">Manage your website content.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.button key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveTab(stat.tab)}
              className="bg-white rounded-xl border border-boma-charcoal/10 p-5 text-left hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <ChevronRight className="w-4 h-4 text-boma-charcoal/30" />
              </div>
              <p className="text-2xl font-bold text-boma-charcoal">{stat.value}</p>
              <p className="text-xs text-boma-charcoal/60 mt-1">{stat.label}</p>
            </motion.button>
          )
        })}
      </div>

      {stats?.unreadMessages > 0 && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setActiveTab('messages')}
          className="bg-white rounded-xl border border-boma-charcoal/10 p-5 w-full text-left hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-boma-charcoal">{stats.unreadMessages} unread message{stats.unreadMessages > 1 ? 's' : ''}</p>
            <p className="text-xs text-boma-charcoal/60">Click to view your inbox</p>
          </div>
          <ChevronRight className="w-4 h-4 text-boma-charcoal/30" />
        </motion.button>
      )}

      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-5">
        <h3 className="font-bold text-boma-charcoal mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { label: 'Add News Article', icon: Newspaper, tab: 'news' },
            { label: 'Create Event', icon: CalendarDays, tab: 'events' },
            { label: 'Add Menu Item', icon: UtensilsCrossed, tab: 'menu' },
            { label: 'Manage Gallery', icon: Image, tab: 'gallery' },
            { label: 'Edit Site Content', icon: FileText, tab: 'content' },
            { label: 'View Messages', icon: Mail, tab: 'messages' },
          ].map((action) => {
            const Icon = action.icon
            return (
              <button key={action.label} onClick={() => setActiveTab(action.tab)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-boma-charcoal hover:bg-gray-50 transition-colors text-left">
                <Icon className="w-4 h-4 text-boma-rust" />
                {action.label}
                <ChevronRight className="w-4 h-4 ml-auto text-boma-charcoal/30" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
