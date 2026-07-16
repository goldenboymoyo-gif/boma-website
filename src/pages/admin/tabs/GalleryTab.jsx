import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../../lib/utils'
import { galleryAPI } from '../../../lib/api'
import { Plus, Trash2, AlertCircle } from 'lucide-react'

export default function GalleryTab() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [form, setForm] = useState({ title: '', image: '', category: 'venue' })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteId, setDeleteId] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try { const data = await galleryAPI.getAll(); setItems(data.items || []) } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchItems() }, [fetchItems])

  const handleAdd = async (e) => {
    e.preventDefault(); setSaving(true); setError('')
    try {
      const data = await galleryAPI.add(form)
      setItems((prev) => [data.item, ...prev])
      setForm({ title: '', image: '', category: 'venue' }); setShowAddForm(false)
    } catch (err) { setError(err.error || 'Failed to add item') }
    setSaving(false)
  }

  const handleDelete = async (id) => {
    setDeleteId(id)
    try { await galleryAPI.delete(id); setItems((prev) => prev.filter((i) => i._id !== id)) } catch { /* empty */ }
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
