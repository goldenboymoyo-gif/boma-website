import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/SocialIcons'
import { siteData } from '../data/siteData'
import { contactAPI } from '../lib/api'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useAnimations'
import { cn } from '../lib/utils'

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    value: siteData.phone,
    href: `tel:${siteData.phone.replace(/\s/g, '')}`,
    description: 'Call us to make a reservation',
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    description: 'Send us an email anytime',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: siteData.address,
    href: 'https://maps.google.com/?q=-17.917325,25.819236',
    description: siteData.location,
  },
  {
    icon: Clock,
    title: 'Hours',
    value: siteData.hours,
    href: null,
    description: 'Open every evening',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const { ref: formRef, isInView: formInView } = useScrollReveal()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setServerError('')
    try {
      await contactAPI.send(data)
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setServerError(err.error || 'Failed to send message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <VideoHero
        badge="The Boma"
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether it's a reservation, a question, or just a hello — we're here."
        poster="https://vfsc-umbraco.live.fireworkx.net/media/acaf4oca/victoria-falls-safari-lodge.jpg"
        showVideo={false}
        height="h-[60vh]"
        minHeight="min-h-[450px]"
        align="center"
        showScroll={false}
      />

      {/* Contact Cards */}
      <section className="py-16 bg-boma-off-white border-b border-boma-charcoal/5">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              const Wrapper = card.href ? 'a' : 'div'
              const wrapperProps = card.href
                ? { href: card.href, target: card.href.startsWith('http') ? '_blank' : undefined, rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {}

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={cn(
                      'block bg-white py-6 px-5 transition-all duration-300 h-full',
                      card.href
                        ? 'hover:border-boma-rust/40 cursor-pointer group'
                        : ''
                    )}
                  >
                    <Icon size={20} className="text-boma-rust mb-4" />
                    <h3 className="text-lg text-boma-charcoal mb-1 group-hover:text-boma-rust transition-colors">{card.title}</h3>
                    <p className="text-boma-charcoal/60 text-xs mb-3">{card.description}</p>
                    <p className="text-boma-charcoal/70 text-sm font-medium break-words">{card.value}</p>
                  </Wrapper>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24 bg-boma-off-white" ref={formRef}>
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl text-boma-charcoal mb-2">
                Send Us a Message
              </h2>
              <p className="text-boma-charcoal/70 mb-10">
                Fill in the form below and we will get back to you promptly.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 py-4 pl-5 border-l-2 border-green-500 text-green-700 text-sm mb-8"
                >
                  <CheckCircle2 size={18} />
                  <span>Your message has been sent successfully. We will get back to you soon!</span>
                </motion.div>
              )}

              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 py-4 pl-5 border-l-2 border-red-500 text-red-700 text-sm mb-8"
                >
                  <AlertCircle size={18} />
                  <span>{serverError}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-boma-charcoal/70 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className={cn(
                        'w-full px-4 py-3.5 bg-white border rounded-sm text-sm text-boma-charcoal placeholder:text-boma-charcoal/30 focus:outline-none focus:ring-1 transition-all',
                        errors.name
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-boma-charcoal/10 focus:border-boma-rust/50 focus:ring-boma-rust/20'
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-boma-charcoal/70 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={cn(
                        'w-full px-4 py-3.5 bg-white border rounded-sm text-sm text-boma-charcoal placeholder:text-boma-charcoal/30 focus:outline-none focus:ring-1 transition-all',
                        errors.email
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-boma-charcoal/10 focus:border-boma-rust/50 focus:ring-boma-rust/20'
                      )}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-boma-charcoal/70 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3.5 bg-white border border-boma-charcoal/10 rounded-sm text-sm text-boma-charcoal placeholder:text-boma-charcoal/30 focus:outline-none focus:border-boma-rust/50 focus:ring-1 focus:ring-boma-rust/20 transition-all"
                      placeholder="+263 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-boma-charcoal/70 mb-2 font-medium">
                      Subject *
                    </label>
                    <select
                      {...register('subject', { required: 'Please select a subject' })}
                      className={cn(
                        'w-full px-4 py-3.5 bg-white border rounded-sm text-sm text-boma-charcoal focus:outline-none focus:ring-1 transition-all appearance-none',
                        errors.subject
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                          : 'border-boma-charcoal/10 focus:border-boma-rust/50 focus:ring-boma-rust/20'
                      )}
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Enquiry</option>
                      <option value="event">Private Event Booking</option>
                      <option value="general">General Enquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-boma-charcoal/70 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                    rows={5}
                    className={cn(
                      'w-full px-4 py-3.5 bg-white border rounded-sm text-sm text-boma-charcoal placeholder:text-boma-charcoal/30 focus:outline-none focus:ring-1 transition-all resize-none',
                      errors.message
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                        : 'border-boma-charcoal/10 focus:border-boma-rust/50 focus:ring-boma-rust/20'
                    )}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-boma-charcoal/30 border-t-boma-charcoal rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Map */}
              <div>
                <h3 className="text-xl text-boma-charcoal mb-4">Find Us</h3>
                <div className="rounded-sm overflow-hidden aspect-[4/3] bg-boma-charcoal/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.6791!2d25.819236!3d-17.917325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU1JzA2LjQnUyAyNcKwNDknMDkuMiJF!5e0!3m2!1sen!2szw!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Boma Location"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/263832843232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 text-green-700 hover:text-green-800 transition-colors group border-b border-boma-charcoal/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-boma-charcoal/60 text-xs">Quick response guaranteed</p>
                </div>
              </a>

              {/* Social Links */}
              <div>
                <h3 className="text-xl text-boma-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FacebookIcon, href: siteData.social.facebook, label: 'Facebook' },
                    { icon: InstagramIcon, href: siteData.social.instagram, label: 'Instagram' },
                    { icon: YoutubeIcon, href: siteData.social.youtube, label: 'YouTube' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-boma-charcoal/5 flex items-center justify-center text-boma-charcoal/40 hover:bg-boma-rust/15 hover:text-boma-rust transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
