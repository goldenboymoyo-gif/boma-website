import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, Users, ChevronDown } from 'lucide-react'

/**
 * Fixed quick-booking widget — the React equivalent of lingers.it's
 * "QuickRequest" bar pinned to the bottom-left of the viewport.
 */
export default function QuickRequest() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState(2)

  return (
    <div className="fixed left-4 bottom-4 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="quick-request mb-3 p-5 w-72"
          >
            <p className="kicker mb-1">Plan your evening</p>
            <p className="font-serif text-xl text-ink-strong mb-4">Book The Boma</p>

            <label className="block mb-3">
              <span className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.14em] text-ink mb-1.5">
                <Calendar size={12} /> Date
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-taupe bg-white px-3 py-2 font-sans text-sm text-ink-strong focus:outline-none focus:border-boma-rust transition-colors"
              />
            </label>

            <label className="block mb-4">
              <span className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.14em] text-ink mb-1.5">
                <Users size={12} /> Guests
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-taupe bg-white px-3 py-2 font-sans text-sm text-ink-strong focus:outline-none focus:border-boma-rust transition-colors"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </label>

            <Link to="/booking" className="btn-primary w-full justify-center">
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="quick-request flex items-center gap-3 px-4 py-3 transition-opacity duration-300 group"
        aria-label={open ? 'Close booking widget' : 'Quick booking'}
      >
        <span className="flex items-center gap-2 font-sans text-sm text-ink-strong">
          <Calendar className="w-4 h-4 text-boma-rust" />
          Book your evening
        </span>
        <ChevronDown className="w-4 h-4 text-ink transition-transform duration-300 group-hover:-rotate-180" />
      </button>
    </div>
  )
}