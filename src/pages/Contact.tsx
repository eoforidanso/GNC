import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    alert('Thank you for your message! We will be in touch soon.')
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-6">Contact Us</h1>
        <p className="body-lg max-w-3xl">
          Get in touch with Ghana National Council Chicago. We'd love to hear from you and help you become part of our community.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="card text-center md:text-left">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Phone size={24} className="text-slate-900" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">(773) XXX-XXXX</p>
              <p className="text-gray-400 text-sm mt-2">Mon-Fri: 9am-5pm CST</p>
            </div>

            <div className="card text-center md:text-left">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Mail size={24} className="text-slate-900" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@gnc-chicago.org</p>
              <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="card text-center md:text-left">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <MapPin size={24} className="text-slate-900" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Chicago, Illinois</p>
              <p className="text-gray-400 text-sm mt-2">Greater Chicagoland Area</p>
            </div>

            <div className="card text-center md:text-left">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Clock size={24} className="text-slate-900" />
              </div>
              <h3 className="font-semibold mb-2">Hours</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon-Fri: 9am - 5pm</p>
                <p>Sat: 10am - 4pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="glass-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
                    placeholder="(773) XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition"
                  >
                    <option value="">Select subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Events & Services</option>
                    <option value="business">Business Directory</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-gold-400 focus:outline-none transition resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              <p className="text-gray-400 text-xs">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <h2 className="heading-2 mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: 'How do I become a member?', a: 'Contact us directly or visit our office. We\'ll guide you through the membership process.' },
            { q: 'What are the membership benefits?', a: 'Members enjoy access to events, services, networking, and cultural programs.' },
            { q: 'How often are events held?', a: 'We host major events like GhanaFest annually, plus monthly and quarterly community gatherings.' },
            { q: 'Can I volunteer with GNC?', a: 'Yes! We welcome volunteers. Contact us to learn about current opportunities.' },
          ].map((faq, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
