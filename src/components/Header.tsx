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
    <header className="sticky top-0 z-50 bg-[#1A0A05]/95 backdrop-blur border-b border-[#C8102E]/40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.jpg"
            alt="Normal Underholdning logo"
            className="w-10 h-10 rounded object-cover"
          />
          <span className="text-[#F0A500] font-bold text-base sm:text-lg tracking-wide uppercase">
            Normal Underholdning
          </span>
        </NavLink>

        <nav className="hidden lg:flex gap-1">
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

        <button
          className="lg:hidden text-[#F5F5F5] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-[#C8102E]/30 bg-[#2D1509]">
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
