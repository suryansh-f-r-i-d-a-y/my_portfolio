import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectCaseStudy from './components/ProjectCaseStudy';

export type ViewType = 'home' | 'project-1' | 'project-2' | 'project-3';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: ViewType, sectionId?: string | null) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="App">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === 'home' ? (
        <>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Projects onNavigate={handleNavigate} />
          <Contact />
        </>
      ) : (
        <ProjectCaseStudy projectId={currentView} onNavigate={handleNavigate} />
      )}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
