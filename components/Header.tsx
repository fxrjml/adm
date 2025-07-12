import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#booking', label: 'Booking' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-2xl font-black tracking-tighter text-amber-400">
          admaperture
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
             <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-medium">
                {link.label}
             </a>
          ))}
        </nav>
        <button className="md:hidden text-slate-200 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm py-4">
            <nav className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                   <a key={link.href} href={link.href} className="text-slate-200 hover:text-amber-400 transition-colors duration-300 font-semibold text-lg" onClick={(e) => handleLinkClick(e, link.href)}>
                      {link.label}
                   </a>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;