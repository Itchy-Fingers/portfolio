import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import Home from './pages/home';
import About from './pages/about';
import Testimonials from './pages/testimonials';
import Projects from './pages/projects';
import Services from './pages/services';
import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import Certification from './pages/certification';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/certification" element={<Certification />} />
                </Routes>   
            </div>

            <div className="container mx-auto px-4 py-8">
            <Footer />
            </div>
        </Router>
    );
}

export default App;