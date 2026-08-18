import React from 'react';
import { ViewType } from '../App';

interface ProjectCaseStudyProps {
  projectId: ViewType;
  onNavigate: (view: ViewType, sectionId?: string | null) => void;
}

interface ProjectData {
  title: string;
  name: string;
  desc: string;
  image: string;
  overview1: string;
  overview2: string;
  tools: string[];
  liveLink: string;
  codeLink: string;
}

const projectsData: Record<string, ProjectData> = {
  'project-1': {
    title: 'Project 1',
    name: 'something.com',
    desc: 'It is a website dealing with a wide variety of premium products. The idea behind this project was to create a minimal yet beautiful website.',
    image: '/assets/png/project 1.png',
    overview1: 'something.com is an e-commerce platform designed to showcase and sell premium lifestyle products with a clean and modern user interface. The primary objective was to deliver a frictionless shopping experience by utilizing clean aesthetics, intuitive navigation, and quick product access.',
    overview2: 'During the development of this project, I gained extensive experience in structural markup, CSS layout paradigms, and responsive design systems. The site incorporates high-quality imagery and custom animations that enhance user engagement and visual appeal.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT'],
    liveLink: 'https://github.com/suryansh-f-r-i-d-a-y/something.com',
    codeLink: 'https://github.com/suryansh-f-r-i-d-a-y/something.com'
  },
  'project-2': {
    title: 'Project 2',
    name: 'OnePlus Website Clone',
    desc: 'This is a replica of OnePlus official website, with some personal designs and animations. This website is made mostly using bootstrap.',
    image: '/assets/png/project 2.png',
    overview1: 'This project is a detailed clone of the OnePlus official landing and product pages. It features pixel-perfect layout replication, interactive sliders, custom hover effects, and fully responsive layouts that adapt cleanly across devices.',
    overview2: 'Building this clone allowed me to master CSS frameworks like Bootstrap, utility class structures, responsive grids, and advanced DOM manipulation for handling dynamic product views and custom interactive components.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'GIT'],
    liveLink: 'https://github.com/suryansh-f-r-i-d-a-y/ST-3',
    codeLink: 'https://github.com/suryansh-f-r-i-d-a-y/ST-3'
  },
  'project-3': {
    title: 'Project 3',
    name: 'Case Study of Project 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in numquam incidunt earum quaerat cum fuga, atque similique natus nobis sit.',
    image: '/assets/jpeg/project-mockup-example.jpeg',
    overview1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    overview2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem?',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Shopify', 'Wordpress', 'Google ADS', 'Facebook Ads', 'Android', 'IOS'],
    liveLink: '#',
    codeLink: '#'
  }
};

function ProjectCaseStudy({ projectId, onNavigate }: ProjectCaseStudyProps) {
  const project = projectsData[projectId] || projectsData['project-1'];

  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{project.desc}</p>
          </div>
          <div className="project-cs-hero__cta" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <a href={project.liveLink} className="btn btn--bg" target="_blank" rel="noreferrer">
              Live Link
            </a>
            <button 
              onClick={() => onNavigate('home')} 
              className="btn btn--bg" 
              style={{ background: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer' }}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
      
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={project.image}
                alt={`${project.name} mockup`}
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>
                <p className="project-details__desc-para">{project.overview1}</p>
                <p className="project-details__desc-para">{project.overview2}</p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {project.tools.map((tool, index) => (
                    <div key={index} className="skills__skill">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href={project.liveLink}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href={project.codeLink}
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCaseStudy;
