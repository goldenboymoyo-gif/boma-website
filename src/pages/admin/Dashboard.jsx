import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UtensilsCrossed,
  Image,
  Settings,
  ChevronRight,
  TrendingUp,
  DollarSign,
  UserCheck,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  Clock,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
  Bell,
  Search,
} from 'lucide-react';

const sidebarNav = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'Bookings', icon: CalendarDays },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const stats = [
  {
    label: 'Total Bookings',
    value: '1,284',
    change: '+12%',
    up: true,
    icon: CalendarDays,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    label: 'Revenue',
    value: '$84,320',
    change: '+8.5%',
    up: true,
    icon: DollarSign,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    label: 'Total Guests',
    value: '4,892',
    change: '+15%',
    up: true,
    icon: Users,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    label: 'Active This Month',
    value: '342',
    change: '-2%',
    up: false,
    icon: Activity,
    color: 'bg-orange-500/10 text-orange-600',
  },
];

const recentBookings = [
  {
    id: 'BK-7291',
    customer: 'Emma Thompson',
    email: 'emma.t@email.com',
    date: '2026-07-18',
    time: '7:00 PM',
    guests: 4,
    amount: '$260',
    status: 'confirmed',
  },
  {
    id: 'BK-7290',
    customer: 'James Wilson',
    email: 'j.wilson@email.com',
    date: '2026-07-19',
    time: '6:30 PM',
    guests: 2,
    amount: '$130',
    status: 'pending',
  },
  {
    id: 'BK-7289',
    customer: 'Amara Okafor',
    email: 'amara.o@email.com',
    date: '2026-07-20',
    time: '12:00 PM',
    guests: 8,
    amount: '$520',
    status: 'confirmed',
  },
  {
    id: 'BK-7288',
    customer: 'Sarah Chen',
    email: 's.chen@email.com',
    date: '2026-07-21',
    time: '1:30 PM',
    guests: 3,
    amount: '$195',
    status: 'pending',
  },
  {
    id: 'BK-7287',
    customer: 'Michael Brown',
    email: 'm.brown@email.com',
    date: '2026-07-17',
    time: '8:00 PM',
    guests: 6,
    amount: '$390',
    status: 'cancelled',
  },
  {
    id: 'BK-7286',
    customer: 'Lisa Patel',
    email: 'l.patel@email.com',
    date: '2026-07-22',
    time: '5:30 PM',
    guests: 2,
    amount: '$130',
    status: 'confirmed',
  },
];

const statusConfig = {
  confirmed: {
    label: 'Confirmed',
    icon: CheckCircle2,
    color: 'bg-green-100 text-green-700',
  },
  pending: {
    label: 'Pending',
    icon: Clock,
    color: 'bg-yellow-100 text-yellow-700',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircle,
    color: 'bg-red-100 text-red-700',
  },
};

const formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
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

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarNav.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                isActive
                  ? 'bg-boma-rust/10 text-boma-rust'
                  : 'text-boma-charcoal hover:bg-white'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          );
        })}
      </nav>

      {/* Admin Profile */}
      <div className="p-4 border-t border-boma-charcoal/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-boma-charcoal flex items-center justify-center text-white font-bold text-xs">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-boma-charcoal truncate">Admin User</p>
            <p className="text-xs text-boma-charcoal truncate">admin@boma.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-boma-charcoal/10 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    'flex items-center gap-1 text-xs font-medium',
                    stat.up ? 'text-green-600' : 'text-red-500'
                  )}
                >
                  {stat.up ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-boma-charcoal">{stat.value}</p>
              <p className="text-xs text-boma-charcoal mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-boma-charcoal/10">
          <div className="flex items-center justify-between p-5 border-b border-boma-charcoal/10">
            <h3 className="font-bold text-boma-charcoal">Recent Bookings</h3>
            <button
              onClick={() => setActiveTab('bookings')}
              className="text-xs text-boma-rust font-medium hover:text-boma-rust/80 flex items-center gap-1"
            >
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-boma-charcoal/5">
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">
                    Customer
                  </th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">
                    Guests
                  </th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-boma-charcoal/60 uppercase tracking-wider px-5 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.slice(0, 5).map((booking) => {
                  const status = statusConfig[booking.status];
                  const StatusIcon = status.icon;
                  return (
                    <tr
                      key={booking.id}
                      className="border-b border-boma-charcoal/5 last:border-0 hover:bg-white/50 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <div>
                          <p className="text-sm font-medium text-boma-charcoal">
                            {booking.customer}
                          </p>
                          <p className="text-xs text-boma-charcoal">{booking.email}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-boma-charcoal">
                        {formatDate(booking.date)}
                        <br />
                        <span className="text-xs text-boma-charcoal/60">{booking.time}</span>
                      </td>
                      <td className="px-5 py-4 text-sm text-boma-charcoal">{booking.guests}</td>
                      <td className="px-5 py-4 text-sm font-medium text-boma-charcoal">
                        {booking.amount}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium',
                            status.color
                          )}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart Placeholder + Quick Actions */}
        <div className="space-y-6">
          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl border border-boma-charcoal/10 p-5">
            <h3 className="font-bold text-boma-charcoal mb-4">Revenue Trend</h3>
            <div className="h-48 bg-gradient-to-br from-boma-rust/5 to-boma-charcoal/5 rounded-lg flex items-center justify-center border border-dashed border-boma-charcoal/20">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-boma-rust/40 mx-auto mb-2" />
                <p className="text-xs text-boma-charcoal/50">Chart Component</p>
                <p className="text-[10px] text-boma-charcoal/30">Integrate with chart library</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="text-center">
                <p className="text-lg font-bold text-boma-charcoal">$28K</p>
                <p className="text-[10px] text-boma-charcoal">This Month</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-boma-charcoal">$56K</p>
                <p className="text-[10px] text-boma-charcoal">Last Month</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-green-600">+12%</p>
                <p className="text-[10px] text-boma-charcoal">Growth</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-boma-charcoal/10 p-5">
            <h3 className="font-bold text-boma-charcoal mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: 'Add New Booking', icon: CalendarDays, tab: 'bookings' },
                { label: 'Update Menu', icon: UtensilsCrossed, tab: 'menu' },
                { label: 'Manage Gallery', icon: Image, tab: 'gallery' },
                { label: 'View Customers', icon: Users, tab: 'customers' },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    onClick={() => setActiveTab(action.tab)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-boma-charcoal hover:bg-white transition-colors text-left"
                  >
                    <Icon className="w-4 h-4 text-boma-rust" />
                    {action.label}
                    <ChevronRight className="w-4 h-4 ml-auto text-boma-charcoal/30" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title, icon) => {
    const Icon = icon;
    return (
      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-12 text-center">
        <Icon className="w-16 h-16 text-boma-charcoal/20 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-boma-charcoal mb-2">{title}</h3>
        <p className="text-sm text-boma-charcoal">This section is coming soon.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-boma-charcoal/10 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-boma-charcoal hover:bg-white rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-boma-rust rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">B</span>
          </div>
          <p className="font-bold text-boma-charcoal text-sm">Admin</p>
        </div>
        <button className="relative p-2 text-boma-charcoal hover:bg-white rounded-lg">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-boma-charcoal/10 min-h-screen sticky top-0">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-xl">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-boma-charcoal hover:bg-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <SidebarContent />
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Top Bar */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-boma-charcoal">
                {sidebarNav.find((n) => n.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-sm text-boma-charcoal mt-1">
                Welcome back, here's what's happening today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-boma-charcoal/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust w-64"
                />
              </div>
              <button className="relative p-2.5 text-boma-charcoal hover:bg-white rounded-lg border border-boma-charcoal/20">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'bookings' &&
              renderPlaceholder('Bookings Management', CalendarDays)}
            {activeTab === 'customers' &&
              renderPlaceholder('Customer Management', Users)}
            {activeTab === 'menu' &&
              renderPlaceholder('Menu Management', UtensilsCrossed)}
            {activeTab === 'gallery' &&
              renderPlaceholder('Gallery Management', Image)}
            {activeTab === 'settings' && renderPlaceholder('Admin Settings', Settings)}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
