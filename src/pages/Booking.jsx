import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import { bookingsAPI } from '../lib/api';
import useAuthStore from '../store/authStore';
import VideoHero from '../components/VideoHero';
import {
  CalendarDays,
  Clock,
  Users,
  Baby,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  MapPin,
  Phone,
  Utensils,
  Heart,
  Info,
  Star,
  CheckCircle2,
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { FacebookIcon } from '../components/SocialIcons';

const steps = [
  { id: 1, label: 'Date & Time', icon: CalendarDays },
  { id: 2, label: 'Guests', icon: Users },
  { id: 3, label: 'Requests', icon: Heart },
  { id: 4, label: 'Contact', icon: Phone },
  { id: 5, label: 'Review', icon: Check },
];

const timeSlots = [
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
];

const dietaryOptions = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'halal', label: 'Halal' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten-Free' },
  { id: 'nut-allergy', label: 'Nut Allergy' },
];

const generateCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function Booking() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const login = useAuthStore((s) => s.login);
  const registerUser = useAuthStore((s) => s.register);
  const clearError = useAuthStore((s) => s.clearError);
  const authError = useAuthStore((s) => s.error);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm({
    defaultValues: {
      adults: 2,
      children: 0,
      childAges: [],
      dietaryPreferences: [],
      specialRequests: '',
      name: '',
      email: '',
      phone: '',
      date: null,
      time: '',
      termsAccepted: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [authModalError, setAuthModalError] = useState('');
  const [showAuthPassword, setShowAuthPassword] = useState(false);

  const watched = watch();
  const calendarDays = generateCalendarDays(calendarYear, calendarMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = watched.date;
  const adults = watched.adults || 2;
  const childrenCount = watched.children || 0;
  const totalGuests = adults + childrenCount;
  const subtotal = adults * 65 + childrenCount * 35;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  const nextStep = async () => {
    let valid = false;
    switch (currentStep) {
      case 1:
        valid = await trigger(['date', 'time']);
        break;
      case 2:
        valid = await trigger(['adults']);
        break;
      case 3:
        valid = true;
        break;
      case 4:
        valid = await trigger(['name', 'email', 'phone']);
        break;
      default:
        valid = true;
    }
    if (valid && currentStep < 5) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setBookingError('');
    try {
      await bookingsAPI.create({
        date: watched.date,
        time: watched.time,
        adults: adults,
        children: childrenCount,
        childAges: watched.childAges || [],
        dietaryPreferences: watched.dietaryPreferences || [],
        specialRequests: watched.specialRequests,
        contactName: watched.name,
        contactEmail: watched.email,
        contactPhone: watched.phone,
      });
      setSubmitted(true);
    } catch (err) {
      setBookingError(err.error || 'Booking failed. Please try again.');
    }
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthSubmitting(true);
    setAuthModalError('');
    clearError();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');

    let result;
    if (authModalTab === 'login') {
      result = await login(email, password);
    } else {
      result = await registerUser({ name, email, password });
    }

    setAuthSubmitting(false);
    if (result.success) {
      setShowAuthModal(false);
      onSubmit();
    } else {
      setAuthModalError(result.error);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Not selected';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isPastDay = (day) => {
    if (!day) return true;
    const d = new Date(calendarYear, calendarMonth, day);
    return d < today;
  };

  const handleChildAges = (count) => {
    const current = watched.childAges || [];
    const newAges = [];
    for (let i = 0; i < count; i++) {
      newAges.push(current[i] || '5');
    }
    setValue('childAges', newAges);
  };

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="relative h-48 bg-gradient-to-r from-boma-charcoal to-boma-green flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-boma-rust">Your experience awaits</p>
          </motion.div>
        </div>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              <img
                src="/logos/logo-dark.png"
                alt="The Boma"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h2 className="text-2xl font-bold text-boma-charcoal mb-4">
              Thank You, {watched.name}!
            </h2>
            <p className="text-boma-charcoal mb-6">
              Your reservation has been confirmed. We've sent a confirmation email to{' '}
              <span className="font-semibold">{watched.email}</span>.
            </p>
            <div className="bg-white rounded-xl p-6 mb-6 text-left">
              <h3 className="font-semibold text-boma-charcoal mb-3">Booking Details</h3>
              <div className="space-y-2 text-sm text-boma-charcoal">
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">{watched.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-medium">{totalGuests}</span>
                </div>
                <div className="flex justify-between border-t border-boma-charcoal/20 pt-2 mt-2">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold text-boma-rust">${total}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-boma-charcoal text-white rounded-lg hover:bg-boma-charcoal transition-colors"
              >
                Back to Home
              </Link>
              <Link
                to="/experience"
                className="px-6 py-3 border border-boma-charcoal text-boma-charcoal rounded-lg hover:bg-white transition-colors"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <VideoHero
        title="Book Your Experience"
        subtitle="Secure your spot for an unforgettable evening of African cuisine, culture and entertainment."
        height="h-[45vh]"
        minHeight="min-h-[350px]"
        align="center"
        showScroll={false}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <h3 className="font-bold text-boma-charcoal mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-boma-rust" />
            Pricing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <Users className="w-6 h-6 text-boma-rust mx-auto mb-2" />
              <p className="text-sm text-boma-charcoal">Adults</p>
              <p className="text-xl font-bold text-boma-charcoal">$65</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Baby className="w-6 h-6 text-boma-rust mx-auto mb-2" />
              <p className="text-sm text-boma-charcoal">Children (3-12)</p>
              <p className="text-xl font-bold text-boma-charcoal">$35</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Heart className="w-6 h-6 text-boma-rust mx-auto mb-2" />
              <p className="text-sm text-boma-charcoal">Under 3</p>
              <p className="text-xl font-bold text-green-600">Free</p>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-boma-charcoal/20" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-boma-rust transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2',
                      isCompleted
                        ? 'bg-boma-rust border-boma-rust text-white'
                        : isActive
                        ? 'bg-white border-boma-rust text-boma-rust shadow-lg'
                        : 'bg-white border-boma-charcoal/30 text-boma-charcoal/70'
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={cn(
                      'mt-2 text-xs font-medium hidden sm:block',
                      isActive ? 'text-boma-rust' : 'text-boma-charcoal/70'
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Date & Time */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-boma-charcoal mb-6">
                    Select Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={() => {
                            if (calendarMonth === 0) {
                              setCalendarMonth(11);
                              setCalendarYear((y) => y - 1);
                            } else {
                              setCalendarMonth((m) => m - 1);
                            }
                          }}
                          className="p-1 hover:bg-white rounded"
                        >
                          <ChevronLeft className="w-5 h-5 text-boma-charcoal" />
                        </button>
                        <span className="font-semibold text-boma-charcoal">
                          {monthNames[calendarMonth]} {calendarYear}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (calendarMonth === 11) {
                              setCalendarMonth(0);
                              setCalendarYear((y) => y + 1);
                            } else {
                              setCalendarMonth((m) => m + 1);
                            }
                          }}
                          className="p-1 hover:bg-white rounded"
                        >
                          <ChevronRight className="w-5 h-5 text-boma-charcoal" />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="text-center text-xs font-medium text-boma-charcoal/70 py-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, idx) => {
                          if (!day) return <div key={`empty-${idx}`} />;
                          const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                          const isSelected = selectedDate === dateStr;
                          const past = isPastDay(day);
                          return (
                            <button
                              key={day}
                              type="button"
                              disabled={past}
                              onClick={() => setValue('date', dateStr, { shouldValidate: true })}
                              className={cn(
                                'aspect-square rounded-lg flex items-center justify-center text-sm transition-all',
                                past && 'text-boma-charcoal/20 cursor-not-allowed',
                                !past && !isSelected && 'hover:bg-boma-rust/10 text-boma-charcoal cursor-pointer',
                                isSelected && 'bg-boma-rust text-white font-semibold'
                              )}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> {errors.date.message}
                        </p>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="font-semibold text-boma-charcoal mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-boma-rust" />
                        Available Time Slots
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setValue('time', slot, { shouldValidate: true })}
                            className={cn(
                              'py-3 px-4 rounded-lg border text-sm font-medium transition-all',
                              watched.time === slot
                                ? 'border-boma-rust bg-boma-rust text-white'
                                : 'border-boma-charcoal/20 text-boma-charcoal hover:border-boma-rust hover:bg-boma-rust/5'
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      <input
                        type="hidden"
                        {...register('time', { required: 'Please select a time slot' })}
                      />
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> {errors.time.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-boma-charcoal mb-6">
                    Guest Details
                  </h2>
                  <div className="max-w-md mx-auto space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-2">
                        Adults
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            const val = Math.max(1, adults - 1);
                            setValue('adults', val, { shouldValidate: true });
                          }}
                          className="w-11 h-11 rounded-full border-2 border-boma-charcoal/20 flex items-center justify-center hover:border-boma-rust transition-colors text-lg"
                        >
                          -
                        </button>
                        <span className="text-2xl font-bold text-boma-charcoal w-12 text-center">
                          {adults}
                        </span>
                        <button
                          type="button"
                          onClick={() => setValue('adults', adults + 1, { shouldValidate: true })}
                          className="w-11 h-11 rounded-full border-2 border-boma-charcoal/20 flex items-center justify-center hover:border-boma-rust transition-colors text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-2">
                        Children
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            const val = Math.max(0, childrenCount - 1);
                            setValue('children', val, { shouldValidate: true });
                            handleChildAges(val);
                          }}
                          className="w-11 h-11 rounded-full border-2 border-boma-charcoal/20 flex items-center justify-center hover:border-boma-rust transition-colors text-lg"
                        >
                          -
                        </button>
                        <span className="text-2xl font-bold text-boma-charcoal w-12 text-center">
                          {childrenCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const val = childrenCount + 1;
                            setValue('children', val, { shouldValidate: true });
                            handleChildAges(val);
                          }}
                          className="w-11 h-11 rounded-full border-2 border-boma-charcoal/20 flex items-center justify-center hover:border-boma-rust transition-colors text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {childrenCount > 0 && (
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm font-medium text-boma-charcoal mb-3">
                          Children's Ages
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {Array.from({ length: childrenCount }).map((_, idx) => (
                            <div key={idx}>
                              <label className="text-xs text-boma-charcoal mb-1 block">
                                Child {idx + 1}
                              </label>
                              <select
                                value={(watched.childAges && watched.childAges[idx]) || '5'}
                                onChange={(e) => {
                                  const newAges = [...(watched.childAges || [])];
                                  newAges[idx] = e.target.value;
                                  setValue('childAges', newAges);
                                }}
                                className="w-full px-3 py-2 border border-boma-charcoal/20 rounded-lg text-sm bg-white text-boma-charcoal focus:outline-none focus:border-boma-rust"
                              >
                                {[...Array(13)].map((_, i) => (
                                  <option key={i} value={i}>
                                    {i} {i === 1 ? 'year' : 'years'}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between text-sm text-boma-charcoal mb-1">
                        <span>{adults} × Adults</span>
                        <span>${adults * 65}</span>
                      </div>
                      <div className="flex justify-between text-sm text-boma-charcoal mb-2">
                        <span>{childrenCount} × Children</span>
                        <span>${childrenCount * 35}</span>
                      </div>
                      <div className="flex justify-between font-bold text-boma-charcoal border-t border-boma-charcoal/20 pt-2">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Special Requests */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-boma-charcoal mb-6">
                    Special Requests
                  </h2>
                  <div className="max-w-md mx-auto space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-3 flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-boma-rust" />
                        Dietary Preferences
                      </label>
                      <div className="space-y-2">
                        {dietaryOptions.map((option) => (
                          <label
                            key={option.id}
                            className="flex items-center gap-3 p-3 rounded-lg border border-boma-charcoal/20 hover:border-boma-rust/50 cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              value={option.id}
                              {...register('dietaryPreferences')}
                              className="w-4 h-4 text-boma-rust border-boma-charcoal/30 rounded focus:ring-boma-rust"
                            />
                            <span className="text-sm text-boma-charcoal">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-2">
                        Special Requests
                      </label>
                      <textarea
                        {...register('specialRequests')}
                        rows={4}
                        placeholder="Any allergies, celebrations, seating preferences..."
                        className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-boma-charcoal mb-6">
                    Contact Information
                  </h2>
                  <div className="max-w-md mx-auto space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                        })}
                        className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-boma-charcoal mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[0-9+\-\s()]+$/, message: 'Invalid phone number' },
                        })}
                        className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-2xl font-bold text-boma-charcoal mb-6">
                    Review Your Booking
                  </h2>
                  {bookingError && (
                    <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 mb-6">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {bookingError}
                    </div>
                  )}
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="bg-white rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-boma-rust" />
                        <div>
                          <p className="text-xs text-boma-charcoal">Date</p>
                          <p className="font-medium text-boma-charcoal">{formatDate(selectedDate)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-boma-rust" />
                        <div>
                          <p className="text-xs text-boma-charcoal">Time</p>
                          <p className="font-medium text-boma-charcoal">{watched.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-boma-rust" />
                        <div>
                          <p className="text-xs text-boma-charcoal">Guests</p>
                          <p className="font-medium text-boma-charcoal">
                            {adults} Adults, {childrenCount} Children
                          </p>
                        </div>
                      </div>
                    </div>

                    {(watched.dietaryPreferences?.length > 0 || watched.specialRequests) && (
                      <div className="bg-white py-4 px-5 space-y-2 border-b border-boma-charcoal/10">
                        <p className="text-xs text-boma-charcoal/60 font-medium uppercase tracking-wide">
                          Special Requests
                        </p>
                        {watched.dietaryPreferences?.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {watched.dietaryPreferences.map((d) => (
                              <span
                                key={d}
                                className="px-3 py-1 bg-boma-rust/10 text-boma-rust text-xs rounded-full"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        )}
                        {watched.specialRequests && (
                          <p className="text-sm text-boma-charcoal">{watched.specialRequests}</p>
                        )}
                      </div>
                    )}

                    <div className="bg-white py-4 px-5 space-y-2 border-b border-boma-charcoal/10">
                      <p className="text-xs text-boma-charcoal/60 font-medium uppercase tracking-wide">
                        Contact
                      </p>
                      <p className="text-sm text-boma-charcoal">{watched.name}</p>
                      <p className="text-sm text-boma-charcoal">{watched.email}</p>
                      <p className="text-sm text-boma-charcoal">{watched.phone}</p>
                    </div>

                    <div className="bg-white py-4 px-5 space-y-2">
                      <div className="flex justify-between text-sm text-boma-charcoal mb-1">
                        <span>{adults} × Adults</span>
                        <span>${adults * 65}</span>
                      </div>
                      <div className="flex justify-between text-sm text-boma-charcoal mb-2">
                        <span>{childrenCount} × Children</span>
                        <span>${childrenCount * 35}</span>
                      </div>
                      <div className="flex justify-between text-sm text-boma-charcoal mb-2">
                        <span>Tax (10%)</span>
                        <span>${tax}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-boma-charcoal border-t border-boma-charcoal/10 pt-2">
                        <span>Total</span>
                        <span className="text-boma-rust">${total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-boma-charcoal/10">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all',
                currentStep === 1
                  ? 'text-boma-charcoal/30 cursor-not-allowed'
                  : 'text-boma-charcoal hover:bg-white'
              )}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-3 bg-boma-rust text-white rounded-xl font-medium hover:bg-boma-rust/90 transition-all shadow-lg shadow-boma-rust/20"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSubmit}
                className="flex items-center gap-2 px-8 py-3 bg-boma-charcoal text-white font-medium hover:bg-boma-rust transition-all"
              >
                <Check className="w-4 h-4" /> Confirm Booking
              </button>
            )}
          </div>
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 pl-5 border-l-2 border-boma-rust/40"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-boma-rust/60 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-boma-rust/70 mb-1.5">Availability Notice</h3>
              <p className="text-sm text-boma-charcoal/70 leading-relaxed">
                Reservations are subject to availability. We recommend booking at least 24 hours in
                advance. For parties larger than 10, please{' '}
                <Link to="/contact" className="text-boma-rust font-medium hover:text-boma-rust-dark transition-colors">
                  contact us
                </Link>{' '}
                directly. A confirmation email will be sent after booking.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-boma-charcoal/80 backdrop-blur-sm"
              onClick={() => setShowAuthModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto scroll-touch"
            >
              {/* Close button */}
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-boma-charcoal/5 flex items-center justify-center text-boma-charcoal/50 hover:bg-boma-charcoal/10 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="p-6 pb-0 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-boma-rust/10 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-boma-rust" />
                </div>
                <h3 className="text-xl font-bold text-boma-charcoal">
                  {authModalTab === 'login' ? 'Sign In to Book' : 'Create Account to Book'}
                </h3>
                <p className="text-sm text-boma-charcoal/60 mt-1">
                  {authModalTab === 'login'
                    ? 'Sign in to complete your reservation'
                    : 'Create a free account to complete your reservation'}
                </p>
              </div>

              {/* Tab Toggle */}
              <div className="flex mx-6 mt-4 bg-boma-charcoal/5 rounded-lg p-1">
                <button
                  onClick={() => { setAuthModalTab('login'); setAuthModalError(''); clearError(); }}
                  className={cn(
                    'flex-1 py-2 text-sm font-medium rounded-md transition-all',
                    authModalTab === 'login'
                      ? 'bg-white text-boma-charcoal shadow-sm'
                      : 'text-boma-charcoal/60 hover:text-boma-charcoal'
                  )}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setAuthModalTab('register'); setAuthModalError(''); clearError(); }}
                  className={cn(
                    'flex-1 py-2 text-sm font-medium rounded-md transition-all',
                    authModalTab === 'register'
                      ? 'bg-white text-boma-charcoal shadow-sm'
                      : 'text-boma-charcoal/60 hover:text-boma-charcoal'
                  )}
                >
                  Register
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleAuthSubmit} className="p-6 space-y-4">
                {(authModalError || authError) && (
                  <div className="flex items-center gap-2 py-3 px-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {authModalError || authError}
                  </div>
                )}

                {authModalTab === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-boma-charcoal mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                      placeholder="John Doe"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-boma-charcoal mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/40" />
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-boma-charcoal mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-boma-charcoal/40" />
                    <input
                      type={showAuthPassword ? 'text' : 'password'}
                      name="password"
                      required
                      minLength={6}
                      className="w-full pl-11 pr-11 py-3 border border-boma-charcoal/20 rounded-xl text-sm text-boma-charcoal bg-white placeholder:text-boma-charcoal/40 focus:outline-none focus:border-boma-rust"
                      placeholder={authModalTab === 'register' ? 'Create a password (min 6 chars)' : 'Enter your password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowAuthPassword(!showAuthPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-boma-charcoal/40 hover:text-boma-charcoal"
                      aria-label={showAuthPassword ? 'Hide password' : 'Show password'}
                    >
                      {showAuthPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={authSubmitting}
                  className={cn(
                    'w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2',
                    authSubmitting
                      ? 'bg-boma-rust/60 cursor-not-allowed'
                      : 'bg-boma-rust hover:bg-boma-rust/90 shadow-lg shadow-boma-rust/20'
                  )}
                >
                  {authSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {authModalTab === 'login' ? 'Sign In & Book' : 'Create Account & Book'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Social Login Divider */}
              <div className="flex items-center gap-4 px-6">
                <div className="flex-1 h-px bg-boma-charcoal/10" />
                <span className="text-xs text-boma-charcoal/50 uppercase">or continue with</span>
                <div className="flex-1 h-px bg-boma-charcoal/10" />
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3 px-6 pt-4">
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
                  className="flex items-center justify-center gap-2 py-3 border border-boma-charcoal/20 rounded-xl text-sm font-medium text-boma-charcoal hover:bg-boma-charcoal/5 transition-colors cursor-pointer"
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
                  className="flex items-center justify-center gap-2 py-3 border border-boma-charcoal/20 rounded-xl text-sm font-medium text-boma-charcoal hover:bg-boma-charcoal/5 transition-colors cursor-pointer"
                >
                  <FacebookIcon className="w-5 h-5 text-blue-600" />
                  Facebook
                </button>
              </div>

              <div className="px-6 pb-6 pt-4 text-center">
                <p className="text-xs text-boma-charcoal/50">
                  Your booking details will be saved and confirmed after signing in.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
