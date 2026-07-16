import React, { useState, useEffect, useCallback } from 'react'
import { cn } from '../../../lib/utils'
import { messagesAPI } from '../../../lib/api'
import { Mail, Trash2, ExternalLink, Phone } from 'lucide-react'

const formatDate = (dateVal) => {
  if (!dateVal) return '—'
  const d = dateVal?.toDate ? dateVal.toDate() : new Date(dateVal)
  if (isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function MessagesTab() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState(null)

  const fetchMessages = useCallback(async () => {
    setLoading(true)
    try { const data = await messagesAPI.getAll(); setMessages(data.messages || []) } catch { /* empty */ }
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

  if (loading) {
    return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Messages</h1>
        <p className="text-sm text-boma-charcoal/60 mt-1">{unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}</p>
      </div>

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
    </div>
  )
}
