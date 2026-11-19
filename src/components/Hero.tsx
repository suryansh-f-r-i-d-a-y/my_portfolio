import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

function Hero({ onNavigate }: HeroProps) {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hey, My name is<br /> Suryansh Chauhan
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I spend my days writing clean code and shipping scalable web applications. Welcome to my workspace.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="#projects" onClick={handleCtaClick} className="btn btn--bg">Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
