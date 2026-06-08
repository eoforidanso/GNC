import { Heart, BookOpen, Users, Stethoscope, Music, Utensils } from 'lucide-react'
import supportImg from '../assets/images/couple-traditional-brick.jpeg'
import networkingImg from '../assets/images/radio-studio-interview.jpeg'
import celebrationImg from '../assets/images/couple-kente-1.jpeg'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Community Health Clinic',
      desc: 'Accessible healthcare services and wellness programs for our community members.',
      items: ['Medical consultations', 'Health screenings', 'Wellness workshops', 'Mental health support']
    },
    {
      icon: BookOpen,
      title: 'Education & Enrichment',
      desc: 'Programs designed to enhance knowledge and preserve cultural traditions.',
      items: ['Native language classes', 'Cooking classes', 'Dance instruction', 'Youth mentoring']
    },
    {
      icon: Heart,
      title: 'Community Support',
      desc: 'Compassionate assistance during important life events.',
      items: ['Funeral assistance', 'Wedding planning', 'Party coordination', 'Graduation support']
    },
    {
      icon: Music,
      title: 'Cultural Celebration',
      desc: 'Vibrant events celebrating Ghanaian heritage and diaspora unity.',
      items: ['GhanaFest', 'Republic Day', 'Regional events', 'Holiday celebrations']
    },
    {
      icon: Users,
      title: 'Social & Professional Networks',
      desc: 'Connect with fellow Ghanaians for friendship and professional growth.',
      items: ['Business networking', 'Social gatherings', 'Professional workshops', 'Young professionals group']
    },
    {
      icon: Utensils,
      title: 'Business & Enterprise',
      desc: 'Support for Ghanaian businesses and entrepreneurs in Chicago.',
      items: ['Business directory', 'Networking events', 'Market research', 'Vendor connections']
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div>
          <h1 className="heading-2 mb-6">Our Services</h1>
          <p className="body-lg max-w-3xl">
            GNC Chicago offers a comprehensive range of services designed to support, enrich, and empower our community members in every aspect of their lives.
          </p>
        </div>
        <div className="glass-lg overflow-hidden h-96 relative">
          <img
            src={supportImg}
            alt="A couple in traditional Ghanaian attire, representing the families GNC serves"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent flex items-end p-8">
            <p className="text-gray-200 font-medium">Supporting families at every milestone</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="card-lg group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon size={24} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gold-400 transition">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Services in Action */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">Our Services in Action</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass overflow-hidden group h-80">
            <img
              src={celebrationImg}
              alt="Members in kente celebrating at a GNC cultural event"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="glass overflow-hidden group h-80">
            <img
              src={networkingImg}
              alt="GNC representatives sharing the community's story on the radio"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">Why Choose GNC Services?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Community-Focused',
              desc: 'Services designed with and for our community members'
            },
            {
              title: 'Culturally Sensitive',
              desc: 'Understanding and respecting Ghanaian traditions and values'
            },
            {
              title: 'Affordable & Accessible',
              desc: 'Quality services at reasonable rates for all community members'
            },
          ].map((highlight, i) => (
            <div key={i} className="glass p-8 text-center">
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-lg p-12 text-center">
        <h2 className="heading-3 mb-4">Ready to Access Our Services?</h2>
        <p className="text-gray-300 mb-6">
          Contact us today to learn more about how we can support you and your family.
        </p>
        <button className="btn-primary">Get Started</button>
      </section>
    </div>
  )
}
