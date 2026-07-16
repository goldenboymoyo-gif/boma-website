import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../../lib/utils'
import { newsAPI } from '../../../lib/api'
import { Search, Plus, Trash2, Edit3, Save, AlertCircle, Newspaper } from 'lucide-react'

const formatDate = (dateVal) => {
  if (!dateVal) return '—'
  const d = dateVal?.toDate ? dateVal.toDate() : new Date(dateVal)
  if (isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function NewsTab() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', image: '', category: 'general', isPublished: true })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteId, setDeleteId] = useState(null)
  const [search, setSearch] = useState('')

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      const data = await newsAPI.getAll()
      setItems(data.items || [])
    } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchItems() }, [fetchItems])

  const resetForm = () => {
    setForm({ title: '', excerpt: '', content: '', image: '', category: 'general', isPublished: true })
    setEditing(null); setShowForm(false); setError('')
  }

  const handleEdit = (item) => {
    setForm({ title: item.title || '', excerpt: item.excerpt || '', content: item.content || '', image: item.image || '', category: item.category || 'general', isPublished: item.isPublished !== false })
    setEditing(item._id); setShowForm(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); setSaving(true); setError('')
    try {
      if (editing) {
        await newsAPI.update(editing, form)
        setItems((prev) => prev.map((i) => (i._id === editing ? { ...i, ...form } : i)))
      } else {
        const data = await newsAPI.add(form)
        setItems((prev) => [data.item, ...prev])
      }
      resetForm()
    } catch (err) { setError(err.error || err.message || 'Failed to save') }
    setSaving(false)
  }

  const handleDelete = async (id) => {
    setDeleteId(id)
    try { await newsAPI.delete(id); setItems((prev) => prev.filter((i) => i._id !== id)) } catch { /* empty */ }
    setDeleteId(null)
  }

  const filtered = items.filter((i) => i.title?.toLowerCase().includes(search.toLowerCase()) || i.category?.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">News & Updates</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">{items.length} article{items.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-boma-charcoal/40" />
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust w-48" />
          </div>
          <button onClick={() => { resetForm(); setShowForm(!showForm) }}
            className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Article
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit} className="bg-white rounded-xl border border-boma-charcoal/10 p-6 overflow-hidden">
            {error && (
              <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />{error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Title</label>
                <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="Article title" />
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust bg-white">
                  <option value="general">General</option>
                  <option value="news">News</option>
                  <option value="events">Events</option>
                  <option value="promotions">Promotions</option>
                  <option value="awards">Awards</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Image URL</label>
                <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="https://..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Excerpt</label>
                <input type="text" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="Brief summary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Content</label>
                <textarea rows={5} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust resize-y" placeholder="Full article content..." />
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                    className="w-4 h-4 rounded border-boma-charcoal/30 text-boma-rust focus:ring-boma-rust" />
                  <span className="text-sm text-boma-charcoal">Published</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button type="submit" disabled={saving}
                className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60 flex items-center gap-2">
                <Save className="w-4 h-4" /> {saving ? 'Saving...' : editing ? 'Update' : 'Publish'}
              </button>
              <button type="button" onClick={resetForm}
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
        <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-boma-charcoal/10 bg-gray-50/50">
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Title</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Category</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Date</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item._id} className="border-b border-boma-charcoal/5 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-boma-charcoal">{item.title}</p>
                      {item.excerpt && <p className="text-xs text-boma-charcoal/50 truncate max-w-xs">{item.excerpt}</p>}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-[10px] uppercase tracking-wider text-boma-charcoal/50 bg-boma-charcoal/5 px-2 py-0.5 rounded-full">{item.category}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-boma-charcoal/70">{formatDate(item.createdAt)}</td>
                    <td className="px-5 py-4">
                      <span className={cn('text-xs font-medium px-2 py-0.5 rounded-full', item.isPublished !== false ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500')}>
                        {item.isPublished !== false ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleEdit(item)} className="p-1.5 text-boma-charcoal/40 hover:text-boma-rust hover:bg-boma-rust/5 rounded-lg transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item._id)} disabled={deleteId === item._id}
                          className="p-1.5 text-boma-charcoal/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} className="px-5 py-12 text-center text-sm text-boma-charcoal/50">No articles found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
