import React, { useState, useEffect } from 'react'
import { cn } from '../../../lib/utils'
import { adminAPI } from '../../../lib/api'
import { Search, Users } from 'lucide-react'

const formatDate = (dateVal) => {
  if (!dateVal) return '—'
  const d = dateVal?.toDate ? dateVal.toDate() : new Date(dateVal)
  if (isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const getInitials = (name) => {
  if (!name) return '??'
  return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
}

export default function UsersTab() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    adminAPI.getCustomers().then((data) => { setCustomers(data.users || []); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  const filtered = customers.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()) || c.email?.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-boma-charcoal">Users</h1>
          <p className="text-sm text-boma-charcoal/60 mt-1">{customers.length} registered user{customers.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-boma-charcoal/40" />
          <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust w-64" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-boma-charcoal/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-boma-charcoal/10 bg-gray-50/50">
                <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">User</th>
                <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Email</th>
                <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Phone</th>
                <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">Role</th>
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
                      <p className="text-sm font-medium text-boma-charcoal">{customer.name}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-boma-charcoal">{customer.email}</td>
                  <td className="px-5 py-4 text-sm text-boma-charcoal/70">{customer.phone || '—'}</td>
                  <td className="px-5 py-4">
                    <span className={cn('text-xs font-medium px-2 py-0.5 rounded-full',
                      customer.role === 'admin' ? 'bg-boma-rust/10 text-boma-rust' : 'bg-gray-100 text-gray-600')}>
                      {customer.role || 'user'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-boma-charcoal/70">{formatDate(customer.createdAt)}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="px-5 py-12 text-center text-sm text-boma-charcoal/50">No users found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
