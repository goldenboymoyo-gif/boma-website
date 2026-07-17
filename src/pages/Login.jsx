import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import useAuthStore from '../store/authStore';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Globe,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { FacebookIcon } from '../components/SocialIcons';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const clearError = useAuthStore((s) => s.clearError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError('');
    clearError();
    const result = await login(data.email, data.password);
    setIsSubmitting(false);
    if (result.success) {
      navigate(result.role === 'admin' ? '/admin' : '/');
    } else {
      setServerError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://vfsc-umbraco.live.fireworkx.net/media/msce2wdw/victoria-falls-safari-lodge-2025-06-09t104012349.png"
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
            <p className="text-boma-rust text-lg mb-8" style={{ fontFamily: 'var(--font-accent)' }}>A Culinary Experience Like No Other</p>
            <div className="space-y-4 text-white/85">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Premium dining experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Authentic African cuisine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-boma-rust rounded-full" />
                <span>Exclusive events & celebrations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12">
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
            <p className="text-boma-rust text-sm">A Culinary Experience Like No Other</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-boma-charcoal">Welcome Back</h2>
            <p className="text-boma-charcoal mt-1">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {serverError && (
              <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {serverError}
              </div>
            )}

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
                    minLength: { value: 6, message: 'Password must be at least 6 characters' },
                  })}
                  className={cn(
                    'w-full pl-11 pr-11 py-3 border rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/50 focus:outline-none transition-colors',
                    errors.password ? 'border-red-400 focus:border-red-500' : 'border-boma-charcoal/20 focus:border-boma-rust'
                  )}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/60 hover:text-boma-charcoal"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('rememberMe')}
                  className="w-4 h-4 text-boma-rust border-boma-charcoal/30 rounded focus:ring-boma-rust"
                />
                <span className="text-sm text-boma-charcoal">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-boma-rust hover:text-boma-rust/80 font-medium"
              >
                Forgot Password?
              </Link>
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
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-boma-charcoal/20" />
            <span className="text-xs text-boma-charcoal/60 uppercase">or continue with</span>
            <div className="flex-1 h-px bg-boma-charcoal/20" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => toast.custom((t) => (
                <div className={cn('flex items-center gap-3 px-5 py-3.5 bg-white rounded-lg shadow-lg border border-boma-charcoal/10', t.visible ? 'animate-enter' : 'animate-leave')}>
                  <div className="w-8 h-8 rounded-full bg-boma-rust/10 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-boma-rust" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-boma-charcoal">Coming soon</p>
                    <p className="text-xs text-boma-charcoal/60">Google sign-in will be available shortly</p>
                  </div>
                </div>
              ))}
              className="flex items-center justify-center gap-2 py-3 border border-boma-charcoal/20 rounded-xl text-sm font-medium text-boma-charcoal hover:bg-white transition-colors cursor-pointer"
            >
              <Globe className="w-5 h-5" />
              Google
            </button>
            <button
              type="button"
              onClick={() => toast.custom((t) => (
                <div className={cn('flex items-center gap-3 px-5 py-3.5 bg-white rounded-lg shadow-lg border border-boma-charcoal/10', t.visible ? 'animate-enter' : 'animate-leave')}>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <FacebookIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-boma-charcoal">Coming soon</p>
                    <p className="text-xs text-boma-charcoal/60">Facebook sign-in will be available shortly</p>
                  </div>
                </div>
              ))}
              className="flex items-center justify-center gap-2 py-3 border border-boma-charcoal/20 rounded-xl text-sm font-medium text-boma-charcoal hover:bg-white transition-colors cursor-pointer"
            >
              <FacebookIcon className="w-5 h-5 text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center mt-8 text-sm text-boma-charcoal">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-boma-rust font-semibold hover:text-boma-rust/80"
            >
              Create Account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
