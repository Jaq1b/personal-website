import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Credentials from './components/Credentials'
import Projects from './components/Projects'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1)
  )

  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'credentials', label: 'Credentials', path: '/credentials' },
    { id: 'projects', label: 'Projects', path: '/projects' },
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab.id)
    navigate(tab.path)
  }

  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'
  const isCredentialsPage = location.pathname === '/credentials'
  const isProjectsPage = location.pathname === '/projects'
  
  // Get page class based on current route
  const getPageClass = () => {
    if (isHomePage) return 'home-page'
    if (isAboutPage) return 'about-page'
    if (isCredentialsPage) return 'credentials-page'
    if (isProjectsPage) return 'projects-page'
    return ''
  }

  return (
    <div className={`app ${getPageClass()}`}>
      <header className="header">
        <div className="container">
          <div className="logo">
          </div>
          <nav className="nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy;Jack Wember 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

