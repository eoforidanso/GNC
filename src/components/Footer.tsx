import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-sm mt-20 mb-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                <span className="font-bold text-slate-900 text-sm">GNC</span>
              </div>
              <span className="font-semibold">Ghana National Council</span>
            </div>
            <p className="text-gray-400 text-sm">
              Uniting and empowering Ghanaians in the Greater Chicago area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/affiliates" className="hover:text-white transition">Affiliates</Link></li>
              <li><Link to="/directory" className="hover:text-white transition">Business Directory</Link></li>
              <li><Link to="/news" className="hover:text-white transition">News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                <span>(773) XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                <span>info@gnc-chicago.org</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold-400 flex-shrink-0" />
                <span>Chicago, IL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="flex gap-4 mb-4 md:mb-0 justify-center md:justify-start">
            <a href="#" className="glass-sm p-2 hover:bg-white/20 transition">
              <span className="text-gold-400 text-xl">f</span>
            </a>
            <a href="#" className="glass-sm p-2 hover:bg-white/20 transition">
              <span className="text-gold-400 text-xl">𝕏</span>
            </a>
            <a href="#" className="glass-sm p-2 hover:bg-white/20 transition">
              <span className="text-gold-400 text-xl">📷</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 Ghana National Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
