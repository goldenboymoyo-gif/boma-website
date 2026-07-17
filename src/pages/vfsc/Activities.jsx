import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, Download } from 'lucide-react'
import VideoHero from '../../components/VideoHero'
import SectionHeading from '../../components/SectionHeading'
import FallbackImage from '../../components/FallbackImage'
import { cn } from '../../lib/utils'
import { useScrollReveal } from '../../hooks/useAnimations'
import { vfscData } from '../../data/vfscData'

const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('All')}
        className={cn(
          'px-4 py-2 text-sm rounded-full transition-colors',
          active === 'All' ? 'bg-boma-rust text-white' : 'bg-boma-rust/5 text-boma-charcoal/70 hover:bg-boma-rust/10'
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            'px-4 py-2 text-sm rounded-full transition-colors',
            active === cat ? 'bg-boma-rust text-white' : 'bg-boma-rust/5 text-boma-charcoal/70 hover:bg-boma-rust/10'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function ActivityCard({ activity, index }) {
  const slug = toSlug(activity.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/activities/${slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <FallbackImage
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white font-semibold">
              Read more
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {activity.tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-boma-rust/80 bg-boma-rust/5 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <Link to={`/activities/${slug}`}>
        <h3 className="text-lg font-bold text-boma-charcoal mb-1.5 group-hover:text-boma-rust transition-colors">
          {activity.name}
        </h3>
      </Link>
      <p className="text-boma-charcoal/65 text-sm leading-relaxed line-clamp-2">{activity.description}</p>
    </motion.div>
  )
}

function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref } = useScrollReveal()

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-boma-charcoal">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about activities in Victoria Falls"
          light
        />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm text-white/90 font-medium pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-boma-rust flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/70 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-white/75 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Activities() {
  const [activeFilter, setActiveFilter] = useState('All')
  const data = vfscData.activities

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return data.activities
    return data.activities.filter((a) => a.tags.includes(activeFilter))
  }, [activeFilter, data.activities])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <VideoHero
        badge="Victoria Falls Safari Collection"
        title={data.title}
        subtitle="Discover adventure and beauty — from wildlife encounters to adrenaline-pumping thrills."
        poster={data.heroImage}
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="center"
        showScroll={false}
        showVideo={false}
      />

      {/* Activities Grid */}
      <section className="section-padding py-16 md:py-24 bg-boma-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-2">Filter by type</h2>
              <FilterBar categories={data.filterCategories} active={activeFilter} onSelect={setActiveFilter} />
            </div>
            <p className="text-boma-charcoal/50 text-sm">
              {filtered.length} {filtered.length === 1 ? 'activity' : 'activities'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 text-boma-charcoal/50"
              >
                <p className="text-sm">No activities found for this filter.</p>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filtered.map((activity, index) => (
                  <ActivityCard key={activity.name} activity={activity} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Downloads */}
      {data.downloads && data.downloads.length > 0 && (
        <section className="section-padding py-16 md:py-20 bg-boma-off-white border-t border-boma-charcoal/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-6">Downloads & Brochures</h2>
            <div className="space-y-3">
              {data.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-white border border-boma-rust/10 hover:border-boma-rust/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-boma-rust" />
                    <span className="text-sm text-boma-charcoal/80 group-hover:text-boma-rust transition-colors">{dl.label}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-boma-charcoal/30 group-hover:text-boma-rust transition-colors -rotate-90" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <FaqSection faqs={data.faqs} />
    </motion.div>
  )
}
