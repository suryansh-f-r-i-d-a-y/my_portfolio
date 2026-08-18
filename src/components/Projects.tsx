import React from 'react';
import { ViewType } from '../App';

interface ProjectsProps {
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

interface Project {
  id: ViewType;
  title: string;
  name: string;
  image: string;
  desc: string;
  githubLink: string;
}

function Projects({ onNavigate }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Project 1',
      name: 'something.com',
      image: '/assets/png/project 1.png',
      desc: 'It is a website dealing with a wide variety of premium products. The idea behind this project was to create a minimal yet beautiful website.',
      githubLink: 'https://github.com/suryansh-f-r-i-d-a-y/something.com'
    },
    {
      id: 'project-2',
      title: 'Project 2',
      name: 'OnePlus website clone',
      image: '/assets/png/project 2.png',
      desc: 'This is a replica of OnePlus official website, with some personal designs and animations. This website is made mostly using bootstrap.',
      githubLink: 'https://github.com/suryansh-f-r-i-d-a-y/ST-3'
    }
  ];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Projects that I have done in the past. And have collected a fair amount of experience in HTML, CSS, Bootstrap, Javascript. Some of my projects are listed below. You can refer to my Github profile to check out my projects.
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((project) => (
            <div key={project.id} className="projects__row">
              <div className="projects__row-img-cont">
                <img 
                  src={project.image} 
                  style={{ border: '2px solid rgba(18,19,22,0.6)' }} 
                  alt={`${project.name} Screenshot`} 
                  className="projects__row-img"
                  loading="lazy" 
                />
              </div>
              <div 
                className="projects__row-content" 
                style={{
                  background: 'rgba(18,19,22,0.2)',
                  backdropFilter: 'blur(30px)',
                  padding: '14px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  borderRadius: '1rem',
                }}
              >
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p className="projects__row-content-desc">
                  <strong>{project.name}, </strong>{project.desc}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <a 
                    href={project.githubLink} 
                    className="btn btn--med btn--theme dynamicBgClr" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    GitHub Code
                  </a>
                  <button 
                    onClick={() => onNavigate(project.id)} 
                    className="btn btn--med btn--theme-inv dynamicBgClr"
                    style={{ cursor: 'pointer' }}
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
