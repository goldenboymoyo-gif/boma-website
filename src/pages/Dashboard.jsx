import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import useAuthStore from '../store/authStore';
import { bookingsAPI } from '../lib/api';
import {
  CalendarDays,
  User,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Bell,
  Edit2,
  Camera,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  XCircle,
  Trash2,
  AlertCircle,
} from 'lucide-react';

const navItems = [
  { id: 'bookings', label: 'My Bookings', icon: CalendarDays },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
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
  completed: {
    label: 'Completed',
    icon: CheckCircle2,
    color: 'bg-blue-100 text-blue-700',
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout, updateProfile, updatePassword } = useAuthStore();
  const [activeTab, setActiveTab] = useState('bookings');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (user?.role === 'admin') {
      navigate('/admin', { replace: true });
    }
  }, [user, navigate]);
  const [bookings, setBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileMsg, setProfileMsg] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    promotions: true,
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await bookingsAPI.getMine();
        setBookings(data.bookings || []);
      } catch {
        setBookings([]);
      } finally {
        setBookingsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleCancelBooking = async (id) => {
    try {
      await bookingsAPI.cancel(id);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: 'cancelled' } : b))
      );
    } catch {
      // silently fail
    }
  };

  const handleSaveProfile = async () => {
    setProfileSaving(true);
    setProfileMsg('');
    const result = await updateProfile({
      name: profileData.fullName,
      email: profileData.email,
      phone: profileData.phone,
    });
    setProfileSaving(false);
    if (result.success) {
      setProfileMsg('Profile updated successfully.');
      setIsEditingProfile(false);
    } else {
      setProfileMsg(result.error || 'Failed to update profile.');
    }
  };

  const handleChangePassword = async () => {
    setPasswordSaving(true);
    setPasswordMsg('');
    setPasswordError('');
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('Passwords do not match.');
      setPasswordSaving(false);
      return;
    }
    const result = await updatePassword({
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
    });
    setPasswordSaving(false);
    if (result.success) {
      setPasswordMsg('Password updated successfully.');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      setPasswordError(result.error || 'Failed to update password.');
    }
  };

  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'cancelled' && new Date(b.date) >= new Date()
  );
  const pastBookings = bookings.filter(
    (b) => b.status === 'cancelled' || new Date(b.date) < new Date()
  );

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getInitials = (name) => {
    if (!name) return '??';
    return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* User Profile */}
      <div className="p-6 border-b border-boma-charcoal/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-boma-rust to-boma-charcoal flex items-center justify-center text-white font-bold text-lg">
            {getInitials(user?.name)}
          </div>
          <div>
            <p className="font-semibold text-boma-charcoal">{user?.name}</p>
            <p className="text-xs text-boma-charcoal">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
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

      {/* Logout */}
      <div className="p-4 border-t border-boma-charcoal/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-8">
      {/* Upcoming Bookings */}
      <div>
        <h3 className="text-lg font-bold text-boma-charcoal mb-4">Upcoming Bookings</h3>
        {bookingsLoading ? (
          <div className="text-center py-12">
            <div className="w-6 h-6 border-2 border-boma-rust/30 border-t-boma-rust rounded-full animate-spin mx-auto" />
          </div>
        ) : upcomingBookings.length > 0 ? (
          <div className="space-y-3">
            {upcomingBookings.map((booking) => {
              const status = statusConfig[booking.status] || statusConfig.pending;
              const StatusIcon = status.icon;
              return (
                <motion.div
                  key={booking._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-boma-charcoal/10 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-boma-rust/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CalendarDays className="w-6 h-6 text-boma-rust" />
                      </div>
                      <div>
                        <p className="font-semibold text-boma-charcoal">Dinner Experience</p>
                        <p className="text-sm text-boma-charcoal">
                          {formatDate(booking.date)} at {booking.time}
                        </p>
                        <p className="text-xs text-boma-charcoal/75 mt-1">
                          {booking.adults + (booking.children || 0)} guest{(booking.adults + (booking.children || 0)) > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                          status.color
                        )}
                      >
                        <StatusIcon className="w-3.5 h-3.5" />
                        {status.label}
                      </span>
                      {booking.status !== 'cancelled' && (
                        <button
                          onClick={() => handleCancelBooking(booking._id)}
                          className="p-2 text-boma-charcoal/60 hover:text-red-500 transition-colors"
                          title="Cancel booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-boma-charcoal/10">
            <CalendarDays className="w-12 h-12 text-boma-charcoal/20 mx-auto mb-3" />
            <p className="text-boma-charcoal">No upcoming bookings</p>
            <Link
              to="/booking"
              className="inline-block mt-3 px-4 py-2 bg-boma-rust text-white rounded-lg text-sm font-medium hover:bg-boma-rust/90"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>

      {/* Past Bookings */}
      <div>
        <h3 className="text-lg font-bold text-boma-charcoal mb-4">Past Bookings</h3>
        {pastBookings.length > 0 ? (
          <div className="space-y-3">
            {pastBookings.map((booking) => {
              const status = statusConfig[booking.status] || statusConfig.pending;
              const StatusIcon = status.icon;
              return (
                <div
                  key={booking._id}
                  className="bg-white rounded-xl border border-boma-charcoal/10 p-5 opacity-75"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-boma-charcoal/5 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CalendarDays className="w-6 h-6 text-boma-charcoal/60" />
                      </div>
                      <div>
                        <p className="font-semibold text-boma-charcoal">Dinner Experience</p>
                        <p className="text-sm text-boma-charcoal">
                          {formatDate(booking.date)} at {booking.time}
                        </p>
                        <p className="text-xs text-boma-charcoal/75 mt-1">
                          {booking.adults + (booking.children || 0)} guest{(booking.adults + (booking.children || 0)) > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                        status.color
                      )}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-boma-charcoal/50 text-sm">
            No past bookings yet.
          </div>
        )}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-lg">
      <h3 className="text-lg font-bold text-boma-charcoal mb-6">Edit Profile</h3>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-boma-rust to-boma-charcoal flex items-center justify-center text-white font-bold text-2xl">
            {getInitials(user?.name)}
          </div>
        </div>
        <div>
          <p className="font-semibold text-boma-charcoal">{user?.name}</p>
          <p className="text-sm text-boma-charcoal">
            Member since {user?.createdAt ? new Date(user.createdAt).getFullYear() : '2025'}
          </p>
        </div>
      </div>

      {profileMsg && (
        <div className={cn(
          'flex items-center gap-2 py-3 px-4 text-sm mb-6',
          profileMsg.includes('success')
            ? 'bg-green-50 border border-green-200 text-green-700'
            : 'bg-red-50 border border-red-200 text-red-700'
        )}>
          <AlertCircle className="w-4 h-4 shrink-0" />
          {profileMsg}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-boma-charcoal mb-1">Full Name</label>
          <input
            type="text"
            value={profileData.fullName}
            onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
            className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-boma-charcoal mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
            className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-boma-charcoal mb-1">Phone</label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
          />
        </div>
        <button
          onClick={handleSaveProfile}
          disabled={profileSaving}
          className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60"
        >
          {profileSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="max-w-lg space-y-8">
      {/* Change Password */}
      <div>
        <h3 className="text-lg font-bold text-boma-charcoal mb-4">Change Password</h3>

        {passwordMsg && (
          <div className="flex items-center gap-2 py-3 px-4 bg-green-50 border border-green-200 text-green-700 text-sm mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {passwordMsg}
          </div>
        )}
        {passwordError && (
          <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {passwordError}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
              <input
                type={showOldPassword ? 'text' : 'password'}
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                className="w-full pl-11 pr-11 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/60 hover:text-boma-charcoal"
              >
                {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                className="w-full pl-11 pr-11 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/60 hover:text-boma-charcoal"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
              <input
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                className="w-full pl-11 pr-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white focus:outline-none focus:border-boma-rust"
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <button
            onClick={handleChangePassword}
            disabled={passwordSaving}
            className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60"
          >
            {passwordSaving ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div>
        <h3 className="text-lg font-bold text-boma-charcoal mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive booking confirmations & updates via email' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Get text reminders before your reservations' },
            { key: 'promotions', label: 'Promotional Offers', desc: 'Receive exclusive deals and event invitations' },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-boma-charcoal/10"
            >
              <div>
                <p className="font-medium text-boma-charcoal text-sm">{item.label}</p>
                <p className="text-xs text-boma-charcoal mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() =>
                  setNotifications({ ...notifications, [item.key]: !notifications[item.key] })
                }
                className={cn(
                  'w-11 h-6 rounded-full transition-colors relative',
                  notifications[item.key] ? 'bg-boma-rust' : 'bg-boma-charcoal/20'
                )}
              >
                <div
                  className={cn(
                    'w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 transition-transform',
                    notifications[item.key] ? 'translate-x-5.5' : 'translate-x-0.5'
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
        <p className="font-bold text-boma-charcoal">My Dashboard</p>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-boma-rust to-boma-charcoal flex items-center justify-center text-white font-bold text-xs">
          {getInitials(user?.name)}
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 bg-white border-r border-boma-charcoal/10 min-h-[calc(100vh-64px)] sticky top-0">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/40 z-40"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: 'spring', damping: 25 }}
                className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-xl"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 text-boma-charcoal hover:bg-white rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <SidebarContent />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'bookings' && renderBookings()}
              {activeTab === 'profile' && renderProfile()}
              {activeTab === 'settings' && renderSettings()}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
