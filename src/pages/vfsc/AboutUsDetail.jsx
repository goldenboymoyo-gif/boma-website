import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import VideoHero from '../../components/VideoHero'
import FallbackImage from '../../components/FallbackImage'
import SectionHeading from '../../components/SectionHeading'
import { vfscData } from '../../data/vfscData'

export default function AboutUsDetail({ dataKey }) {
  const page = vfscData.aboutUs.subpages?.[dataKey]

  if (!page) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center p-6 bg-boma-off-white">
        <div className="text-center max-w-xl">
          <h1 className="text-3xl font-bold text-boma-charcoal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Page not found
          </h1>
          <p className="text-boma-charcoal/70 mb-6">We couldn't find the section you were looking for.</p>
          <Link to="/about-us" className="btn-primary">Back to About Us</Link>
        </div>
      </section>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <VideoHero
        badge="Victoria Falls Safari Collection"
        title={page.title}
        subtitle={page.tagline}
        poster={page.heroImage}
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="center"
        showScroll={false}
      />

      {/* Breadcrumb / back link */}
      <div className="bg-boma-off-white border-b border-boma-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
          <Link to="/about-us" className="inline-flex items-center gap-2 text-boma-rust text-sm uppercase tracking-wider font-semibold hover:text-boma-rust-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            About Us
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding py-20 md:py-28 bg-boma-off-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">{page.kicker || 'Our Story'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-boma-charcoal mt-3 mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {page.introTitle}
            </h2>
            {page.intro.map((paragraph, i) => (
              <p key={i} className={i < page.intro.length - 1 ? 'text-boma-charcoal/70 mb-4 leading-relaxed' : 'text-boma-charcoal/70 leading-relaxed'}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:sticky lg:top-28">
            <FallbackImage
              src={page.introImage}
              alt={page.title}
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Items grid (awards / partners) */}
      {page.items && page.items.length > 0 && (
        <section className="section-padding py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title={page.itemsTitle} subtitle={page.itemsSubtitle} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {page.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-boma-charcoal/10 p-6 flex flex-col items-start hover:border-boma-rust/30 hover:shadow-lg hover:shadow-boma-rust/5 transition-all duration-500"
                >
                  {item.image && (
                    <div className="h-14 flex items-center justify-center mb-5">
                      <FallbackImage
                        src={item.image}
                        alt={item.name}
                        className="max-h-14 max-w-[180px] object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-boma-charcoal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-boma-charcoal/65 leading-relaxed">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Text sections (team / ethos) */}
      {page.sections && page.sections.length > 0 && (
        <section className="section-padding py-20 md:py-28 bg-boma-charcoal">
          <div className="max-w-4xl mx-auto space-y-14">
            {page.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.heading}
                </h3>
                <p className="text-white/70 leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding py-16 md:py-20 bg-boma-rust">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Discover the Vic Falls Collection
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Explore our award-winning properties, dining venues and experiences on the Victoria Falls Safari Lodge estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/accommodation" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-boma-rust font-semibold text-sm uppercase tracking-wider hover:bg-boma-off-white transition-colors">
              Accommodation
            </Link>
            <Link to="/activities" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
              Explore Activities
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}