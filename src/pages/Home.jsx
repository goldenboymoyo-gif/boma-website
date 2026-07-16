import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Clock,
  Check,
  ArrowRight,
  Star,
  Quote,
  MapPin,
  Mic2,
  BookOpen,
  Camera,
  Disc3,
  Download,
  Heart,
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { siteData, highlights, experiences, testimonials, galleryImages, faqs, awards, menuItems, needToKnow } from '../data/siteData'
import { useGalleryStore } from '../store/galleryStore'
import SectionHeading from '../components/SectionHeading'
import FallbackImage from '../components/FallbackImage'
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
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Video */}
      <div className="absolute inset-0">
        <video
          src={siteData.heroVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://vfsc-umbraco.live.fireworkx.net/media/tnyd4m5n/the-boma-dinner-drum-show.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white/80 text-xs uppercase tracking-[0.35em] font-medium"
          >
            Victoria Falls, Zimbabwe
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-4 mb-3 leading-[0.95]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Boma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-2 italic"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Dinner & Drum Show
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-px bg-boma-rust mx-auto my-5"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-white/85 mb-8 max-w-xl mx-auto"
          >
            Over a million guests have experienced the magic. Come see why they keep coming back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={siteData.bookingUrl}
              className="btn-primary"
            >
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
    </section>
  )
}

/* ─── NEED TO KNOW ─── */
function NeedToKnowSection() {
  return (
    <section className="py-16 md:py-20 bg-boma-off-white section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="pl-5 border-l-2 border-boma-rust/40">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-boma-rust/70 mb-3">{needToKnow.title}</h3>
              <ul className="space-y-2">
                {needToKnow.items.map((item, i) => (
                  <li key={i} className="text-sm text-boma-charcoal/70 leading-relaxed flex gap-2">
                    <Check className="w-4 h-4 text-boma-rust shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="pl-5 border-l-2 border-boma-green/40">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-boma-rust/70 mb-3">{siteData.enquiries.heading}</h3>
              <p className="text-boma-charcoal/70 text-sm leading-relaxed mb-5">{siteData.enquiries.description}</p>
              <a
                href={siteData.bookingUrl}
                className="inline-block px-6 py-3 bg-boma-rust text-white text-sm font-semibold uppercase hover:bg-boma-rust-dark hover:shadow-lg hover:shadow-boma-rust/25 transition-all mb-5"
              >
                Book Now
              </a>
              <p className="text-boma-charcoal/50 text-xs uppercase tracking-wider mb-2">{siteData.enquiries.preferToSpeak}</p>
              <div className="space-y-1.5">
                <a href={`tel:${siteData.phone}`} className="block text-boma-charcoal/70 text-sm hover:text-boma-rust transition-colors">
                  {siteData.phone}
                </a>
                <a href={`mailto:${siteData.email}`} className="block text-boma-charcoal/70 text-sm hover:text-boma-rust transition-colors">
                  {siteData.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── EXPERIENCE OVERVIEW ─── */
function ExperienceOverviewSection() {
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -30 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Link to="/experience" className="block">
            <FallbackImage
              src={galleryImages[0].src}
              alt="The Boma venue"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
          </Link>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {galleryImages.slice(1, 4).map((img) => (
              <Link to="/gallery" key={img.id} className="block overflow-hidden">
                <FallbackImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-24 md:h-28 object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 30 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">
            The Experience
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-boma-charcoal mt-3 mb-5 leading-tight">
            A Legendary African Experience
          </h2>

          <p className="text-boma-charcoal/70 mb-4 leading-relaxed">
            It's fair to say the Boma – Dinner & Drum Show, conveniently located on the estate, is a legendary dining and entertainment experience – over a million people can't be wrong.
          </p>

          <p className="text-boma-charcoal/70 mb-4 leading-relaxed">
            The evening offers an unforgettable fusion of mouth-watering local cuisine, energetic dance performances and interactive drumming. It has over the years firmly established itself as a Victoria Falls "must-do" experience, providing a unique cultural experience that bombards the senses with the tastes, sights and sounds of Africa.
          </p>

          <p className="text-boma-charcoal/70 mb-6 leading-relaxed">
            The four-course, buffet-style meal includes a delicious platter of nibbles, soup from the campfire, a braai (barbecue) buffet, followed by a selection of desserts. One of the Boma's trademark moments is when diners need to decide – do I head to the Mopane Worm station and try one of these apparently delicious tidbits? Decide yes and we'll reward your adventurousness with a certificate!
          </p>

          <p className="text-boma-charcoal/70 mb-7 leading-relaxed">
            Outside the purpose-built space are the carvers, crafters and photographers, happy to chat and offer their services. The shop sells a wide range of local products and art, as well as the trademark sarongs guests are invited to wear as they enter the experience.
          </p>

          <div className="mb-7 pl-5 border-l-2 border-boma-rust/40">
            <h3 className="text-xs font-semibold text-boma-rust/70 uppercase tracking-widest mb-3">Need to Know</h3>
            <div className="space-y-2">
              {needToKnow.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-boma-rust shrink-0 mt-0.5" />
                  <span className="text-sm text-boma-charcoal/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-7 pl-5 border-l-2 border-boma-rust/40">
            <h3 className="text-xs font-semibold text-boma-rust/70 uppercase tracking-widest mb-3">Highlights</h3>
            <div className="space-y-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-boma-rust shrink-0" />
                  <span className="text-sm text-boma-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-7 pl-5 border-l-2 border-boma-rust/40">
            <h3 className="text-xs font-semibold text-boma-rust/70 uppercase tracking-widest mb-3">Downloads</h3>
            <div className="space-y-2">
              {siteData.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-boma-charcoal/70 hover:text-boma-rust transition-colors"
                >
                  <Download className="w-4 h-4 text-boma-rust shrink-0" />
                  {dl.title}
                </a>
              ))}
            </div>
          </div>

          <div className="mb-7 pl-5 border-l-2 border-boma-rust/40">
            <h3 className="text-xs font-semibold text-boma-rust/70 uppercase tracking-widest mb-3">Enquiries</h3>
            <p className="text-sm text-boma-charcoal/70 mb-3">{siteData.enquiries.description}</p>
            <p className="text-sm text-boma-charcoal/70 mb-1">{siteData.enquiries.preferToSpeak}</p>
            <a
              href={`tel:${siteData.phone}`}
              className="text-sm font-semibold text-boma-rust hover:text-boma-rust-dark transition-colors"
            >
              {siteData.phone}
            </a>
            <span className="text-boma-charcoal/30 mx-2">|</span>
            <a
              href={`mailto:${siteData.email}`}
              className="text-sm font-semibold text-boma-rust hover:text-boma-rust-dark transition-colors"
            >
              {siteData.email}
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Link
              to="/experience"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/booking"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── TIMELINE ─── */
function TimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Your Evening at The Boma"
          subtitle="From the moment you arrive until the final farewell"
        />

        <div className="relative mt-14">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-boma-rust/20" />

          <div className="space-y-6 md:space-y-0">
            {experiences.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const { ref, isInView } = useScrollReveal(0.3)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative md:flex items-center md:min-h-[120px]',
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      {/* Desktop */}
      <div className="hidden md:block md:w-5/12">
        <Link
          to="/experience"
          className={cn(
            'block bg-white py-5 px-6 transition-all duration-300 group',
            isEven ? 'text-right mr-12' : 'text-left ml-12'
          )}
        >
          <div className={cn('inline-flex items-center gap-2 mb-2', !isEven && 'justify-start', isEven && 'justify-end')}>
            <span className="text-boma-rust font-bold text-xs tracking-wider uppercase">{item.time}</span>
          </div>
          <h3 className="text-lg font-bold text-boma-charcoal mt-1 group-hover:text-boma-rust transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{item.event}</h3>
          <p className="text-sm text-boma-charcoal/60 mt-1.5 leading-relaxed">{item.description}</p>
        </Link>
      </div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-boma-rust z-10 ring-4 ring-boma-off-white" />

      <div className="hidden md:block md:w-5/12" />

      {/* Mobile */}
      <div className="md:hidden flex items-start gap-3">
        <div className="flex-shrink-0 w-14 flex flex-col items-center z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-boma-rust border-3 border-boma-off-white shadow-sm" />
          <span className="text-boma-rust font-bold text-[10px] mt-1">{item.time}</span>
        </div>
        <Link to="/experience" className="flex-1 bg-white py-3 px-4 transition-all duration-300 mb-3 group">
          <h3 className="font-bold text-sm text-boma-charcoal group-hover:text-boma-rust transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{item.event}</h3>
          <p className="text-xs text-boma-charcoal/60 mt-1 leading-relaxed">{item.description}</p>
        </Link>
      </div>
    </motion.div>
  )
}

/* ─── PERFORMANCES ─── */
function PerformancesSection() {
  const performances = [
    {
      icon: Disc3,
      title: 'Interactive Drumming',
      description:
        'Each guest receives a djembe drum and learns traditional rhythms from our master drummers.',
    },
    {
      icon: Mic2,
      title: 'Cultural Dance',
      description:
        'Vibrant traditional dancers bring stories to life through energetic movement and stunning costumes.',
    },
    {
      icon: BookOpen,
      title: 'Storytelling',
      description:
        'Our storytellers share ancient tales passed down through generations, accompanied by acapella singing.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-boma-green section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Traditional Performances"
          subtitle="Experience the soul of Africa through our captivating performances"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {performances.map((perf, i) => (
            <FadeIn key={perf.title} delay={i * 0.12}>
              <div className="py-6 h-full">
                <perf.icon className="w-6 h-6 text-boma-rust mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{perf.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{perf.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── MENU PREVIEW ─── */
function MenuPreviewSection() {
  const menuCategories = [
    { key: 'starters', label: 'Starters' },
    { key: 'mainCourse', label: 'Main Course' },
    { key: 'desserts', label: 'Desserts' },
  ]

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="African Cuisine"
          subtitle="A feast of flavours from the Boma Braai, campfire and dessert buffet"
        />

        <div className="hidden md:grid grid-cols-3 gap-6 mt-4">
          {menuCategories.map((cat, ci) => {
            const section = menuItems[cat.key]
            return (
              <FadeIn key={cat.key} delay={ci * 0.12}>
                <Link to="/menu" className="block bg-white py-5 px-6 h-full transition-all duration-300 group border-b border-boma-charcoal/10 last:border-b-0">
                  <h3 className="font-bold text-boma-charcoal mb-1 group-hover:text-boma-rust transition-colors">{cat.label}</h3>
                  <p className="text-xs text-boma-rust font-medium uppercase tracking-wider mb-4">{section.title}</p>
                  {section.items.length > 0 ? (
                    <div className="space-y-3">
                      {section.items.map((dish) => (
                        <div key={dish.name}>
                          <h4 className="font-semibold text-boma-charcoal text-sm">{dish.name}</h4>
                          <p className="text-xs text-boma-charcoal/60 mt-0.5">{dish.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-boma-charcoal/60">{section.description}</p>
                  )}
                </Link>
              </FadeIn>
            )
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden mt-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={12}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {menuCategories.map((cat) => {
              const section = menuItems[cat.key]
              return (
                <SwiperSlide key={cat.key}>
                  <Link to="/menu" className="block bg-white py-4 px-5 mx-1 transition-all duration-300 border-b border-boma-charcoal/10">
                    <h3 className="font-bold text-boma-charcoal mb-1">{cat.label}</h3>
                    <p className="text-xs text-boma-rust font-medium uppercase tracking-wider mb-3">{section.title}</p>
                    {section.items.length > 0 ? (
                      <div className="space-y-2.5">
                        {section.items.map((dish) => (
                          <div key={dish.name}>
                            <h4 className="font-semibold text-boma-charcoal text-sm">{dish.name}</h4>
                            <p className="text-xs text-boma-charcoal/60 mt-0.5">{dish.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-boma-charcoal/60">{section.description}</p>
                    )}
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <FadeIn className="text-center mt-8">
          <Link to="/menu" className="btn-primary">
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
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
                    <span className="text-boma-rust text-[10px] uppercase tracking-wider">{img.category}</span>
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
                  'absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
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
            className="inline-flex items-center gap-2 text-boma-rust font-semibold text-sm uppercase tracking-wider hover:text-boma-rust-dark transition-colors"
          >
            <Camera className="w-4 h-4" />
            View Full Gallery
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Guest Reviews"
          subtitle="What our guests say about their experience"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="pb-12 mt-4"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="py-6 px-4 mx-2 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-boma-rust text-boma-rust" />
                  ))}
                </div>
                <div className="relative flex-1">
                  <Quote className="w-6 h-6 text-boma-rust/15 absolute -top-1 -left-1" />
                  <p className="text-boma-charcoal/80 text-sm leading-relaxed pl-5 italic">
                    {t.text}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-boma-charcoal/10">
                  <p className="font-semibold text-boma-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-boma-charcoal/60">{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

/* ─── FAQ PREVIEW ─── */
function FAQPreviewSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const previewFaqs = faqs.slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-boma-off-white section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your visit"
        />

        <div className="space-y-2 mt-4">
          {previewFaqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="bg-white border-b border-boma-charcoal/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-boma-charcoal text-sm pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-boma-charcoal/50" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="pb-4 pt-0">
                        <p className="text-boma-charcoal/60 text-sm leading-relaxed">
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

        <FadeIn className="text-center mt-8">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-boma-rust font-semibold text-sm uppercase tracking-wider hover:text-boma-rust-dark transition-colors"
          >
            View All FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── AWARDS ─── */
function AwardsSection() {
  return (
    <section className="py-16 md:py-20 bg-boma-off-white section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Awards & Recognition"
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

/* ─── HOME ─── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NeedToKnowSection />
      <ExperienceOverviewSection />
      <TimelineSection />
      <PerformancesSection />
      <MenuPreviewSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <FAQPreviewSection />
      <AwardsSection />
      <BookingCTASection />
    </div>
  )
}
