import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Affiliates from './pages/Affiliates'
import Services from './pages/Services'
import HealthClinic from './pages/HealthClinic'
import Events from './pages/Events'
import Recipes from './pages/Recipes'
import BusinessDirectory from './pages/BusinessDirectory'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename="/GNC">
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-blue-900/20 to-slate-950">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/services" element={<Services />} />
            <Route path="/health-clinic" element={<HealthClinic />} />
            <Route path="/events" element={<Events />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/directory" element={<BusinessDirectory />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
