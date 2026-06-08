import { Calendar, MapPin } from 'lucide-react'
import dinnerDanceImg from '../assets/images/independence-dinner-dance-2026.jpeg'
import republicDayImg from '../assets/images/independence-celebration-leaders.jpeg'
import galaImg from '../assets/images/formal-event-chandelier.jpeg'
import communityImg from '../assets/images/community-gathering-large.jpeg'
import culturalImg from '../assets/images/cultural-event-red-black.jpeg'
import radioImg1 from '../assets/images/radio-interview-1.jpeg'
import radioImg2 from '../assets/images/radio-interview-2.jpeg'
import asantemanImg1 from '../assets/images/asanteman-popup.avif'
import asantemanImg2 from '../assets/images/asanteman-popup-2.avif'
import flagRaisingImg from '../assets/images/flag-raising.avif'

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
      image: asantemanImg1,
      featured: false
    },
    {
      name: 'Ghana Flag Raising Ceremony',
      date: 'March 6, 2026',
      location: 'Chicago, IL',
      desc: 'Annual flag raising ceremony celebrating Ghana\'s independence, hosted by GNC Chicago.',
      image: flagRaisingImg,
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
                    style={(event as any).objectPosition ? { objectPosition: (event as any).objectPosition } : undefined}
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
            <div key={i} className="card group overflow-hidden">
              {(event as any).image && (
                <div className="-mx-8 -mt-8 mb-6 h-48 overflow-hidden">
                  <img
                    src={(event as any).image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          <div className="glass overflow-hidden group col-span-2 row-span-2">
            <img src={dinnerDanceImg} alt="GNC Independence Dinner Dance 2026" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={galaImg} alt="Formal gala evening" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={communityImg} alt="Community gathering" className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={culturalImg} alt="Cultural celebration" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={radioImg1} alt="Radio interview" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group col-span-2 row-span-2">
            <img src={flagRaisingImg} alt="Flag raising ceremony" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={radioImg2} alt="Radio studio interview" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={asantemanImg1} alt="Asanteman PopUp event" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="glass overflow-hidden group">
            <img src={asantemanImg2} alt="Asanteman PopUp event 2" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
        </div>
      </section>
    </div>
  )
}
