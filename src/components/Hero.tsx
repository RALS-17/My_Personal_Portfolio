import React from 'react';
import profilePic from '../assets/profile.png';

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const name = 'REY ALDRIN SUTARE';
  const characters = name.split('');

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-wrapper">
          <div className="hero-image-container">
            <img 
              src={profilePic}
              alt="Rey Aldrin Sutare Profile" 
              className="hero-profile-pic"
            />
          </div>
          <div className="hero-name-section">
            <h1 className="hero-title">
              {characters.map((char, index) => (
                <span key={index} className="char-animate" style={{ '--char-index': index } as React.CSSProperties}>
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <button onClick={scrollToProjects} className="hero-button">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
