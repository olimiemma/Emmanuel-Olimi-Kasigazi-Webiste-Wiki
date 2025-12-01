import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TheJourney from './components/TheJourney';
import WorkAndImpact from './components/WorkAndImpact';
import CreativePursuits from './components/CreativePursuits';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Ventures', href: '#work' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-navy-950 min-h-screen text-slate-300 font-sans selection:bg-gold-500 selection:text-white">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-white tracking-tighter hover:text-gold-500 transition-colors">
            EKO<span className="text-gold-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white hover:tracking-wide transition-all duration-300 uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              className="px-4 py-2 border border-gold-500 text-gold-500 text-xs font-bold rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 uppercase tracking-widest"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy-950 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <TheJourney />
        <WorkAndImpact />
        <CreativePursuits />
      </main>

      <Contact />
    </div>
  );
}

export default App;
