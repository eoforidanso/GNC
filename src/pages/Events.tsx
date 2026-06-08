import { Calendar, MapPin } from 'lucide-react'
import dinnerDanceImg from '../assets/images/independence-dinner-dance-2026.jpeg'
import republicDayImg from '../assets/images/independence-celebration-leaders.jpeg'
import galaImg from '../assets/images/formal-event-chandelier.jpeg'
import communityImg from '../assets/images/community-gathering-large.jpeg'
import culturalImg from '../assets/images/cultural-event-red-black.jpeg'
import radioImg1 from '../assets/images/radio-interview-1.jpeg'
import radioImg2 from '../assets/images/radio-interview-2.jpeg'

export default function Events() {
  const events = [
    {
      name: 'GhanaFest - 37th Annual',
      date: 'July 25, 2026',
      location: 'Grant Park, Chicago',
      desc: 'The largest celebration of Ghanaian culture in the Midwest. Three days of music, food, dance, and cultural showcase.',
      image: communityImg,
      objectPosition: 'center 35%',
      featured: true
    },
    {
      name: 'Ghana Republic Day Celebration',
      date: 'March 1, 2026',
      location: 'Downtown Chicago Venue',
      desc: 'Commemorate Ghana\'s independence with speeches, performances, and traditional ceremonies.',
      image: republicDayImg,
      featured: true
    },
    {
      name: 'Asanteman Association Homecoming',
      date: 'May 23-24, 2026',
      location: 'Various Locations',
      desc: 'Annual gathering for members of the Asanteman Association featuring cultural events and networking.',
      featured: false
    },
    {
      name: 'Independence Dinner Dance',
      date: 'March 6, 2026',
      location: 'Premier Event Hall',
      desc: 'Evening celebration with dinner, dancing, and live music celebrating Ghanaian independence.',
      featured: false
    },
    {
      name: 'Health & Wellness Day',
      date: 'June 15, 2026',
      location: 'Community Health Clinic',
      desc: 'Free health screenings, wellness workshops, and fitness activities for all community members.',
      featured: false
    },
    {
      name: 'Youth Leadership Summit',
      date: 'August 10-12, 2026',
      location: 'Educational Center',
      desc: 'Three-day summit for young Ghanaians focusing on leadership, entrepreneurship, and cultural pride.',
      featured: false
    },
  ]

  const upcomingEvents = events.filter(e => !e.featured)
  const featuredEvents = events.filter(e => e.featured)

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">Events & Celebrations</h1>
        <p className="body-lg max-w-3xl">
          Join us for vibrant celebrations that bring our community together, celebrate our heritage, and create lasting memories.
        </p>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-20">
          <h2 className="heading-3 mb-12">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredEvents.map((event, i) => (
              <div key={i} className="card-lg group border-l-4 border-gold-400 overflow-hidden">
                <div className="-mx-8 -mt-8 mb-6 h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    style={event.objectPosition ? { objectPosition: event.objectPosition } : undefined}
                  />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 text-xs font-semibold mb-4">
                  Featured Event
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-gold-400 transition">{event.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{event.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{event.desc}</p>
                <button className="btn-primary w-full">Learn More</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-20">
        <h2 className="heading-3 mb-12">More Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="card group">
              <h3 className="font-semibold mb-4 group-hover:text-gold-400 transition">{event.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{event.date}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">{event.location}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Event Highlights */}
      <section className="py-20">
        <h2 className="heading-2 mb-4">Past Event Highlights</h2>
        <p className="body-lg mb-12 max-w-2xl">
          Relive the energy and elegance of our past celebrations — from the Independence Dinner Dance to community galas.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass overflow-hidden group col-span-2 row-span-2 h-full min-h-72">
            <img
              src={dinnerDanceImg}
              alt="GNC Independence Dinner Dance 2026 — Celebrating Ghana at 69"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-36 md:h-full">
            <img
              src={galaImg}
              alt="Formal gala evening with chandelier"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-36 md:h-full">
            <img
              src={communityImg}
              alt="Large community gathering at a GNC event"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-36 md:h-full col-span-2 md:col-span-1">
            <img
              src={culturalImg}
              alt="Cultural celebration in red and black traditional wear"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-36 md:h-full">
            <img
              src={radioImg1}
              alt="GNC leadership on radio interview discussing community"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-36 md:h-full">
            <img
              src={radioImg2}
              alt="Radio studio interview with GNC representatives"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">Event Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: '🎭', title: 'Cultural Events', count: '8+' },
            { emoji: '🏥', title: 'Health & Wellness', count: '4+' },
            { emoji: '📚', title: 'Educational Programs', count: '6+' },
          ].map((cat, i) => (
            <div key={i} className="glass p-8 text-center">
              <div className="text-5xl mb-4">{cat.emoji}</div>
              <h3 className="font-semibold mb-2">{cat.title}</h3>
              <p className="text-gold-400 font-semibold">{cat.count} events yearly</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="glass-lg p-12">
        <div className="text-center">
          <h2 className="heading-3 mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to get updates about upcoming events and community news.
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
