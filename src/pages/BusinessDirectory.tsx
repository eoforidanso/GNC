import { useState } from 'react'
import { Search, MapPin, Phone, Globe } from 'lucide-react'

export default function BusinessDirectory() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const businesses = [
    // Food & Restaurants
    { name: 'Ghanaian Taste Restaurant', category: 'food', city: 'Chicago', phone: '(773) 555-0100', website: 'ghanaiantaste.com' },
    { name: 'Jollof Rice House', category: 'food', city: 'Chicago', phone: '(773) 555-0101', website: 'jollof-house.com' },
    { name: 'Plantain Express', category: 'food', city: 'Evanston', phone: '(847) 555-0102', website: 'plantainexpress.com' },

    // Healthcare
    { name: 'GNC Health Clinic', category: 'healthcare', city: 'Chicago', phone: '(773) 555-0200', website: 'gnc-health.org' },
    { name: 'Dr. Kwame Wellness Center', category: 'healthcare', city: 'Chicago', phone: '(773) 555-0201', website: 'kwamewellness.com' },
    { name: 'Accra Pharmacy', category: 'healthcare', city: 'Chicago', phone: '(773) 555-0202', website: 'accrapharmacy.com' },

    // Professional Services
    { name: 'Asante Legal Group', category: 'professional', city: 'Chicago', phone: '(773) 555-0300', website: 'asantelegal.com' },
    { name: 'Amma Tax Services', category: 'professional', city: 'Chicago', phone: '(773) 555-0301', website: 'ammatax.com' },
    { name: 'Abena Consulting', category: 'professional', city: 'Oak Park', phone: '(708) 555-0302', website: 'abenaconsulting.com' },

    // Transportation
    { name: 'Accra Cab Service', category: 'transport', city: 'Chicago', phone: '(773) 555-0400', website: 'accracabs.com' },
    { name: 'Ghana Auto Care', category: 'transport', city: 'Chicago', phone: '(773) 555-0401', website: 'ghanautocare.com' },

    // Media & Communications
    { name: 'GhanaVoice Radio', category: 'media', city: 'Chicago', phone: '(773) 555-0500', website: 'ghanavoiceradio.com' },
    { name: 'Ashanti News Online', category: 'media', city: 'Chicago', phone: '(773) 555-0501', website: 'ashantinews.com' },

    // Religious & Cultural
    { name: 'St. Mary\'s Ghanaian Chapel', category: 'religious', city: 'Chicago', phone: '(773) 555-0600', website: 'stmarychapel.org' },
    { name: 'Ghana Cultural Center', category: 'religious', city: 'Chicago', phone: '(773) 555-0601', website: 'ghanacc.org' },
  ]

  const categories = [
    { value: 'all', label: 'All Businesses', icon: '🏢' },
    { value: 'food', label: 'Food & Restaurants', icon: '🍽️' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'professional', label: 'Professional Services', icon: '💼' },
    { value: 'transport', label: 'Transportation', icon: '🚗' },
    { value: 'media', label: 'Media & Communications', icon: '📡' },
    { value: 'religious', label: 'Religious & Cultural', icon: '🙏' },
  ]

  const filtered = selectedCategory === 'all'
    ? businesses
    : businesses.filter(b => b.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">Business Directory</h1>
        <p className="body-lg max-w-3xl">
          Support Ghanaian businesses in Chicago. Find trusted services, restaurants, healthcare providers, and more.
        </p>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-4 text-gold-400" />
          <input
            type="text"
            placeholder="Search businesses, services, or keywords..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-white/10">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-slate-900'
                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <p className="text-gray-400 mb-8">Showing {filtered.length} businesses</p>
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((business, i) => (
            <div key={i} className="card group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-gold-400 transition mb-1">
                    {business.name}
                  </h3>
                  <p className="text-gold-400 text-sm">
                    {categories.find(c => c.value === business.category)?.label}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={16} className="text-gold-400 flex-shrink-0" />
                  <span>{business.city}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Phone size={16} className="text-gold-400 flex-shrink-0" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Globe size={16} className="text-gold-400 flex-shrink-0" />
                  <a href={`https://${business.website}`} className="hover:text-gold-400 transition">
                    {business.website}
                  </a>
                </div>
              </div>

              <button className="btn-ghost w-full text-left">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listing CTA */}
      <section className="glass-lg p-12 text-center">
        <h2 className="heading-3 mb-4">Is Your Business Listed?</h2>
        <p className="text-gray-300 mb-6">
          Join our business directory and reach thousands of community members looking for quality services.
        </p>
        <button className="btn-primary">Add Your Business</button>
      </section>
    </div>
  )
}
