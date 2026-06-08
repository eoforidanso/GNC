import { Heart, Users, MapPin, Clock } from 'lucide-react'

export default function HealthClinic() {
  const services = [
    { icon: Heart, title: 'Health Screenings', desc: 'Regular health checkups, blood pressure monitoring, and preventive care assessments.' },
    { icon: Users, title: 'Community Support', desc: 'Health education programs, wellness workshops, and support groups for community members.' },
    { icon: MapPin, title: 'Accessible Care', desc: 'Conveniently located clinic serving the Greater Chicago Ghanaian community.' },
    { icon: Clock, title: 'Extended Hours', desc: 'Flexible scheduling to accommodate working professionals and families.' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">Health Clinic</h1>
        <p className="body-lg max-w-3xl">
          The GNC Health Clinic provides accessible, culturally-sensitive health services to support the wellbeing of our community members.
        </p>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Services Grid */}
      <section className="py-20 grid md:grid-cols-2 gap-6 animate-section-reveal">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div key={i} className="card-kente group">
              <div className="card-kente-stripe"></div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Icon size={24} className="text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          )
        })}
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Contact & Hours */}
      <section className="py-20">
        <div className="glass-lg p-12">
          <h2 className="heading-2 mb-12 text-center">Visit Our Clinic</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Chicago, Illinois</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-300">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-300">Saturday: 10am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services Offered</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Blood Pressure Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Health Education Programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Wellness Workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Community Health Screenings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Support Groups</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  <span className="text-gray-300">Preventive Care Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
