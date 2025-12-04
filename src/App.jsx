
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Service_CADEngineering from './pages/Service_CADEngineering';
import Service_LaserCutting from './pages/Service_LaserCutting';
import Service_ProductDevelopment from './pages/Service_ProductDevelopment';
import Service_WebDevelopment from './pages/Service_WebDevelopment';
import Service_3DVisualization from './pages/Service_Visualization3D';
import Service_3DPrinting from './pages/Service_3DPrinting';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Careers from './pages/Careers';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="bg-background-light font-display text-slate-800">
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/services/cad-engineering" element={<Service_CADEngineering />} />
          <Route path="/services/laser-cutting" element={<Service_LaserCutting />} />
          <Route path="/services/product-development" element={<Service_ProductDevelopment />} />
          <Route path="/services/web-development" element={<Service_WebDevelopment />} />
          <Route path="/services/3d-visualization" element={<Service_3DVisualization />} />
          <Route path="/services/3d-printing" element={<Service_3DPrinting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
