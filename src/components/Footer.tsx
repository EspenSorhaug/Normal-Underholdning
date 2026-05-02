import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#C8102E]/30 bg-[#2D1509] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <p className="text-[#F0A500] font-bold uppercase tracking-wide">Normal Underholdning</p>
          <p className="text-[#A89A90] text-sm mt-1">Impro · Revy · Musikal · AV-utleie</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#A89A90]">
          <Link to="/hvem-er-vi" className="hover:text-[#F5F5F5] transition-colors">Hvem er vi</Link>
          <Link to="/impro" className="hover:text-[#F5F5F5] transition-colors">Impro</Link>
          <Link to="/revy" className="hover:text-[#F5F5F5] transition-colors">Revy</Link>
          <Link to="/musikal" className="hover:text-[#F5F5F5] transition-colors">Musikal</Link>
          <Link to="/leieutstyr" className="hover:text-[#F5F5F5] transition-colors">Leieutstyr</Link>
          <Link to="/kontakt" className="hover:text-[#F5F5F5] transition-colors">Kontakt</Link>
        </nav>
      </div>
      <div className="border-t border-[#1A0A05] px-4 py-4 text-center text-xs text-[#A89A90]">
        © {new Date().getFullYear()} Normal Underholdning
      </div>
    </footer>
  )
}
