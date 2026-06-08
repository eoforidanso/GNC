import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Affiliates', path: '/affiliates' },
    { name: 'Community Services', path: '/services' },
    { name: 'Health Clinic', path: '/health-clinic' },
    { name: 'GNC News', path: '/news' },
    { name: 'GhanaFest', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="glass-sm sticky top-0 z-50 mb-8">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
              <span className="font-bold text-slate-900">GNC</span>
            </div>
            <span className="font-semibold text-xl hidden sm:inline">Ghana National Council</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="btn-ghost"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden btn-ghost"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="btn-ghost text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
