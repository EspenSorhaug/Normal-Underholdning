import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Forside from './pages/Forside'
import HvemErVi from './pages/HvemErVi'
import Impro from './pages/Impro'
import Revy from './pages/Revy'
import Musikal from './pages/Musikal'
import Leieutstyr from './pages/Leieutstyr'
import Video from './pages/Video'
import Kontakt from './pages/Kontakt'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/hvem-er-vi" element={<HvemErVi />} />
          <Route path="/impro" element={<Impro />} />
          <Route path="/revy" element={<Revy />} />
          <Route path="/musikal" element={<Musikal />} />
          <Route path="/leieutstyr" element={<Leieutstyr />} />
          <Route path="/video" element={<Video />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
