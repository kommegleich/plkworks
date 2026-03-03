import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectGallery from './components/ProjectGallery'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectGallery />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
