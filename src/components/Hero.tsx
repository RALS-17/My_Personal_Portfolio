import { useEffect, useState } from 'react';
import profilePic from '../assets/profile.png';

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const firstLine = 'REY ALDRIN';
  const lastLine = 'SUTARE';
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [phase, setPhase] = useState<'first' | 'second' | 'done'>('first');

  useEffect(() => {
    let interval: number | undefined;
    if (phase === 'first') {
      interval = window.setInterval(() => {
        setFirstIndex((i) => {
          if (i < firstLine.length) return i + 1;
          if (interval) window.clearInterval(interval);
          window.setTimeout(() => setPhase('second'), 300);
          return i;
        });
      }, 90);
    } else if (phase === 'second') {
      interval = window.setInterval(() => {
        setLastIndex((i) => {
          if (i < lastLine.length) return i + 1;
          if (interval) window.clearInterval(interval);
          setPhase('done');
          return i;
        });
      }, 90);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [phase, firstLine, lastLine]);

  // Loop after a pause when animation completes
  useEffect(() => {
    if (phase !== 'done') return;
    const t = window.setTimeout(() => {
      setFirstIndex(0);
      setLastIndex(0);
      setPhase('first');
    }, 4000);
    return () => window.clearTimeout(t);
  }, [phase]);

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
              <span className="hero-line hero-line-first">{firstLine.slice(0, firstIndex)}</span>
              <span className="hero-space" aria-hidden="true">&nbsp;</span>
              <span className="hero-line hero-line-last">
                {phase === 'second' || phase === 'done' ? lastLine.slice(0, lastIndex) : ''}
              </span>
            </h1>
          </div>
          <button onClick={scrollToProjects} className="hero-button">
            View Projects
          </button>
          <div className="hero-tags-container">
            <span className="hero-tag-item">Data Analyst</span>
            <span className="hero-tag-item">Web Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
