import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

function Hero({ onNavigate }: HeroProps) {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home', 'projects');
  };

  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hey, My name is<br /> Suryansh Chauhan
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            i am a tech enthusiast studying at Chitkara University, with career interests in web dev, software devlopmen and content creation.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="#projects" onClick={handleCtaClick} className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;
