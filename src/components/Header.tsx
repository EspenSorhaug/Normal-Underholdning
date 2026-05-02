import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Forside' },
  { to: '/hvem-er-vi', label: 'Hvem er vi' },
  { to: '/impro', label: 'Impro' },
  { to: '/revy', label: 'Revy' },
  { to: '/musikal', label: 'Musikal' },
  { to: '/leieutstyr', label: 'Leieutstyr' },
  { to: '/video', label: 'Video' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1A0A05]/95 backdrop-blur border-b border-[#C8102E]/30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="text-[#F0A500] font-bold text-lg tracking-wide uppercase">
          Normal Underholdning
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? 'text-[#F0A500] font-semibold'
                    : 'text-[#A89A90] hover:text-[#F5F5F5]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#F5F5F5] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[#C8102E]/30 bg-[#2D1509]">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-sm border-b border-[#1A0A05] transition-colors ${
                  isActive
                    ? 'text-[#F0A500] font-semibold'
                    : 'text-[#A89A90] hover:text-[#F5F5F5]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
