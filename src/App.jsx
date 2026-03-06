import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Lazy load project pages to reduce initial bundle size
const Project01 = React.lazy(() => import('./pages/Project01'));
const Project02 = React.lazy(() => import('./pages/Project02'));
const Project03 = React.lazy(() => import('./pages/Project03'));
const Project04 = React.lazy(() => import('./pages/Project04'));
const Project05 = React.lazy(() => import('./pages/Project05'));
const Project06 = React.lazy(() => import('./pages/Project06'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full bg-white selection:bg-black selection:text-white">
        <Navbar />
        <Suspense fallback={<div className="w-full h-screen bg-[#F4F4F2] flex items-center justify-center text-gray-400 font-bold tracking-widest text-sm">LOADING...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/1" element={<Project01 />} />
            <Route path="/project/2" element={<Project02 />} />
            <Route path="/project/3" element={<Project03 />} />
            <Route path="/project/4" element={<Project04 />} />
            <Route path="/project/5" element={<Project05 />} />
            <Route path="/project/6" element={<Project06 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
