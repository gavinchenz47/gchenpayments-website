import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">Gavin Chen</div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a></li>
          <li><a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;