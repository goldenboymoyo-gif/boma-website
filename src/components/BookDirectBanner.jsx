import { Link } from 'react-router-dom'
import { BadgeCheck, ArrowRight } from 'lucide-react'
import { siteData } from '../data/siteData'
import { cn } from '../lib/utils'

/**
 * "Book direct / best price guaranteed" trust banner — lingers.it's
 * "Prenota" best-price strip, adapted for The Boma. Rendered as a slim
 * full-width ribbon that links to the booking page.
 */
export default function BookDirectBanner({ tone = 'dark', className }) {
  const lightText = tone === 'light'

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left'
        )}
      >
        <BadgeCheck
          className={cn('w-5 h-5 shrink-0', lightText ? 'text-white/80' : 'text-boma-rust-dark')}
        />
        <Link
          to={siteData.bookingUrl}
          className={cn(
            'group inline-flex flex-wrap items-center justify-center gap-2.5 font-sans text-sm tracking-[0.12em] uppercase transition-colors',
            lightText
              ? 'text-white/90 hover:text-white'
              : 'text-boma-charcoal hover:text-boma-rust-dark'
          )}
        >
          <span>
            Best price guaranteed with a direct booking
          </span>
          <span className={cn('inline-flex items-center gap-1.5 font-semibold underline decoration-1 underline-offset-4', lightText ? 'text-white' : 'text-boma-rust-dark')}>
            Book Your Evening
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  )
}
