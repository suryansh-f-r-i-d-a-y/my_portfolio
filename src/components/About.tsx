import React from 'react';

function About() {
  const skills = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Jquery', 
    'GIT', 'C++', 'Java', 'Video editting', 'Photoshop', 'Graphic design'
  ];

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <div className="myimage" style={{ display: 'flex', margin: '5rem' }}>
            <img 
              src="/assets/png/s.png" 
              style={{ height: '30vw', alignItems: 'center', margin: 'auto' }} 
              alt="Suryansh Chauhan Profile" 
            />
          </div>
          <span className="heading-sec__sub">
            Hey my name is suryansh Chauhan , but you can also call me Ansh for short. Friends and family describe me as being just "a little" quirky and curious.
            I love to travel, meet different people, and learn new things every day about the world around me.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hey! It's <strong>Suryansh Chauhan</strong> and I'm a <strong> Frontend Web Developer </strong> studying at Chitkara University.
              </p>

              <p className="about__content-details-para">
                I am Computer Science Engineering student, studying at Chitkara University and a tech enthusiast with a knack
                for learning new technologies. I have good experience with languages like Python,<br /> Java, C++ and front-end web
                development with HTML, CSS,<br /> Javascript, Bootstrap, Jquery.
              </p>
              <br />
              <br />

              <h2 style={{ fontSize: '3rem' }}>Experience</h2>
              <br />
              <br />

              <p className="about__content-details-para">
                I have made multiple web development projects.
              </p>

              <p className="about__content-details-para">
                I also have some knowledge about <strong>video editing and photoshop</strong>, I've done a video editing and graphics design <strong>internship</strong> for 6 months for a digital marketing firm named <strong>Web bila</strong>. You can <strong>contact</strong> me for the same.
              </p>
            </div>
          </div>
          
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skills__skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="education" style={{ marginTop: '20vh', height: '52rem', backgroundColor: '#121316' }}>
        <h2 className="heading heading-sec heading-sec__mb-med" style={{ padding: '4rem' }}>
          <span className="heading-sec__main">Education</span>
          <span className="heading-sec__sub" style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <ul>
              <li><strong>&gt;</strong> Bachelor of Engineering, Computer Science Engineering</li>
              <li><strong>&gt;</strong> Chitkara University &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; 2020-2024</li>
              <li><br /></li>
              <li><strong>&gt;</strong> High School (10 + 2 )&nbsp;&nbsp;&nbsp; Science</li>
              <li><strong>&gt;</strong> USPC Jain Public School, Ludhiana &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 2017-2019</li>
              <li><strong>&gt; 80%</strong></li>
            </ul>
          </span>
        </h2>
      </div>
    </section>
  );
}

export default About;
