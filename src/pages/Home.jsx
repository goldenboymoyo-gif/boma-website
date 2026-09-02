import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Clock,
  Check,
  ArrowRight,
  Star,
  MapPin,
  Camera,
  Heart,
} from 'lucide-react'
import { siteData, experiences, testimonials, galleryImages, faqs, awards, needToKnow } from '../data/siteData'
import { useGalleryStore } from '../store/galleryStore'
import SectionHeading from '../components/SectionHeading'
import FallbackImage from '../components/FallbackImage'
import QuoteBreak from '../components/QuoteBreak'
import LinkBoxes from '../components/LinkBoxes'
import BookDirectBanner from '../components/BookDirectBanner'
import { cn } from '../lib/utils'

function useScrollReveal(amount = 0.2) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount })
  return { ref, isInView }
}

function FadeIn({ children, className, delay = 0, direction = 'up' }) {
  const { ref, isInView } = useScrollReveal()
  const dirs = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── HERO ─── */
function HeroSection() {
  const [useVideo, setUseVideo] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setUseVideo(window.innerWidth >= 768)
  }, [])

  const scrollToContent = () => {
    const next = document.getElementById('story-band')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
      {/* Background */}
      <div className="absolute inset-0">
        {useVideo ? (
          <video
            src={siteData.heroVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src="https://vfsc-umbraco.live.fireworkx.net/media/tnyd4m5n/the-boma-dinner-drum-show.jpg"
            alt="The Boma Dinner and Drum Show venue"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}

        {/* Legibility scrim — keeps all hero text visible & clean over any frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/60" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Best-price / book-direct trust banner */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex justify-center"
          >
            <BookDirectBanner tone="light" className="max-w-3xl" />
          </motion.div>

          {/* "Your place to..." overline tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="kicker !text-white/85 block mb-3"
          >
            Your place to feast, drum & linger
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mt-2 mb-4 leading-[0.95]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            The Boma
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-px bg-white/50 mx-auto my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-serif italic leading-relaxed"
          >
            A legendary fusion of Zimbabwean cuisine, cultural dance and interactive drumming,
            served beneath the stars on the Victoria Falls Safari Lodge estate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={siteData.bookingUrl} className="btn-primary">
              Book Your Evening
            </a>
            <Link
              to="/experience"
              className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-boma-charcoal hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
            >
              Our Experience
            </Link>
          </motion.div>
        </div>
      </div>

      {/* "Continua a leggere" read-more scroll link */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to discover more"
      >
        <span className="text-xs font-sans uppercase tracking-[0.3em]">Discover</span>
        <ChevronDown className="w-6 h-6 scroll-cue" />
      </motion.button>
    </section>
  )
}

/* ─── STORY BAND ─── */
function StoryBandSection() {
  return (
    <section id="story-band" className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="right">
          <Link to="/experience" className="block relative group overflow-hidden">
            <FallbackImage
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-[340px] md:h-[460px] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-boma-charcoal/70 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-sans uppercase tracking-[0.18em]">
              The Boma — A Legendary African Experience
            </span>
          </Link>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <span className="kicker block mb-3">The Boma — Dinner & Drum Show</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-boma-charcoal mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            A Legendary African Experience
          </h2>
          <p className="text-boma-charcoal/75 leading-relaxed mb-4">
            It's fair to say the Boma – Dinner &amp; Drum Show, conveniently located on the estate, is a legendary
            dining and entertainment experience – over a million people can't be wrong. The evening offers an
            unforgettable fusion of local cuisine, energetic dance and interactive drumming.
          </p>
          <p className="text-boma-charcoal/75 leading-relaxed mb-8">
            A four-course, buffet-style meal, the trademark Mopane Worm challenge and the drumming circle —
            the tastes, sights and sounds of Africa.
          </p>
          <Link to="/experience" className="inline-flex items-center gap-2 text-boma-rust-dark font-semibold text-sm uppercase tracking-wider hover:text-boma-charcoal transition-colors group">
            Continua a leggere
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── CUISINE MODULE ─── */
function CuisineModuleSection() {
  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left" delay={0.1}>
          <span className="kicker block mb-3">The Taste of The Boma</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-boma-charcoal mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            African Cuisine, Fire-Cooked &amp; Full of Flavour
          </h2>
          <p className="text-boma-charcoal/75 leading-relaxed mb-4">
            Begin with a platter of nibbles and soup simmering over the campfire, then help yourself to a braai
            (barbecue) buffet of roasted meats and traditional dishes, finished with a selection of desserts.
          </p>
          <p className="text-boma-charcoal/75 leading-relaxed mb-8">
            Brace yourself for the Mopane Worm station — take the challenge and we'll reward your
            adventurousness with a certificate.
          </p>
          <Link to="/menu" className="inline-flex items-center gap-2 text-boma-rust-dark font-semibold text-sm uppercase tracking-wider hover:text-boma-charcoal transition-colors group">
            Di più sul concetto culinario
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <FadeIn direction="right">
          <div className="relative grid grid-cols-2 gap-3">
            <FallbackImage
              src={galleryImages[11].src}
              alt={galleryImages[11].alt}
              className="w-full h-40 md:h-56 object-cover"
            />
            <FallbackImage
              src="https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png"
              alt="Traditional Boma braai"
              className="w-full h-56 md:h-72 object-cover"
            />
            <FallbackImage
              src="https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png"
              alt="Buffet at The Boma"
              className="w-full h-56 md:h-72 object-cover"
            />
            <FallbackImage
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}
              className="w-full h-40 md:h-56 object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── PERFORMANCES CARD GRID ─── */
function PerformancesSection() {
  const performances = [
    {
      image: galleryImages[12].src,
      title: 'Interactive Drumming',
      description:
        'Each guest receives a djembe drum and learns traditional rhythms from our master drummers around the drum circle.',
      to: '/entertainment',
    },
    {
      image: galleryImages[1].src,
      title: 'Cultural Dance',
      description:
        'Vibrant traditional dancers bring stories to life through energetic movement and stunning costumes.',
      to: '/entertainment',
    },
    {
      image: galleryImages[6].src,
      title: 'Acapella Storytelling',
      description:
        'Our storytellers share ancient tales passed down through generations, accompanied by acapella singing.',
      to: '/entertainment',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Traditional Performances"
          subtitle="Experience the soul of Africa through our captivating performances"
        />

        <div className="mt-4">
          <LinkBoxes items={performances} columns={3} />
        </div>
      </div>
    </section>
  )
}

/* ─── RECOMMENDED BY ─── */
function AwardsSection() {
  return (
    <section className="py-16 md:py-20 bg-boma-off-white section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Recommended By"
          subtitle="Proudly recognised for our commitment to excellence"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mt-4">
          {awards.map((award, i) => (
            <FadeIn key={award.name} delay={i * 0.12}>
              <div className="block opacity-70 hover:opacity-100 transition-opacity">
                <FallbackImage
                  src={award.image}
                  alt={award.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── BOOKING CTA ─── */
function BookingCTASection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="relative py-20 md:py-28 bg-boma-green overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Experience The Boma?
          </h2>

          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Book your unforgettable evening of African cuisine, culture and entertainment
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a href={siteData.bookingUrl} className="px-8 py-3.5 bg-boma-rust text-white text-sm font-semibold uppercase tracking-wider hover:bg-boma-rust-dark transition-colors duration-300">
              Book Now
            </a>
            <a
              href={`tel:${siteData.phone}`}
              className="px-8 py-3.5 border border-white/30 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-boma-charcoal transition-colors duration-300"
            >
              {siteData.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/75 text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>{siteData.location}</span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{siteData.hours}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── LINGER SLOGAN BAND ─── */
function LingerBandSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <FallbackImage
          src="https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
      </div>

      <div className="relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="kicker !text-white/75 block mb-5">Feast — Drum — Linger</span>
          <p className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Linger a little longer
          </p>
          <p className="text-white/85 max-w-xl mx-auto text-lg font-serif italic">
            Your place to feast, drum and linger beneath the African stars.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── GALLERY PREVIEW ─── */
function GalleryPreviewSection() {
  const previewImages = galleryImages.slice(0, 6)
  const { likedImages, toggleLike } = useGalleryStore()

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into your unforgettable evening at The Boma"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mt-4">
          {previewImages.map((img, i) => (
            <FadeIn
              key={img.id}
              delay={i * 0.08}
              className="relative overflow-hidden group cursor-pointer"
            >
              <Link to="/gallery" className="block">
                <FallbackImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:from-black/70 transition-colors duration-300 flex items-end p-3">
                  <div className="opacity-100 transition-opacity duration-300">
                    <span className="text-white/75 text-[10px] uppercase tracking-wider">{img.category}</span>
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleLike(img.id)
                }}
                className={cn(
                  'absolute top-2.5 right-2.5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                  likedImages.includes(img.id)
                    ? 'bg-boma-rust text-white shadow-lg shadow-boma-rust/30'
                    : 'bg-white/80 text-boma-charcoal/60 hover:bg-white hover:text-boma-rust opacity-0 group-hover:opacity-100'
                )}
                aria-label={likedImages.includes(img.id) ? 'Unlike image' : 'Like image'}
              >
                <Heart
                  size={14}
                  className={cn(
                    'transition-transform duration-300',
                    likedImages.includes(img.id) && 'fill-current scale-110'
                  )}
                />
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-boma-rust-dark font-semibold text-sm uppercase tracking-wider hover:text-boma-charcoal transition-colors"
          >
            <Camera className="w-4 h-4" />
            View Full Gallery
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── COMPACT STRIP: EVENING + REVIEWS + FAQ ─── */
function EveningStripSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const previewFaqs = faqs.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Your Evening */}
          <div>
            <h3 className="kicker mb-6">Your Evening</h3>
            <ul className="space-y-2">
              {experiences.map((item) => (
                <li key={item.id}>
                  <Link to="/experience" className="group flex items-baseline gap-3 py-1">
                    <span className="text-boma-rust-dark font-semibold text-xs tracking-wider uppercase shrink-0">{item.time}</span>
                    <span className="text-sm text-boma-charcoal/80 group-hover:text-boma-rust-dark transition-colors">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Need to know */}
          <div>
            <h3 className="kicker mb-6">Need to Know</h3>
            <ul className="space-y-2.5">
              {needToKnow.items.slice(0, 6).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-boma-rust-dark shrink-0 mt-0.5" />
                  <span className="text-sm text-boma-charcoal/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guest reviews */}
          <div>
            <h3 className="kicker mb-6">Guest Reviews</h3>
            <div className="space-y-5">
              {testimonials.slice(0, 2).map((t) => (
                <div key={t.id} className="bg-white p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-boma-rust text-boma-rust" />
                    ))}
                  </div>
                  <p className="text-sm text-boma-charcoal/80 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-2 text-xs font-semibold text-boma-charcoal/60">{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="kicker mb-6">FAQ</h3>
            <div className="space-y-2">
              {previewFaqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="bg-white">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between py-3 px-3 text-left"
                      aria-expanded={openIndex === i}
                    >
                      <span className="font-semibold text-boma-charcoal text-sm pr-3">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 shrink-0 text-boma-charcoal/50 transition-transform duration-200',
                          openIndex === i && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-3 pb-3">
                            <p className="text-sm text-boma-charcoal/60 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>

            <Link
              to="/faq"
              className="inline-flex items-center gap-2 mt-4 text-boma-rust-dark font-semibold text-sm uppercase tracking-wider hover:text-boma-charcoal transition-colors group"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── HOME ─── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StoryBandSection />
      <CuisineModuleSection />
      <PerformancesSection />
      <AwardsSection />
      <QuoteBreak
        image={galleryImages[8].src}
        quote="The energy at The Boma is contagious! From the moment you arrive, you are immersed in African culture. The interactive drumming was the highlight."
        attribution="Maria L. — New York, USA"
      />
      <BookingCTASection />
      <LingerBandSection />
      <GalleryPreviewSection />
      <EveningStripSection />
    </div>
  )
}