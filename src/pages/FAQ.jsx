import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqs } from '../data/siteData'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useAnimations'
import { cn } from '../lib/utils'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { ref: listRef, isInView: listInView } = useScrollReveal()

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs
    const q = searchQuery.toLowerCase()
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <VideoHero
        badge="The Boma"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit to The Boma."
        poster="https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png"
        showVideo={false}
        height="h-[60vh]"
        minHeight="min-h-[450px]"
        align="center"
        showScroll={false}
      />

      {/* Search & FAQ List */}
      <section className="py-24 bg-boma-off-white">
        <div className="max-w-3xl mx-auto section-padding" ref={listRef}>
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-boma-charcoal/30"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setOpenIndex(null)
              }}
              className="w-full pl-14 pr-5 py-4 bg-white border border-boma-charcoal/10 rounded-sm text-boma-charcoal placeholder:text-boma-charcoal/30 text-sm focus:outline-none focus:border-boma-rust/50 focus:ring-1 focus:ring-boma-rust/20 transition-all"
            />
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={listInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={cn(
                      'bg-white transition-all duration-300 overflow-hidden',
                      isOpen
                        ? 'border-b border-boma-rust/20'
                        : 'border-b border-boma-charcoal/10'
                    )}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          'flex-1 text-base font-medium transition-colors',
                          isOpen ? 'text-boma-charcoal' : 'text-boma-charcoal/80'
                        )}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          size={18}
                          className={cn(
                            'transition-colors',
                            isOpen ? 'text-boma-rust' : 'text-boma-charcoal/40'
                          )}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pl-6">
                            <p className="text-boma-charcoal/70 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle size={48} className="text-boma-charcoal/15 mx-auto mb-4" />
              <p className="text-boma-charcoal/70 text-lg mb-2">No matching questions found.</p>
              <p className="text-boma-charcoal/60 text-sm">
                Try a different search or{' '}
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-boma-rust hover:underline"
                >
                  clear the search
                </button>
                .
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-boma-off-white">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MessageCircle className="text-boma-rust mx-auto mb-6" size={32} />
            <h2 className="text-3xl md:text-4xl text-boma-charcoal mb-4">
              Still Have Questions?
            </h2>
            <p className="text-boma-charcoal/70 text-lg max-w-xl mx-auto mb-8">
              Our team is always happy to help. Reach out to us and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/263832843232"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
