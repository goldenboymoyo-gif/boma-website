import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import FallbackImage from './FallbackImage'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Menu', path: '/menu' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

const vfscLinks = [
  { label: 'Accommodation', path: '/accommodation' },
  { label: 'Wine & Dine', path: '/wine-and-dine' },
  { label: 'Activities', path: '/activities' },
  { label: 'Functions & Events', path: '/functions-and-events' },
  { label: 'About Us', path: '/about-us' },
  { label: 'News', path: '/news' },
]

export default function Footer() {
  return (
    <footer className="bg-boma-green">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <FallbackImage
                src={siteData.logoLight}
                alt="The Boma – Dinner & Drum Show"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              A legendary African dining experience on the Victoria Falls Safari Lodge estate.
            </p>
            <div className="flex gap-3">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-boma-rust hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-boma-rust hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-boma-rust hover:text-white transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Boma Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">The Boma</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/85 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VFSC Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Victoria Falls Safari Collection</h4>
            <ul className="space-y-2.5">
              {vfscLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/85 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/85 mb-6">
              <li>{siteData.address}</li>
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
              <li>{siteData.hours}</li>
            </ul>
            <div className="overflow-hidden aspect-[4/3]">
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
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/85 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} The Boma – Dinner & Drum Show. Part of the Victoria Falls Safari Collection.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/faq" className="text-white/80 text-xs hover:text-white/80 transition-colors">
              Frequently Asked Questions
            </Link>
            <Link to="/travel-trade" className="text-white/80 text-xs hover:text-white/80 transition-colors">
              Media & Travel Trade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
