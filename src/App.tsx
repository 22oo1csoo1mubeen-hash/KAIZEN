import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar/Navbar';
import Hero from './components/LandingPage/Hero/Hero';
import Dashboard from './components/LandingPage/Dashboard/Dashboard';
import Features from './components/LandingPage/Features/Features';
import WhyKaizen from './components/LandingPage/WhyKaizen/WhyKaizen';
import Footer from './components/LandingPage/Footer/Footer';
import TodayPage from './components/Habits/Today/TodayPage';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <WhyKaizen />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/habits" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
