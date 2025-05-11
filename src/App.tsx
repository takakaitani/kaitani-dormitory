import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Philosophy } from './pages/Philosophy';
// import { DormLife } from './pages/DormLife';
// import { Consultation } from './pages/Consultation';
// import { Application } from './pages/Application';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/life" element={<DormLife />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/application" element={<Application />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;