import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Credentials from './components/Credentials'
import Projects from './components/Projects'
import './App.css'

interface Tab {
  id: string
  label: string
  path: string
}

const tabs: Tab[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'credentials', label: 'Credentials', path: '/credentials' },
  { id: 'projects', label: 'Projects', path: '/projects' },
]

const pageClassMap: Record<string, string> = {
  '/': 'home-page',
  '/about': 'about-page',
  '/credentials': 'credentials-page',
  '/projects': 'projects-page',
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  // Derive active tab directly from URL — never stale
  const activePath = location.pathname.replace(/\/$/, '') || '/'
  const activeTab = tabs.find((t) => t.path === activePath)?.id ?? ''
  const pageClass = pageClassMap[activePath] ?? ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={`app ${pageClass} min-h-screen flex flex-col text-white relative`}>
      <header className="bg-white/10 backdrop-blur-xl sticky top-0 z-[1000] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-end items-center">
          <nav className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`
                  px-6 py-4 border-none bg-transparent text-white/80 text-[0.95rem] font-medium
                  cursor-pointer rounded-xl transition-all duration-300 font-sans
                  hover:text-white hover:bg-white/10
                  ${activeTab === tab.id ? 'text-white bg-white/15' : ''}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 py-16 animate-fadeIn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 text-white/80 text-center py-8 mt-auto text-sm">
        <div className="max-w-[1200px] mx-auto px-8">
          <p>&copy; Jack Wember 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
