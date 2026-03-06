import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Project01 from './pages/Project01';
import Project02 from './pages/Project02';
import Project03 from './pages/Project03';
import Project04 from './pages/Project04';
import Project05 from './pages/Project05';
import Project06 from './pages/Project06';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full bg-white selection:bg-black selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/1" element={<Project01 />} />
          <Route path="/project/2" element={<Project02 />} />
          <Route path="/project/3" element={<Project03 />} />
          <Route path="/project/4" element={<Project04 />} />
          <Route path="/project/5" element={<Project05 />} />
          <Route path="/project/6" element={<Project06 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
