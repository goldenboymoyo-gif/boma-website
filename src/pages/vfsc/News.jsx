import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoHero from '../../components/VideoHero'
import FallbackImage from '../../components/FallbackImage'
import { newsArticles, newsFilterCategories, newsletterSignup } from '../../data/siteData'

const allCategories = ['All', ...newsFilterCategories]

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [formData, setFormData] = useState({ fullName: '', country: '', email: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(a => a.category === selectedCategory)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <VideoHero
        title="News & Updates"
        subtitle="Stay in the loop with the latest happenings across the Victoria Falls Safari Collection."
        poster="https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png"
        height="h-[50vh]"
        minHeight="min-h-[350px]"
        align="left"
        showScroll={false}
        showVideo={false}
      />

      {/* Filter & Newsletter Row */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Filter Categories */}
            <div className="lg:w-2/3">
              <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-6">Filter by topic</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      selectedCategory === cat
                        ? 'bg-boma-rust text-white'
                        : 'bg-boma-rust/5 text-boma-charcoal/70 hover:bg-boma-rust/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:w-1/3">
              <div className="bg-boma-sand/40 p-6">
                <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-3">{newsletterSignup.heading}</h2>
                <p className="text-sm text-boma-charcoal/60 mb-5 leading-relaxed">{newsletterSignup.description}</p>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 p-4 text-sm text-green-800">
                    Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    {newsletterSignup.fields.map(field => (
                      <div key={field.name}>
                        <label className="block text-xs uppercase tracking-wider text-boma-charcoal/50 mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className="w-full border border-boma-charcoal/10 bg-white px-3 py-2 text-sm text-boma-charcoal focus:outline-none focus:border-boma-rust/40 transition-colors"
                        />
                      </div>
                    ))}
                    <button type="submit" className="btn-primary w-full text-sm mt-2">
                      {newsletterSignup.buttonText}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="mt-12 space-y-8">
            <AnimatePresence mode="wait">
              {filteredArticles.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 text-boma-charcoal/50"
                >
                  <p className="text-sm">No articles found in this category.</p>
                </motion.div>
              ) : (
                filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-boma-charcoal/10 pb-8 last:border-b-0"
                  >
                    <Link to={`/news/${article.slug}`} className="flex flex-col md:flex-row gap-6 group">
                      {/* Image */}
                      <div className="md:w-80 shrink-0 aspect-[16/10] overflow-hidden">
                        <FallbackImage
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs uppercase tracking-wider text-boma-rust">{article.category}</span>
                          <span className="text-boma-charcoal/20">|</span>
                          <time className="text-xs text-boma-charcoal/50 uppercase tracking-wider">
                            {formatDate(article.date)}
                          </time>
                        </div>

                        <h2 className="text-xl font-bold text-boma-charcoal mb-3 leading-snug group-hover:text-boma-rust transition-colors">
                          {article.title}
                        </h2>

                        <p className="text-sm text-boma-charcoal/70 leading-relaxed mb-3">
                          {article.excerpt}
                        </p>

                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {article.tags.map(tag => (
                              <span key={tag} className="text-xs text-boma-charcoal/40 bg-boma-charcoal/5 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <span className="text-xs uppercase tracking-wider text-boma-rust group-hover:text-boma-rust/80 transition-colors">
                          Read article
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
