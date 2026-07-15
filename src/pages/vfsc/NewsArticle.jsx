import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import FallbackImage from '../../components/FallbackImage'
import { newsArticles } from '../../data/siteData'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsArticles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-boma-charcoal mb-4">Article not found</h1>
          <Link to="/news" className="text-boma-rust hover:text-boma-rust/80 text-sm">
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  const related = newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <FallbackImage
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/80 via-boma-charcoal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-4xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-wider text-boma-rust bg-white/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-white/50">|</span>
            <time className="text-xs text-white/60 uppercase tracking-wider">
              {formatDate(article.date)}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Tag className="w-4 h-4 text-boma-charcoal/40" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-boma-charcoal/50 bg-boma-charcoal/5 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Body */}
          <div className="prose prose-boma max-w-none">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="text-boma-charcoal/80 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-boma-charcoal/10">
              <h2 className="text-xs uppercase tracking-[0.2em] text-boma-charcoal/60 mb-6">
                Related Articles
              </h2>
              <div className="space-y-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 shrink-0 overflow-hidden rounded">
                      <FallbackImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-boma-rust uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-sm font-semibold text-boma-charcoal group-hover:text-boma-rust transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-boma-charcoal/50 mt-1">
                        {formatDate(item.date)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
