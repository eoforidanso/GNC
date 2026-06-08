import { Calendar, ArrowRight } from 'lucide-react'
import radioImg from '../assets/images/radio-interview-wvon.jpeg'
import scholarshipImg from '../assets/images/independence-celebration-group.jpeg'

export default function News() {
  const news = [
    {
      title: 'GNC Leaders Featured on WVON Radio Discussing Community Impact',
      date: 'June 5, 2026',
      excerpt: 'GNC Chicago representatives joined WVON 1690 AM to discuss the Council\'s programs, upcoming GhanaFest plans, and how the community continues to grow stronger together...',
      category: 'Community',
      image: radioImg,
      featured: true
    },
    {
      title: 'GNC Launches Scholarship Program for Youth',
      date: 'June 1, 2026',
      excerpt: 'Ghana National Council announces new scholarship program for high school and college students of Ghanaian descent...',
      category: 'Announcements',
      image: scholarshipImg,
      featured: true
    },
    {
      title: 'Community Health Clinic Expands Services',
      date: 'May 28, 2026',
      excerpt: 'GNC Health Clinic announces expanded hours and new specialty services to better serve the community...',
      category: 'Services',
      featured: false
    },
    {
      title: 'Youth Leadership Program Sees Record Enrollment',
      date: 'May 20, 2026',
      excerpt: 'Over 150 young Ghanaians have registered for this summer\'s leadership development program...',
      category: 'Community',
      featured: false
    },
    {
      title: 'Business Forum: Starting Your Ghanaian Business in Chicago',
      date: 'May 15, 2026',
      excerpt: 'Join us for insights on entrepreneurship, funding, and business growth from successful Ghanaian business owners...',
      category: 'Business',
      featured: false
    },
    {
      title: 'Republic Day Celebration a Great Success',
      date: 'May 10, 2026',
      excerpt: 'Hundreds gathered to celebrate Ghana\'s independence with traditional ceremonies and cultural performances...',
      category: 'Events',
      featured: false
    },
  ]

  const featured = news.filter(n => n.featured)
  const others = news.filter(n => !n.featured)

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">GNC News & Updates</h1>
        <p className="body-lg max-w-3xl">
          Stay informed about important announcements, events, and community updates from Ghana National Council Chicago.
        </p>
      </section>

      {/* Featured Stories */}
      {featured.length > 0 && (
        <section className="py-20">
          <h2 className="heading-3 mb-12">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featured.map((article, i) => (
              <div key={i} className="card-lg group overflow-hidden">
                <div className="-mx-8 -mt-8 mb-6 h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gold-400"></div>
                  <span className="text-sm font-semibold text-gold-400 uppercase">{article.category}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-20">
        <h2 className="heading-3 mb-12">Latest Articles</h2>
        <div className="space-y-4">
          {others.map((article, i) => (
            <div key={i} className="card group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-gold-400 uppercase">{article.category}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-gold-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gold-400 flex-shrink-0 mt-1 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <h2 className="heading-3 mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {['Announcements', 'Events', 'Services', 'Community', 'Business', 'Cultural'].map((cat, i) => (
            <button key={i} className="glass p-4 text-center hover:bg-white/20 transition">
              <p className="font-semibold">{cat}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="glass-lg p-12">
        <div className="text-center">
          <h2 className="heading-3 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest news, event updates, and community announcements delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
