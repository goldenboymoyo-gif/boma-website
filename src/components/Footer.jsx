import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import FallbackImage from './FallbackImage'
import { FacebookIcon, InstagramIcon, YoutubeIcon, TripAdvisorIcon } from './SocialIcons'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'The Experience', path: '/experience' },
  { label: 'Menu', path: '/menu' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

const estateLinks = [
  { label: 'Accommodation', path: '/accommodation' },
  { label: 'Wine & Dine', path: '/wine-and-dine' },
  { label: 'Activities', path: '/activities' },
  { label: 'Functions & Events', path: '/functions-and-events' },
  { label: 'About Us', path: '/about-us' },
  { label: 'News', path: '/news' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="site-footer">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <p className="footer-heading mb-2">Newsletter</p>
            <p className="font-serif text-2xl text-white mb-1">Stay in the know</p>
            <p className="text-sm text-[#C9B899]">Evening events, menus and offers from The Boma.</p>
          </div>
          {subscribed ? (
            <p className="font-serif italic text-lg text-[#C89A3B]">
              Thank you — see you at The Boma.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md"
              onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true) }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your e-mail address"
                className="flex-1 bg-transparent border border-white/25 text-white placeholder:text-[#C9B899] px-4 py-3 font-sans text-sm focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#C89A3B] text-[#2E1C13] font-sans text-xs uppercase tracking-[0.18em] hover:bg-boma-rust hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-5">
            <FallbackImage
              src={siteData.logoLight}
              alt="The Boma – Dinner & Drum Show"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            A legendary African dining experience on the Victoria Falls Safari Lodge estate. Dinner, drumming and stories since 1992.
          </p>
          <div className="flex gap-3">
            <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#E9DCC8] hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E9DCC8] hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href={siteData.social.youtube} target="_blank" rel="noopener noreferrer" className="text-[#E9DCC8] hover:text-white transition-colors" aria-label="YouTube">
              <YoutubeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Boma quicklinks */}
        <div>
          <p className="footer-heading mb-6">The Boma</p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Estate quicklinks */}
        <div>
          <p className="footer-heading mb-6">Victoria Falls Safari Collection</p>
          <ul className="space-y-3">
            {estateLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + reviews */}
        <div>
          <p className="footer-heading mb-6">Contact & Discover</p>
          <ul className="space-y-3 text-sm mb-6">
            <li>{siteData.address}</li>
            <li>{siteData.location}</li>
            <li>{siteData.hours}</li>
            <li>
              <a href={`tel:${siteData.phone}`} className="hover:text-white transition-colors">
                {siteData.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteData.email}`} className="hover:text-white transition-colors">
                {siteData.email}
              </a>
            </li>
          </ul>

          <div className="pt-5 border-t border-white/10">
            <a
              href={siteData.tripadvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-white transition-colors"
            >
              <TripAdvisorIcon size={20} className="text-[#C89A3B]" />
              <span>Read our reviews on TripAdvisor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Legal bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#C9B899] text-center md:text-left">
            © {new Date().getFullYear()} The Boma – Dinner & Drum Show. Part of the Victoria Falls Safari Collection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
            <Link to="/travel-trade" className="hover:text-white transition-colors">Media & Travel Trade</Link>
            <Link to="/booking" className="hover:text-white transition-colors">Booking</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}