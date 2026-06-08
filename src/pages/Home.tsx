import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Heart, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import freedomImage from '../assets/images/freedom-hero.jpeg'
import img1 from '../assets/images/independence-dinner-dance-2026.jpeg'
import img2 from '../assets/images/couple-kente-2.jpeg'
import img3 from '../assets/images/community-gathering-large.jpeg'
import img4 from '../assets/images/leadership-traditional-wear.jpeg'
import img5 from '../assets/images/cultural-event-red-black.jpeg'
import img6 from '../assets/images/formal-event-chandelier.jpeg'
import img7 from '../assets/images/independence-celebration-leaders.jpeg'
import img8 from '../assets/images/independence-celebration-group.jpeg'
import img9 from '../assets/images/couple-kente-1.jpeg'
import img10 from '../assets/images/couple-traditional-brick.jpeg'
import img11 from '../assets/images/independence-arch-ghana.jpeg'
import img12 from '../assets/images/group-traditional-black.jpeg'

export default function Home() {
  const heroRef = useRef(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-fade')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: Calendar, title: 'Events & Celebrations', desc: 'GhanaFest, Republic Day, and community gatherings' },
    { icon: Heart, title: 'Community Services', desc: 'Health clinic, education, funeral assistance & more' },
    { icon: Users, title: '13 Affiliates', desc: 'Regional associations united in cultural heritage' },
  ]

  const upcomingEvents = [
    { name: 'GhanaFest 37', date: 'July 25, 2026', desc: 'Annual cultural celebration' },
    { name: 'Ghana Republic Day', date: 'March 1, 2026', desc: 'Independence celebration' },
    { name: 'Asanteman Association', date: 'May 23-24, 2026', desc: 'Regional gathering' },
  ]

  const allGalleryPhotos = [
    { src: img1, category: 'events', caption: 'Independence Dinner Dance 2026 — Celebrating Ghana at 69', date: 'March 2026', span: 'col-span-2 row-span-2' },
    { src: img2, category: 'culture', caption: 'Traditional Kente Celebration — Cultural Pride', date: 'May 2026', span: '' },
    { src: img3, category: 'community', caption: 'Community Gathering — Unity in Action', date: 'June 2026', span: 'col-span-2' },
    { src: img4, category: 'leadership', caption: 'Leadership in Traditional Wear — Honoring Heritage', date: 'May 2026', span: '' },
    { src: img5, category: 'culture', caption: 'Cultural Celebration — Red & Black Tradition', date: 'April 2026', span: '' },
    { src: img6, category: 'events', caption: 'Formal Gala Evening — Premium Celebration', date: 'March 2026', span: '' },
    { src: img7, category: 'leadership', caption: 'Community Leaders — Celebrating Excellence', date: 'June 2026', span: '' },
    { src: img8, category: 'community', caption: 'Group Celebration — Strength in Numbers', date: 'July 2026', span: '' },
    { src: img9, category: 'youth', caption: 'Youth in Kente — Next Generation Pride', date: 'May 2026', span: '' },
    { src: img10, category: 'culture', caption: 'Couple in Traditional Attire — Love & Culture', date: 'April 2026', span: '' },
    { src: img11, category: 'community', caption: 'Independence Arch Ghana — Honoring Our Roots', date: 'Annual', span: '' },
    { src: img12, category: 'leadership', caption: 'Group in Traditional Black — Unity & Strength', date: 'June 2026', span: '' },
  ]

  const galleryCategories = [
    { id: 'all', label: 'All Moments' },
    { id: 'events', label: 'Events' },
    { id: 'community', label: 'Community Life' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'culture', label: 'Culture' },
    { id: 'youth', label: 'Youth' },
  ]

  const filteredPhotos = activeCategory === 'all' ? allGalleryPhotos : allGalleryPhotos.filter(p => p.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % allGalleryPhotos.length)
  }

  const prevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + allGalleryPhotos.length) % allGalleryPhotos.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-32 min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-scroll md:bg-fixed"
        style={{
          backgroundImage: `url(${freedomImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Faded overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/25"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left" ref={heroRef}>
          <div className="hero-text-block mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <h1 className="heading-1 heading-premium mb-2 animate-fade-up">
              United in Heritage,
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent"> Empowered in diaspora</span>
            </h1>
            <div className="accent-line mx-auto md:mx-0"></div>

            {/* Micro-narrative */}
            <p className="micro-narrative animate-slide-in max-w-2xl mx-auto md:mx-0" style={{ animationDelay: '0.1s' }}>
              For over 60 years, we've united Ghanaian families, leaders, and organizations across Chicago.
            </p>

            <p className="body-lg mb-8 animate-slide-in max-w-2xl mx-auto md:mx-0" style={{ animationDelay: '0.2s' }}>
              Ghana National Council of Metropolitan Chicago unites Ghanaians in the greater Chicago area through cultural preservation, civic engagement, and social advancement.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 animate-fade-up items-center md:items-start justify-center md:justify-start w-full" style={{ animationDelay: '0.4s' }}>
              <Link to="/about" className="btn-primary inline-flex items-center justify-center gap-2 w-full max-w-[320px] mx-auto sm:w-auto sm:max-w-none sm:mx-0">
                Learn More <ArrowRight size={20} />
              </Link>
              <Link to="/events" className="btn-secondary inline-flex items-center justify-center gap-2 w-full max-w-[320px] mx-auto sm:w-auto sm:max-w-none sm:mx-0">
                View Events
              </Link>
            </div>

            {/* Heritage badges */}
            <div className="heritage-cluster mt-8 animate-fade-up justify-center md:justify-start" style={{ animationDelay: '0.6s' }}>
              <div className="heritage-item">
                <span className="text-lg">🇬🇭</span>
                <span>Heritage</span>
              </div>
              <div className="heritage-item">
                <span className="text-lg">🤝</span>
                <span>Unity</span>
              </div>
              <div className="heritage-item">
                <span className="text-lg">🎭</span>
                <span>Culture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-scroll-indicator">
          <ChevronDown size={32} className="text-gold-400" />
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { number: '13', label: 'Affiliate Organizations' },
          { number: '10K+', label: 'Community Members' },
          { number: '40+', label: 'Annual Events' },
          { number: '60+', label: 'Years of Service' },
        ].map((stat, i) => (
          <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Features */}
      <section className="py-20 grid md:grid-cols-3 gap-6 animate-section-reveal">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div key={i} className="card-kente group">
              <div className="card-kente-stripe"></div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Icon size={24} className="text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          )
        })}
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Gallery Header */}
      <section className="py-20 text-center">
        <h2 className="heading-2 mb-4">GNC Community Moments</h2>
        <p className="body-lg mb-12 max-w-2xl mx-auto">
          Celebrating Ghanaian culture, unity, and leadership across Chicago. Explore our community's vibrant moments from events, celebrations, and cultural gatherings.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-slate-900 shadow-lg shadow-gold-500/40'
                  : 'glass hover:bg-white/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-8 animate-section-reveal">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredPhotos.map((photo, i) => (
            <div
              key={i}
              className={`glass overflow-hidden group cursor-pointer relative ${photo.span}`}
              onClick={() => openLightbox(allGalleryPhotos.indexOf(photo))}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{photo.caption}</p>
                <p className="text-gray-300 text-xs">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-20">
        <div className="glass-lg p-12 text-center">
          <h2 className="heading-2 mb-4">Join the GNC Community</h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Be part of our cultural events, leadership programs, and community initiatives. Create your own GNC moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Become a Member
            </Link>
            <Link to="/events" className="btn-secondary inline-flex items-center justify-center gap-2">
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            className="absolute top-6 right-6 text-white hover:text-gold-400 transition"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={allGalleryPhotos[lightboxIndex].src}
              alt={allGalleryPhotos[lightboxIndex].caption}
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="bg-slate-900/50 backdrop-blur p-6 rounded-lg border border-white/10 mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {allGalleryPhotos[lightboxIndex].caption}
              </h3>
              <p className="text-gray-300">{allGalleryPhotos[lightboxIndex].date}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevPhoto}
                className="btn-secondary p-3 hover:scale-110 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <p className="text-white">
                {lightboxIndex + 1} / {allGalleryPhotos.length}
              </p>
              <button
                onClick={nextPhoto}
                className="btn-secondary p-3 hover:scale-110 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Upcoming Events */}
      <section className="py-20 animate-section-reveal">
        <h2 className="heading-2 mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="card">
              <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center mb-4">
                <Calendar size={20} className="text-gold-400" />
              </div>
              <h3 className="font-semibold mb-2">{event.name}</h3>
              <p className="text-gold-400 text-sm mb-2">{event.date}</p>
              <p className="text-gray-400 text-sm">{event.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/events" className="btn-secondary">View All Events</Link>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Featured Events Carousel */}
      <section className="py-20 animate-section-reveal">
        <h2 className="heading-2 mb-4">Featured Events This Season</h2>
        <p className="body-lg mb-12 max-w-2xl">
          Experience the energy and culture of GNC's most celebrated events. From grand festivals to intimate gatherings, there's something for everyone.
        </p>

        <div className="overflow-x-auto pb-6 scroll-smooth">
          <div className="flex gap-6 min-w-max">
            {[
              { title: 'GhanaFest 2026', date: 'July 25', desc: 'The largest celebration of Ghanaian culture in the Midwest', icon: '🎭' },
              { title: 'Republic Day', date: 'March 1', desc: 'Commemorate Ghana\'s independence with traditions & pride', icon: '🇬🇭' },
              { title: 'Youth Leadership Summit', date: 'August 10-12', desc: 'Empower the next generation of community leaders', icon: '🚀' },
              { title: 'Cultural Nights', date: 'Monthly', desc: 'Dance, music, and traditional performances', icon: '🎵' },
              { title: 'Business Networking', date: 'Quarterly', desc: 'Connect with Ghanaian entrepreneurs & professionals', icon: '💼' },
            ].map((event, i) => (
              <div key={i} className="card-lg flex-shrink-0 w-96 group">
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gold-400 transition">{event.title}</h3>
                <p className="text-gold-400 text-sm font-semibold mb-3">{event.date}</p>
                <p className="text-gray-300">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="glass-lg p-12 text-center animate-section-reveal">
        <h2 className="heading-2 mb-2">Join the GNC Community</h2>
        <p className="text-xl md:text-2xl text-gold-400 font-semibold mb-6">
          Culture, Leadership, Progress.
        </p>
        <p className="body-lg mb-8 max-w-2xl mx-auto">
          Whether you're seeking connections, cultural enrichment, or community support, there's a place for you in GNC.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
            Become a Member
          </Link>
          <Link to="/events" className="btn-secondary inline-flex items-center justify-center gap-2">
            View Events
          </Link>
        </div>
      </section>

      {/* Bottom section divider */}
      <div className="section-divider"></div>
    </div>
  )
}
