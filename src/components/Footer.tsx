import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { name: 'linkedin', icon: '/assets/png/linkedin-ico.png', url: '#' },
    { name: 'github', icon: '/assets/png/github-ico.png', url: 'https://github.com/suryansh-f-r-i-d-a-y' },
    { name: 'twitter', icon: '/assets/png/twitter-ico.png', url: '#' },
    { name: 'youtube', icon: '/assets/png/yt-ico.png', url: '#' },
    { name: 'instagram', icon: '/assets/png/insta-ico.png', url: '#' }
  ];

  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              {socialLinks.map((link, idx) => (
                <a 
                  key={link.name}
                  target="_blank" 
                  rel="noreferrer" 
                  href={link.url}
                >
                  <img 
                    className={`main-footer__icon ${idx === socialLinks.length - 1 ? 'main-footer__icon--mr-none' : ''}`} 
                    src={link.icon} 
                    alt={`${link.name} icon`} 
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Suryansh Chauhan</h4>
            <p className="main-footer__short-desc">
              For projects or Internship offers you can contact me through my social media handles too, I am active there. Thank you!
              <br />
              <br />
              Email: suryansh2465.be20@chitkara.edu.in
              <br />
              Mobile: 8437109265
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2022. Made by{' '}
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
            @suryansh-f-r-i-d-a-y
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
