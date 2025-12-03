
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Service_CADEngineering from './pages/Service_CADEngineering';
import Service_LaserCutting from './pages/Service_LaserCutting';
import Service_ProductDevelopment from './pages/Service_ProductDevelopment';
import Service_WebDevelopment from './pages/Service_WebDevelopment';
import Service_3DVisualization from './pages/Service_Visualization3D';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/cad-engineering" element={<Service_CADEngineering />} />
          <Route path="/services/laser-cutting" element={<Service_LaserCutting />} />
          <Route path="/services/product-development" element={<Service_ProductDevelopment />} />
          <Route path="/services/web-development" element={<Service_WebDevelopment />} />
          <Route path="/services/3d-visualization" element={<Service_3DVisualization />} />
        </Routes>
        <Footer />
      </div>
    </Router>




    // <div className="min-h-screen flex items-center justify-center bg-black">
    //   <h1 className="text-4xl font-bold text-white underline">
    //     Tailwind is working ✅
    //   </h1>
    // </div>
  );
}

export default App;
