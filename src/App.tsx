import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home.tsx';
import { DormLife } from './pages/DormLife.tsx';
import { Application } from './pages/Application.tsx';
import { Message } from './pages/Message.tsx';
import { Support } from './pages/Support.tsx';
import { Results } from './pages/Results.tsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="min-h-screen bg-white text-gray-900 font-sans">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/message" element={<Message />} />
              <Route path="/about/life" element={<DormLife />} />
              <Route path="/about/support" element={<Support />} />
              <Route path="/results" element={<Results />} />
              <Route path="/application" element={<Application />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;