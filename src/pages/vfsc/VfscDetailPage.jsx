import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Download, ChevronRight, ArrowRight, Check, Calendar, MapPin, MessageCircle } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import { useScrollReveal } from '../../hooks/useAnimations'
import FallbackImage from '../../components/FallbackImage'
import { cn } from '../../lib/utils'
import { vfscData, CDN } from '../../data/vfscData'

function HeroSection({ data }) {
  const { ref, isInView } = useScrollReveal(0.1)
  const images = data.heroImages || []
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <FallbackImage
              src={img}
              alt={`${data.title} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-boma-charcoal/60 via-boma-charcoal/30 to-boma-charcoal/90" />
      </div>

      <div className="relative z-10 section-padding pb-16 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {data.title}
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

function SubNavigation({ items }) {
  const { ref, isInView } = useScrollReveal()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [location])

  return (
    <section ref={ref} className="bg-boma-charcoal border-b border-white/10 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex overflow-x-auto gap-1 py-3 scrollbar-hide"
        >
          {items.map((item) =>
            item.isExternal ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-boma-rust hover:bg-white/5 transition-all uppercase tracking-wider"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  const id = item.path.replace('#', '')
                  const el = document.getElementById(id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="flex-shrink-0 px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-boma-rust hover:bg-white/5 transition-all uppercase tracking-wider cursor-pointer"
              >
                {item.label}
              </a>
            )
          )}
        </motion.nav>
      </div>
    </section>
  )
}

function HighlightsSection({ highlights, title = 'Highlights' }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="highlights" ref={ref} className="section-padding py-20 md:py-28 bg-boma-off-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} subtitle="What makes this experience special" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-3 p-5 bg-white border border-boma-rust/10 hover:border-boma-rust/25 transition-colors"
            >
              <Check className="w-5 h-5 text-boma-rust flex-shrink-0 mt-0.5" />
              <span className="text-boma-charcoal/80 text-sm leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection({ features }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="features" ref={ref} className="section-padding py-20 md:py-28 bg-boma-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Facilities & Features" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex items-start gap-3 p-5 bg-white/5 border border-white/10"
            >
              <Check className="w-4 h-4 text-boma-rust flex-shrink-0 mt-0.5" />
              <span className="text-white/85 text-sm leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EnquirySection({ contact }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="enquiry" ref={ref} className="section-padding py-20 md:py-28 bg-boma-off-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Enquire Now" subtitle="Get in touch for bookings and more information" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 bg-white border border-boma-rust/10 p-8 md:p-10"
        >
          {contact.contactPerson && (
            <p className="text-boma-charcoal font-semibold text-lg mb-4">{contact.contactPerson}</p>
          )}
          <div className="space-y-4">
            {contact.phone && (
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors">
                <Phone className="w-5 h-5 text-boma-rust" />
                <span className="text-sm">{contact.phone}</span>
              </a>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors">
                <Mail className="w-5 h-5 text-boma-rust" />
                <span className="text-sm">{contact.email}</span>
              </a>
            )}
            {contact.whatsapp && (
              <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-boma-charcoal/70 hover:text-boma-rust transition-colors">
                <MessageCircle className="w-5 h-5 text-boma-rust" />
                <span className="text-sm">{contact.whatsapp}</span>
              </a>
            )}
          </div>
          {contact.bookingUrl && (
            <div className="mt-6">
              <a href="/booking" className="btn-primary">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection({ images, title }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="gallery" ref={ref} className="section-padding py-20 md:py-28 bg-boma-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Gallery" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden aspect-[4/3] group"
            >
              <FallbackImage
                src={img}
                alt={`${title} gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadsSection({ downloads }) {
  const { ref, isInView } = useScrollReveal()

  if (!downloads || downloads.length === 0) return null

  return (
    <section id="downloads" ref={ref} className="section-padding py-20 md:py-28 bg-boma-off-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Downloads & Brochures" subtitle="View our menus and information documents" />
        <div className="mt-12 space-y-3">
          {downloads.map((dl, i) => (
            <motion.a
              key={i}
              href={dl.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-between p-5 bg-white border border-boma-rust/10 hover:border-boma-rust/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-boma-rust" />
                <span className="text-sm text-boma-charcoal/80 group-hover:text-boma-rust transition-colors">{dl.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-boma-charcoal/30 group-hover:text-boma-rust transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function LearnMoreSection({ links }) {
  const { ref, isInView } = useScrollReveal()

  if (!links || links.length === 0) return null

  return (
    <section ref={ref} className="section-padding py-16 bg-boma-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Learn More" light />
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={link.path}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/85 hover:border-boma-rust hover:text-boma-rust text-sm font-semibold uppercase tracking-wider transition-all"
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NextAccommodation({ next }) {
  if (!next) return null

  return (
    <section className="section-padding py-16 bg-boma-rust">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white">
          <span className="text-white/80 text-xs uppercase tracking-[0.2em] block mb-2">Next</span>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            {next.label}
          </h3>
        </div>
        <Link
          to={next.path}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-boma-rust font-semibold text-sm uppercase tracking-wider hover:bg-boma-off-white transition-colors"
        >
          View
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

export default function VfscDetailPage({ dataKey }) {
  const data = vfscData[dataKey]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-boma-charcoal/75">Page not found.</p>
      </div>
    )
  }

  return (
    <main>
      <HeroSection data={data} />
      {data.subPages && <SubNavigation items={data.subPages} />}
      <HighlightsSection highlights={data.highlights} />
      {(data.features || data.facilities) && (
        <FeaturesSection features={data.features || data.facilities} />
      )}
      {data.enquiryContact && <EnquirySection contact={data.enquiryContact} />}
      {data.galleryImages && (
        <GallerySection images={data.galleryImages} title={data.title} />
      )}
      {data.downloads && <DownloadsSection downloads={data.downloads} />}
      {data.learnMore && <LearnMoreSection links={data.learnMore} />}
      {data.nextAccommodation && <NextAccommodation next={data.nextAccommodation} />}
    </main>
  )
}
