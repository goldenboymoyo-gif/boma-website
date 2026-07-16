import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { contentAPI } from '../../../lib/api'
import { Save, AlertCircle, FileText } from 'lucide-react'

const contentSections = [
  { key: 'hero', label: 'Hero Section', fields: [
    { key: 'tagline', label: 'Tagline', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'address', label: 'Address', type: 'text' },
    { key: 'hours', label: 'Hours', type: 'text' },
  ]},
  { key: 'booking', label: 'Booking Settings', fields: [
    { key: 'adultPrice', label: 'Adult Price (USD)', type: 'text' },
    { key: 'childPrice', label: 'Child Price (USD)', type: 'text' },
    { key: 'bookingUrl', label: 'Booking URL', type: 'text' },
  ]},
  { key: 'social', label: 'Social Media Links', fields: [
    { key: 'facebook', label: 'Facebook URL', type: 'text' },
    { key: 'instagram', label: 'Instagram URL', type: 'text' },
    { key: 'tripadvisor', label: 'TripAdvisor URL', type: 'text' },
    { key: 'youtube', label: 'YouTube URL', type: 'text' },
  ]},
  { key: 'contact', label: 'Contact / Enquiries', fields: [
    { key: 'heading', label: 'Heading', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ]},
  { key: 'about', label: 'About Us', fields: [
    { key: 'title', label: 'Page Title', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ]},
]

export default function ContentTab() {
  const [allContent, setAllContent] = useState({})
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [editedFields, setEditedFields] = useState({})

  const fetchContent = useCallback(async () => {
    setLoading(true)
    try {
      const data = await contentAPI.getAll()
      setAllContent(data.items || {})
    } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchContent() }, [fetchContent])

  const section = contentSections.find((s) => s.key === activeSection)
  const currentData = allContent[activeSection] || {}

  const handleFieldChange = (fieldKey, value) => {
    setEditedFields((prev) => ({ ...prev, [fieldKey]: value }))
  }

  const getFieldValue = (fieldKey) => {
    if (editedFields[fieldKey] !== undefined) return editedFields[fieldKey]
    return currentData[fieldKey] || ''
  }

  const handleSave = async () => {
    setSaving(true); setMsg('')
    try {
      const updates = {}
      section.fields.forEach((f) => {
        if (editedFields[f.key] !== undefined) {
          updates[f.key] = editedFields[f.key]
        }
      })
      if (Object.keys(updates).length === 0) {
        setMsg('No changes to save')
        setSaving(false)
        return
      }
      await contentAPI.set(activeSection, updates)
      setAllContent((prev) => ({ ...prev, [activeSection]: { ...prev[activeSection], ...updates } }))
      setEditedFields({})
      setMsg('Content saved successfully')
      setTimeout(() => setMsg(''), 3000)
    } catch (err) {
      setMsg(err.error || err.message || 'Failed to save')
    }
    setSaving(false)
  }

  const hasChanges = Object.keys(editedFields).length > 0

  if (loading) {
    return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Site Content</h1>
        <p className="text-sm text-boma-charcoal/60 mt-1">Edit text and settings across the website</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-56 shrink-0">
          <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden lg:sticky lg:top-6">
            <nav className="p-2">
              {contentSections.map((sec) => (
                <button key={sec.key} onClick={() => { setActiveSection(sec.key); setEditedFields({}); setMsg('') }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === sec.key ? 'bg-boma-rust/10 text-boma-rust' : 'text-boma-charcoal hover:bg-gray-50'
                  }`}>
                  {sec.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {msg && (
            <div className={`flex items-center gap-2 py-3 px-4 text-sm mb-4 rounded-lg ${
              msg.includes('success') || msg.includes('saved') ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
            }`}>
              <AlertCircle className="w-4 h-4 shrink-0" />{msg}
            </div>
          )}

          <div className="bg-white rounded-xl border border-boma-charcoal/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-boma-charcoal">{section.label}</h3>
              <button onClick={handleSave} disabled={saving || !hasChanges}
                className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-40 flex items-center gap-2">
                <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
            <div className="space-y-5">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea rows={4} value={getFieldValue(field.key)} onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust resize-y" />
                  ) : (
                    <input type="text" value={getFieldValue(field.key)} onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" />
                  )}
                </div>
              ))}
            </div>
            {Object.keys(allContent).length > 0 && (
              <p className="text-[10px] text-boma-charcoal/30 mt-6">
                Last updated: {allContent[activeSection]?.updatedAt ? new Date(allContent[activeSection].updatedAt?.toDate?.() || allContent[activeSection].updatedAt).toLocaleString() : 'Never'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
