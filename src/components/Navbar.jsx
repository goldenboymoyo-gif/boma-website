import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, LogOut, User } from 'lucide-react'
import { siteData } from '../data/siteData'
import { cn } from '../lib/utils'
import FallbackImage from './FallbackImage'
import useAuthStore from '../store/authStore'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons'

const bomaLinks = [
  { label: 'Home', path: '/' },
  { label: 'The Experience', path: '/experience' },
  { label: 'Menu', path: '/menu' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

const estateLinks = [
  { label: 'Victoria Falls Safari Collection', path: '/accommodation' },
  { label: 'Wine & Dine', path: '/wine-and-dine' },
  { label: 'Activities', path: '/activities' },
  { label: 'Functions & Events', path: '/functions-and-events' },
  { label: 'About Us', path: '/about-us' },
  { label: 'News', path: '/news' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const getInitials = (name) => {
    if (!name) return '??'
    return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
  }

  const solid = scrolled || isMenuOpen
  const light = !solid

  return (
    <>
      {/* Fixed transparent header — lingers style: burger left, centered logo, quicklinks right */}
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 site-header py-3 md:py-4 px-5 md:px-10',
          solid ? 'bg-white shadow-md' : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Left: burger + quicklinks */}
          <div className="flex items-center gap-4 md:gap-6 w-1/3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'relative w-11 h-11 flex items-center justify-center transition-colors duration-300',
                light ? 'text-white hover:text-white/70' : 'text-boma-charcoal hover:text-boma-rust'
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div key="x" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -45 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quicklinks (desktop) */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${siteData.phone}`}
                className={cn(
                  'hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] font-sans transition-colors duration-300',
                  light ? 'text-white/90 hover:text-white' : 'text-boma-charcoal/70 hover:text-boma-rust'
                )}
              >
                <Phone size={16} />
                {siteData.phone}
              </a>
              <Link
                to="/gallery"
                className={cn(
                  'hidden md:inline-block text-sm uppercase tracking-[0.14em] font-sans transition-colors duration-300',
                  light ? 'text-white/90 hover:text-white' : 'text-boma-charcoal/70 hover:text-boma-rust'
                )}
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Center: logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center" aria-label="The Boma home">
            <FallbackImage
              src={light ? siteData.logoLight : siteData.logoDark}
              alt="The Boma – Dinner & Drum Show"
              className="h-9 md:h-11 w-auto transition-opacity duration-500"
            />
          </Link>

          {/* Right: language / user / CTA */}
          <div className="flex items-center gap-3 md:gap-5 w-1/3 justify-end">
            <Link
              to="/booking"
              className={cn(
                'hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm uppercase tracking-[0.14em] font-sans transition-all duration-300',
                light
                  ? 'bg-white/10 border border-white/40 text-white hover:bg-white hover:text-boma-charcoal backdrop-blur-sm'
                  : 'bg-boma-charcoal text-white hover:bg-black'
              )}
            >
              Book Now
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => { if (!solid) return; }}
                  className="flex items-center gap-2 transition-colors duration-300"
                  aria-label="Account"
                >
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors duration-300',
                    light ? 'bg-white/10 border-white/40 text-white' : 'bg-boma-charcoal border-boma-charcoal text-white'
                  )}>
                    {getInitials(user.name)}
                  </div>
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-taupe shadow-lg">
                  <div className="px-4 py-3 border-b border-taupe/50">
                    <p className="font-sans font-medium text-boma-charcoal text-sm">{user.name || 'User'}</p>
                    <p className="font-sans text-sm text-boma-charcoal/60 truncate">{user.email}</p>
                    {user.role === 'admin' && (
                      <span className="inline-block mt-1.5 px-2 py-0.5 text-[10px] font-sans uppercase tracking-wider rounded-full bg-boma-rust/10 text-boma-rust">
                        Administrator
                      </span>
                    )}
                  </div>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="flex items-center gap-2 px-4 py-2.5 font-sans text-sm text-boma-charcoal hover:bg-page-bg transition-colors">
                      <User className="w-4 h-4" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => { handleLogout(); }}
                    className="flex items-center gap-2 px-4 py-2.5 font-sans text-sm text-red-500 hover:bg-red-50 transition-colors w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className={cn(
                  'hidden sm:inline-block text-sm uppercase tracking-[0.14em] font-sans transition-colors duration-300',
                  light ? 'text-white/90 hover:text-white' : 'text-boma-charcoal/70 hover:text-boma-rust'
                )}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 overlay-menu"
          >
            <div className="h-full overflow-y-auto scroll-touch pt-28 md:pt-32 pb-16 safe-area-bottom">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                  {/* Main nav */}
                  <nav className="flex flex-col">
                    {bomaLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            'group flex items-center gap-4 py-3.5 border-b border-taupe/40',
                          )}
                        >
                          <span className="overlay-num text-sm font-sans">0{i + 1}</span>
                          <span
                            className={cn(
                              'overlay-link text-2xl md:text-3xl',
                              location.pathname === link.path ? 'text-boma-rust' : ''
                            )}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Side: estate links, contact, socials */}
                  <div className="lg:pt-2">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="kicker mb-5"
                    >
                      Victoria Falls Safari Collection
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.4 }}
                      className="grid grid-cols-2 gap-x-6 gap-y-3"
                    >
                      {estateLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-sans text-base text-ink hover:text-boma-rust transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65 }}
                      className="mt-12"
                    >
                      <div className="h-px bg-taupe/60 mb-8" />
                      <div className="flex items-center gap-3 mb-2 text-sm">
                        <a href = {`tel:${siteData.phone}`} className="font-serif text-xl text-ink-strong hover:text-boma-rust transition-colors">
                          {siteData.phone}
                        </a>
                      </div>
                      <p className="font-sans text-base text-ink mb-1">{siteData.address}</p>
                      <a href={`mailto:${siteData.email}`} className="font-serif italic text-base text-ink hover:text-boma-rust transition-colors">
                        {siteData.email}
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.75 }}
                      className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
                    >
                      <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="btn-primary">
                        Book Your Evening
                      </Link>
                      <div className="flex items-center gap-4">
                        <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-boma-rust transition-colors" aria-label="Facebook">
                          <FacebookIcon size={20} />
                        </a>
                        <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-boma-rust transition-colors" aria-label="Instagram">
                          <InstagramIcon size={20} />
                        </a>
                        <a href={siteData.social.youtube} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-boma-rust transition-colors" aria-label="YouTube">
                          <YoutubeIcon size={20} />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}