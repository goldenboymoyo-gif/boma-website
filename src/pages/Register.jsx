import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import useAuthStore from '../store/authStore';
import {
  User,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const registerUser = useAuthStore((s) => s.register);
  const clearError = useAuthStore((s) => s.clearError);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const password = watch('password');

  const passwordChecks = [
    { label: 'At least 8 characters', met: password?.length >= 8 },
    { label: 'Contains a number', met: /\d/.test(password) },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError('');
    clearError();
    const result = await registerUser({
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
    setIsSubmitting(false);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setServerError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://vfsc-umbraco.live.fireworkx.net/media/4xplgbfg/victoria-falls-safari-lodge-2025-06-09t111245846.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-boma-charcoal/70 via-boma-charcoal/50 to-boma-charcoal/80" />
        <div className="absolute inset-0 bg-boma-green/30 mix-blend-multiply" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>BOMA</h1>
            <p className="text-boma-rust text-lg mb-8" style={{ fontFamily: 'var(--font-accent)' }}>Join Our Community</p>
            <div className="space-y-4 text-white/85">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Create your personal profile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Easy online reservations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Exclusive member benefits</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Manage bookings & preferences</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Home Link */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-boma-charcoal/60 hover:text-boma-rust transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-boma-charcoal">BOMA</h1>
            <p className="text-boma-rust text-sm">Join Our Community</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-boma-charcoal">Create Account</h2>
            <p className="text-boma-charcoal mt-1">Start your Boma experience today</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {serverError && (
              <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {serverError}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-boma-charcoal mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
                <input
                  type="text"
                  {...register('fullName', { required: 'Full name is required' })}
                  className={cn(
                    'w-full pl-11 pr-4 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-boma-charcoal mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                  })}
                  className={cn(
                    'w-full pl-11 pr-4 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-boma-charcoal mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^[0-9+\-\s()]+$/, message: 'Invalid phone number' },
                  })}
                  className={cn(
                    'w-full pl-11 pr-4 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.phone ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-boma-charcoal mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  })}
                  className={cn(
                    'w-full pl-11 pr-11 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.password ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/40 hover:text-boma-charcoal"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password.message}
                </p>
              )}
              {password && (
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {passwordChecks.map((check) => (
                    <div key={check.label} className="flex items-center gap-1.5 text-xs">
                      <Check
                        className={cn(
                          'w-3 h-3',
                          check.met ? 'text-green-500' : 'text-boma-charcoal/50'
                        )}
                      />
                      <span className={check.met ? 'text-green-600' : 'text-boma-charcoal/60'}>
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-boma-charcoal mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/60" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (val) => val === password || 'Passwords do not match',
                  })}
                  className={cn(
                    'w-full pl-11 pr-11 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.confirmPassword ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/40 hover:text-boma-charcoal"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('termsAccepted', {
                    required: 'You must accept the terms and conditions',
                  })}
                  className="w-4 h-4 mt-0.5 text-boma-rust border-boma-charcoal/30 rounded focus:ring-boma-rust"
                />
                <span className="text-sm text-boma-charcoal">
                  I agree to the{' '}
                  <span className="text-boma-rust font-medium">
                    Terms & Conditions
                  </span>{' '}
                  and{' '}
                  <span className="text-boma-rust font-medium">
                    Privacy Policy
                  </span>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.termsAccepted.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2',
                isSubmitting
                  ? 'bg-boma-rust/60 cursor-not-allowed'
                  : 'bg-boma-rust hover:bg-boma-rust/90 shadow-lg shadow-boma-rust/20'
              )}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-8 text-sm text-boma-charcoal">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-boma-rust font-semibold hover:text-boma-rust/80"
            >
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
