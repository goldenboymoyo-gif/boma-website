import React, { useState, useEffect } from 'react'
import { cn } from '../../../lib/utils'
import useAuthStore from '../../../store/authStore'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

export default function SettingsTab() {
  const { user, updateProfile, updatePassword } = useAuthStore()
  const [profileData, setProfileData] = useState({ name: '', email: '', phone: '' })
  const [profileSaving, setProfileSaving] = useState(false)
  const [profileMsg, setProfileMsg] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [passwordSaving, setPasswordSaving] = useState(false)
  const [passwordMsg, setPasswordMsg] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (user) setProfileData({ name: user.name || '', email: user.email || '', phone: user.phone || '' })
  }, [user])

  const handleSaveProfile = async () => {
    setProfileSaving(true); setProfileMsg('')
    const result = await updateProfile(profileData)
    setProfileSaving(false)
    setProfileMsg(result.success ? 'Profile updated successfully.' : (result.error || 'Failed to update profile.'))
  }

  const handleChangePassword = async () => {
    setPasswordSaving(true); setPasswordMsg(''); setPasswordError('')
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('Passwords do not match.'); setPasswordSaving(false); return
    }
    const result = await updatePassword({ currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword })
    setPasswordSaving(false)
    if (result.success) {
      setPasswordMsg('Password updated successfully.')
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } else {
      setPasswordError(result.error || 'Failed to update password.')
    }
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-boma-charcoal">Settings</h1>
        <p className="text-sm text-boma-charcoal/60 mt-1">Manage your admin account</p>
      </div>

      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-6">
        <h3 className="font-bold text-boma-charcoal mb-4">Profile</h3>
        {profileMsg && (
          <div className={cn('flex items-center gap-2 py-3 px-4 text-sm mb-4 rounded-lg',
            profileMsg.includes('success') ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700')}>
            <AlertCircle className="w-4 h-4 shrink-0" />{profileMsg}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Name</label>
            <input type="text" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Email</label>
            <input type="email" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Phone</label>
            <input type="tel" value={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" />
          </div>
          <button onClick={handleSaveProfile} disabled={profileSaving}
            className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60">
            {profileSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-boma-charcoal/10 p-6">
        <h3 className="font-bold text-boma-charcoal mb-4">Change Password</h3>
        {passwordMsg && (
          <div className="flex items-center gap-2 py-3 px-4 bg-green-50 border border-green-200 text-green-700 text-sm mb-4 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />{passwordMsg}
          </div>
        )}
        {passwordError && (
          <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm mb-4 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />{passwordError}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Current Password</label>
            <input type="password" value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">New Password</label>
            <div className="relative">
              <input type={showNewPassword ? 'text' : 'password'} value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                className="w-full px-4 pr-11 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Enter new password" />
              <button type="button" onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/60 hover:text-boma-charcoal">
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-boma-charcoal mb-1">Confirm New Password</label>
            <input type="password" value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm focus:outline-none focus:border-boma-rust" placeholder="Confirm new password" />
          </div>
          <button onClick={handleChangePassword} disabled={passwordSaving}
            className="px-6 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-colors disabled:opacity-60">
            {passwordSaving ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </div>
    </div>
  )
}
