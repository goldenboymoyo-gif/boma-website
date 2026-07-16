import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, LogOut, User } from 'lucide-react'
import { navLinks, topBarLinks, siteData } from '../data/siteData'
import { cn } from '../lib/utils'
import FallbackImage from './FallbackImage'
import useAuthStore from '../store/authStore'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const hoverTimeoutRef = useRef(null)
  const userMenuRef = useRef(null)
  const { user, logout } = useAuthStore()

  useEffect(() => {
    setIsMobileOpen(false)
    setOpenMobileAccordion(null)
    setShowUserMenu(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const toggleMobileAccordion = (label) => {
    setOpenMobileAccordion(openMobileAccordion === label ? null : label)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
  }

  const getInitials = (name) => {
    if (!name) return '??'
    return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-boma-charcoal text-white/80 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-end h-8 gap-6">
          {topBarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'transition-colors duration-200 hover:text-white',
                location.pathname === link.path ? 'text-white' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
          <span className="w-px h-3 bg-white/20" />
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <div className="w-5 h-5 rounded-full bg-boma-rust flex items-center justify-center text-[9px] font-bold text-white">
                  {getInitials(user.name)}
                </div>
                <span className="max-w-[120px] truncate">{user.name || user.email}</span>
              </button>
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[160px]">
                      {user.role === 'admin' && (
                        <Link
                          to="/admin"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-boma-charcoal hover:bg-boma-off-white/50 transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={cn(
                  'transition-colors duration-200 hover:text-white',
                  location.pathname === '/login' ? 'text-white' : ''
                )}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={cn(
                  'transition-colors duration-200 hover:text-white',
                  location.pathname === '/register' ? 'text-white' : ''
                )}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FallbackImage
              src={siteData.logoDark}
              alt="The Boma – Dinner & Drum Show"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-md',
                    location.pathname === link.path || (link.children && location.pathname.startsWith(link.path))
                      ? 'text-boma-rust'
                      : 'text-boma-charcoal hover:text-boma-rust',
                    link.highlight && 'text-boma-rust hover:text-boma-rust-dark'
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={cn(
                    'transition-transform duration-200',
                    openDropdown === link.label && 'rotate-180'
                  )} />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[240px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={cn(
                              'block px-4 py-2.5 text-sm transition-colors duration-200',
                              location.pathname === child.path
                                ? 'text-boma-rust bg-boma-off-white/50'
                                : 'text-boma-charcoal hover:text-boma-rust hover:bg-boma-off-white/30'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="/booking"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-boma-rust text-white text-sm font-semibold uppercase hover:opacity-80 transition-opacity"
            >
              Book Now
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X size={22} className="text-boma-charcoal" />
              ) : (
                <Menu size={22} className="text-boma-charcoal" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white flex flex-col"
            >
              <div className="px-6 py-5 border-b border-gray-200">
                <FallbackImage
                  src={siteData.logoDark}
                  alt="The Boma"
                  className="h-8 w-auto"
                />
              </div>

              {/* Mobile Top Bar Links */}
              <div className="px-6 py-3 border-b border-gray-100 bg-gray-50">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'block py-1.5 text-xs transition-colors duration-200',
                      location.pathname === link.path
                        ? 'text-boma-rust'
                        : 'text-boma-charcoal/60 hover:text-boma-rust'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                {user ? (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-boma-rust flex items-center justify-center text-[9px] font-bold text-white">
                        {getInitials(user.name)}
                      </div>
                      <span className="text-xs font-semibold text-boma-charcoal truncate">{user.name || user.email}</span>
                    </div>
                    {user.role === 'admin' && (
                      <Link to="/admin" onClick={() => setIsMobileOpen(false)} className="block py-1.5 text-xs font-semibold text-boma-rust hover:text-boma-rust/80">
                        Admin Panel
                      </Link>
                    )}
                    <button onClick={() => { handleLogout(); setIsMobileOpen(false) }} className="block py-1.5 text-xs font-semibold text-red-500 hover:text-red-500/80">
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t border-gray-100">
                    <Link to="/login" className="text-xs font-semibold text-boma-rust hover:text-boma-rust/80">
                      Login
                    </Link>
                    <Link to="/register" className="text-xs font-semibold text-boma-rust hover:text-boma-rust/80">
                      Register
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto pt-2 px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {link.children ? (
                      <>
                        <button
                          onClick={() => toggleMobileAccordion(link.label)}
                          className={cn(
                            'flex items-center justify-between w-full py-3.5 text-base font-semibold transition-colors duration-200 border-b border-gray-100',
                            location.pathname === link.path || location.pathname.startsWith(link.path)
                              ? 'text-boma-rust'
                              : 'text-boma-charcoal hover:text-boma-rust'
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={18} className={cn(
                            'transition-transform duration-200',
                            openMobileAccordion === link.label && 'rotate-180'
                          )} />
                        </button>
                        <AnimatePresence>
                          {openMobileAccordion === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2">
                                <Link
                                  to={link.path}
                                  className={cn(
                                    'block py-2 text-sm transition-colors duration-200',
                                    location.pathname === link.path
                                      ? 'text-boma-rust'
                                      : 'text-boma-charcoal/60 hover:text-boma-rust'
                                  )}
                                >
                                  View All
                                </Link>
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className={cn(
                                      'block py-2 text-sm transition-colors duration-200',
                                      location.pathname === child.path
                                        ? 'text-boma-rust'
                                        : 'text-boma-charcoal/60 hover:text-boma-rust'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          'block py-3.5 text-base font-semibold transition-colors duration-200 border-b border-gray-100',
                          location.pathname === link.path
                            ? 'text-boma-rust'
                            : 'text-boma-charcoal hover:text-boma-rust',
                          link.highlight && 'text-boma-rust'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="px-6 pb-8">
                <a
                  href="/booking"
                  className="block w-full text-center px-6 py-3 bg-boma-rust text-white text-sm font-semibold uppercase"
                >
                  Book Now
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
