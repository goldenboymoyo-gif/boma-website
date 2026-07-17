import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Grid3x3, Heart } from 'lucide-react'
import { galleryImages } from '../data/siteData'
import { useGalleryStore } from '../store/galleryStore'
import VideoHero from '../components/VideoHero'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useAnimations'
import FallbackImage from '../components/FallbackImage'
import { cn } from '../lib/utils'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'venue', label: 'Venue' },
  { key: 'dining', label: 'Dining' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'experience', label: 'Experience' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const { ref: gridRef, isInView: gridInView } = useScrollReveal()
  const { likedImages, toggleLike } = useGalleryStore()

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const selectedIndex = selectedImage !== null
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1

  const handlePrev = useCallback(() => {
    if (selectedIndex <= 0) return
    setSelectedImage(filteredImages[selectedIndex - 1])
  }, [selectedIndex, filteredImages])

  const handleNext = useCallback(() => {
    if (selectedIndex >= filteredImages.length - 1) return
    setSelectedImage(filteredImages[selectedIndex + 1])
  }, [selectedIndex, filteredImages])

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedImage, handlePrev, handleNext])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <VideoHero
        badge="The Boma"
        title="Gallery"
        subtitle="A visual journey through the sights, flavours and energy of The Boma experience."
        poster={galleryImages[0]?.src}
        height="h-[70vh]"
        minHeight="min-h-[500px]"
        align="left"
        overlay="from-boma-charcoal/90 via-boma-charcoal/60 to-boma-charcoal/30"
        showScroll={false}
      />

      {/* Filters & Grid */}
      <section className="py-24 bg-boma-off-white" ref={gridRef}>
        <div className="max-w-7xl mx-auto section-padding">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'px-6 py-2.5 text-sm font-medium rounded-sm transition-all duration-300',
                  activeCategory === cat.key
                    ? 'bg-boma-rust text-boma-charcoal shadow-lg shadow-boma-rust/20'
                    : 'bg-boma-charcoal/5 text-boma-charcoal/70 hover:bg-boma-charcoal/10'
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="group relative w-full rounded-sm overflow-hidden cursor-pointer block"
                  >
                    <FallbackImage
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        'w-full object-cover transition-transform duration-700 group-hover:scale-105',
                        index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-boma-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Like button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(image.id)
                      }}
                      className={cn(
                        'absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                        likedImages.includes(image.id)
                          ? 'bg-boma-rust text-white shadow-lg shadow-boma-rust/30'
                          : 'bg-white/80 text-boma-charcoal/60 hover:bg-white hover:text-boma-rust opacity-0 group-hover:opacity-100'
                      )}
                      aria-label={likedImages.includes(image.id) ? 'Unlike image' : 'Like image'}
                    >
                      <Heart
                        size={16}
                        className={cn(
                          'transition-transform duration-300',
                          likedImages.includes(image.id) && 'fill-current scale-110'
                        )}
                      />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                      <p className="text-boma-rust/70 text-xs uppercase tracking-wider mt-1 capitalize">
                        {image.category}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Grid3x3 size={48} className="text-boma-charcoal/20 mx-auto mb-4" />
              <p className="text-boma-charcoal/70 text-lg">No images in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-boma-charcoal/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            {selectedIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Next */}
            {selectedIndex < filteredImages.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 max-w-5xl w-full mx-8"
              >
                <FallbackImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-sm"
                  loading="eager"
                />
                <div className="text-center mt-4">
                  <p className="text-white text-sm">{selectedImage.alt}</p>
                  <p className="text-white/80 text-xs mt-1">
                    {selectedIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
