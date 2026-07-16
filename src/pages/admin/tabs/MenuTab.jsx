import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../../lib/utils'
import { menuAPI } from '../../../lib/api'
import { Search, Plus, Trash2, Edit3, Save, AlertCircle, UtensilsCrossed } from 'lucide-react'

const sections = [
  { value: 'starters', label: 'Starters' },
  { value: 'salad', label: 'Salad' },
  { value: 'soup', label: 'Soup' },
  { value: 'mainCourse', label: 'Main Course' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'beverages', label: 'Beverages' },
]

export default function MenuTab() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', description: '', section: 'mainCourse', price: '', dietary: [], isAvailable: true, sortOrder: 0 })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteId, setDeleteId] = useState(null)
  const [search, setSearch] = useState('')
  const [filterSection, setFilterSection] = useState('all')

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try { const data = await menuAPI.getAll(); setItems(data.items || []) } catch { /* empty */ }
    setLoading(false)
  }, [])

  useEffect(() => { fetchItems() }, [fetchItems])

  const resetForm = () => {
    setForm({ name: '', description: '', section: 'mainCourse', price: '', dietary: [], isAvailable: true, sortOrder: 0 })
    setEditing(null); setShowForm(false); setError('')
  }

  const handleEdit = (item) => {
    setForm({ name: item.name || '', description: item.description || '', section: item.section || 'mainCourse', price: item.price || '', dietary: item.dietary || [], isAvailable: item.isAvailable !== false, sortOrder: item.sortOrder || 0 })
    setEditing(item._id); setShowForm(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); setSaving(true); setError('')
    try {
      if (editing) {
        await menuAPI.update(editing, form)
        setItems((prev) => prev.map((i) => (i._id === editing ? { ...i, ...form } : i)))
      } else {
        const data = await menuAPI.add(form)
        setItems((prev) => [...prev, data.item])
      }
      resetForm()
    } catch (err) { setError(err.error || err.message || 'Failed to save') }
    setSaving(false)
  }

  const handleDelete = async (id) => {
    setDeleteId(id)
    try { await menuAPI.delete(id); setItems((prev) => prev.filter((i) => i._id !== id)) } catch { /* empty */ }
    setDeleteId(null)
  }

  const toggleDietary = (val) => {
    setForm((prev) => ({
      ...prev,
      dietary: prev.dietary.includes(val) ? prev.dietary.filter((d) => d !== val) : [...prev.dietary, val],
    }))
  }

  const filtered = items.filter((i) => {
    const matchSearch = i.name?.toLowerCase().includes(search.toLowerCase())
    const matchSection = filterSection === 'all' || i.section === filterSection
    return matchSearch && matchSection
  })

  const groupedItems = filtered.reduce((acc, item) => {
    const sec = item.section || 'other'
    if (!acc[sec]) acc[sec] = []
    acc[sec].push(item)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">Menu Items</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">{items.length} item{items.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex gap-3 items-center flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-boma-charcoal/40" />
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust w-48" />
          </div>
          <select value={filterSection} onChange={(e) => setFilterSection(e.target.value)}
            className="px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal focus:outline-none focus:border-boma-rust">
            <option value="all">All Sections</option>
            {sections.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <button onClick={() => { resetForm(); setShowForm(!showForm) }}
            className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Item
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="Dish name" />
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Section</label>
                <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust bg-white">
                  {sections.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Description</label>
                <input type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="Brief description" />
              </div>
              <div>
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-1">Price (optional)</label>
                <input type="text" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm focus:outline-none focus:border-boma-rust" placeholder="$0.00" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider mb-2">Dietary</label>
                <div className="flex gap-3">
                  {[{ val: 'v', label: 'Vegetarian' }, { val: 'vg', label: 'Vegan' }, { val: 'gf', label: 'Gluten Free' }, { val: 'n', label: 'Contains Nuts' }].map((d) => (
                    <button key={d.val} type="button" onClick={() => toggleDietary(d.val)}
                      className={cn('px-3 py-1 rounded-full text-xs font-medium border transition-colors',
                        form.dietary.includes(d.val) ? 'bg-boma-rust text-white border-boma-rust' : 'border-boma-charcoal/20 text-boma-charcoal/60 hover:bg-gray-50')}>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.isAvailable} onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })}
                    className="w-4 h-4 rounded border-boma-charcoal/30 text-boma-rust focus:ring-boma-rust" />
                  <span className="text-sm text-boma-charcoal">Available</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button type="submit" disabled={saving}
                className="px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60 flex items-center gap-2">
                <Save className="w-4 h-4" /> {saving ? 'Saving...' : editing ? 'Update' : 'Add Item'}
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
      ) : filtered.length === 0 ? (
        <div className="py-12 text-center text-sm text-boma-charcoal/50">
          <UtensilsCrossed className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No menu items found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([section, secItems]) => (
            <div key={section} className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden">
              <div className="px-5 py-3 bg-gray-50/50 border-b border-boma-charcoal/10">
                <h3 className="font-bold text-sm text-boma-charcoal uppercase tracking-wider">
                  {sections.find((s) => s.value === section)?.label || section}
                </h3>
              </div>
              <div className="divide-y divide-boma-charcoal/5">
                {secItems.map((item) => (
                  <div key={item._id} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-boma-charcoal">{item.name}</p>
                      {item.description && <p className="text-xs text-boma-charcoal/50 truncate">{item.description}</p>}
                      <div className="flex items-center gap-2 mt-1">
                        {(item.dietary || []).map((d) => (
                          <span key={d} className="text-[10px] uppercase bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full">{d}</span>
                        ))}
                        {!item.isAvailable && <span className="text-[10px] bg-red-50 text-red-500 px-1.5 py-0.5 rounded-full">Unavailable</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <button onClick={() => handleEdit(item)} className="p-1.5 text-boma-charcoal/40 hover:text-boma-rust hover:bg-boma-rust/5 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(item._id)} disabled={deleteId === item._id}
                        className="p-1.5 text-boma-charcoal/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
