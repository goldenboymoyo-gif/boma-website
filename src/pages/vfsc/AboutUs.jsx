import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, ChevronUp, MapPin, Clock, Heart } from 'lucide-react'
import VideoHero from '../../components/VideoHero'
import FallbackImage from '../../components/FallbackImage'
import SectionHeading from '../../components/SectionHeading'
import { vfscData } from '../../data/vfscData'

export default function AboutUs() {
  const data = vfscData.aboutUs

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <VideoHero
        badge="Victoria Falls Safari Collection"
        title={data.title}
        subtitle="A family of award-winning properties united by a love for Africa, wildlife and world-class hospitality."
        poster={data.heroImage}
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="center"
        showScroll={false}
        showVideo={false}
      />

      {/* Story Section */}
      <section className="section-padding py-20 md:py-28 bg-boma-off-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-boma-charcoal mt-3 mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Where the Wild Meets the Welcome
            </h2>
            <p className="text-boma-charcoal/70 mb-4 leading-relaxed">
              Nestled on the doorstep of one of the Seven Natural Wonders of the World, the Victoria Falls Safari Collection is a group of four distinctive properties on the Victoria Falls Safari Lodge estate.
            </p>
            <p className="text-boma-charcoal/70 mb-4 leading-relaxed">
              From the award-winning Victoria Falls Safari Lodge, to the exclusive Safari Club, the intimate Safari Suites and the self-catering Lokuthula Lodges — each property offers a unique way to experience the magic of Victoria Falls and the African bush.
            </p>
            <p className="text-boma-charcoal/70 leading-relaxed">
              United by a passion for authentic African hospitality, our team of dedicated professionals ensures every guest enjoys a once-in-a-lifetime experience — from world-class dining at The Boma and MaKuwa-Kuwa Restaurant, to thrilling game drives, sunset cruises and guided tours of the Falls.
            </p>
          </div>
          <div className="relative">
            <FallbackImage
              src={data.exploreFurtherImage}
              alt="Victoria Falls Safari Lodge estate"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-boma-rust text-white p-6 max-w-[220px]">
              <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>4</p>
              <p className="text-sm text-white/80 mt-1">Distinctive properties on one stunning estate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding py-16 md:py-20 border-t border-boma-charcoal/5 bg-boma-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4', label: 'Properties' },
              { number: '15+', label: 'Years of Excellence' },
              { number: '4', label: 'Dining Venues' },
              { number: '14', label: 'Activities' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-boma-rust" style={{ fontFamily: 'var(--font-heading)' }}>{stat.number}</p>
                <p className="text-sm text-boma-charcoal/60 mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Further */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Explore Further" subtitle="Discover what makes us special" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {data.exploreFurther.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={item.path} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden mb-4">
                    <FallbackImage
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-boma-charcoal/65 text-sm leading-relaxed">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-boma-rust text-xs uppercase tracking-wider font-semibold mt-3 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Environment */}
      <section className="section-padding py-20 md:py-28 bg-boma-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-boma-rust text-xs uppercase tracking-[0.25em] font-semibold">Community & Responsibility</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Making a Difference
          </h2>
          <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            We are committed to sustainable tourism that supports local communities and preserves the natural environment. Through initiatives like Pack for a Purpose, the Victoria Falls Anti-Poaching Unit, and our vulture conservation programmes, we strive to leave a positive legacy for future generations.
          </p>
          <Link
            to="/about-us/community-and-environment"
            className="inline-flex items-center gap-2 px-6 py-3 border border-boma-rust text-boma-rust hover:bg-boma-rust hover:text-white text-sm font-semibold uppercase tracking-wider transition-all"
          >
            Our Commitment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="section-padding py-20 md:py-28 bg-boma-off-white">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Frequently Asked Questions" subtitle="How you can help" />
            <div className="mt-10 space-y-3">
              {data.faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding py-16 md:py-20 bg-boma-rust">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Experience Victoria Falls?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            From wildlife encounters to adrenaline-pumping adventures, the Victoria Falls Safari Collection offers it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-boma-rust font-semibold text-sm uppercase tracking-wider hover:bg-boma-off-white transition-colors">
              Book Your Stay
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/activities" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
              Explore Activities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-boma-charcoal font-medium pr-4">{faq.q}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-boma-rust shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-boma-charcoal/30 shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-boma-charcoal/70 leading-relaxed border-t border-boma-grey/30 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
