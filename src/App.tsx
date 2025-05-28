import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SymptomChecker from './components/SymptomChecker';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Results from './components/Results';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <SymptomChecker />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 