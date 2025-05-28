import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z"></path>
          </svg>
          <span className="text-xl font-bold text-slate-800">Sağlık Asistanı</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-slate-600 hover:text-primary transition-colors">Özellikler</a>
          <a href="#symptom-checker" className="text-slate-600 hover:text-primary transition-colors">Semptom Kontrolü</a>
          <a href="#how-it-works" className="text-slate-600 hover:text-primary transition-colors">Nasıl Çalışır</a>
          <a href="#faq" className="text-slate-600 hover:text-primary transition-colors">SSS</a>
          <button className="btn-primary">Giriş Yap</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4">
          <div className="container flex flex-col space-y-4">
            <a
              href="#features"
              className="text-slate-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Özellikler
            </a>
            <a
              href="#symptom-checker"
              className="text-slate-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Semptom Kontrolü
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nasıl Çalışır
            </a>
            <a
              href="#faq"
              className="text-slate-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SSS
            </a>
            <button className="btn-primary self-start">Giriş Yap</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 