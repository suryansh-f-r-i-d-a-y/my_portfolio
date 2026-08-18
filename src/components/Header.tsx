import React, { useState } from 'react';
import { ViewType } from '../App';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent, sectionId: string | null) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate('home', sectionId);
  };

  return (
    <header className="header">
      <div className="glass">
        <div 
          className="header__content" 
          style={{
            width: '70%',
            margin: 'auto',
            borderRadius: '3.5rem',
            minWidth: '54vh',
            position: 'relative',
            top: '1.5rem',
            height: '6rem'
          }}
        >
          <div className="header__logo-container" onClick={(e) => handleLinkClick(e, null)}>
            <span className="header__logo-sub">suryansh.</span>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <a href="#home" onClick={(e) => handleLinkClick(e, null)} className="header__link"> Home </a>
              </li>
              <li className="header__link-wrapper">
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="header__link">About </a>
              </li>
              <li className="header__link-wrapper">
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="header__link">
                  Projects
                </a>
              </li>
              <li className="header__link-wrapper">
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="header__link"> Contact </a>
              </li>
            </ul>
            <div className="header__main-ham-menu-cont" onClick={toggleMobileMenu}>
              <img 
                src="/assets/svg/ham-menu.svg" 
                alt="hamburger menu" 
                className={`header__main-ham-menu ${isMobileMenuOpen ? 'd-none' : ''}`} 
              />
              <img 
                src="/assets/svg/ham-menu-close.svg" 
                alt="hamburger menu close"
                className={`header__main-ham-menu-close ${!isMobileMenuOpen ? 'd-none' : ''}`} 
              />
            </div>
          </div>
        </div>
        <div 
          className={`header__sm-menu ${isMobileMenuOpen ? 'header__sm-menu--active' : ''}`} 
          style={{ background: 'rgb(18, 19, 22, 0.7)', backdropFilter: 'blur(30px)' }}
        >
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="#home" onClick={(e) => handleLinkClick(e, null)}> Home </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}> About </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}> Projects </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
