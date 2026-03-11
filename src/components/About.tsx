import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHashScroll } from '../hooks/useHashScroll';
import '../styles/Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

function About() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const { ref: sectionRef } = useScrollReveal<HTMLElement>({ threshold: 0.08 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: skillsTitleRef, isVisible: skillsTitleVisible } = useScrollReveal({ threshold: 0.3 });
  
  useHashScroll('about');

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Flutter (Dart)', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Backend & Databases',
      skills: ['Python', 'Node.js', 'Firebase', 'PostgreSQL', 'RESTful APIs', 'Google AppScript'],
    },
    {
      category: 'Data & Analytics',
      skills: ['Google Colab', 'Power BI', 'Visualization','Excel'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Netlify', 'MS Office', 'VS Code', 'API Integration','XAMPP'],
    },
  ];

  useEffect(() => {
    setVisibleSkills(new Array(skillsData.length).fill(false));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          } else {
            setVisibleSkills((prev) => {
              const newVisible = [...prev];
              newVisible[index] = false;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-row');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <h2 ref={titleRef} className={`section-title scroll-reveal ${titleVisible ? 'revealed' : ''}`}>About Me</h2>
        <p ref={textRef} className={`about-text scroll-reveal scroll-reveal-up ${textVisible ? 'revealed' : ''}`}>
          Web Developer with hands-on experience developing responsive applications using Flutter (Dart),
          React, JavaScript, Python, SQL, and Firebase. Knowledgeable in full-stack development principles,
          cloud-based databases, and efficient data handling workflows. Experienced in data cleaning,
          preparation, and analytical techniques to support application functionality and performance.
          Highly adaptable, detail-oriented, and motivated to grow within a professional development
          environment.
        </p>

        <h3 ref={skillsTitleRef} className={`skills-title scroll-reveal scroll-reveal-up ${skillsTitleVisible ? 'revealed' : ''}`} style={{ marginTop: '3rem' }}>💻 Technical Skills</h3>
        <div className="skills-grid">
          {skillsData.map((categoryData, index) => (
            <div
              key={index}
              className={`skill-row ${visibleSkills[index] ? 'visible' : ''}`}
              data-index={index}
            >
              <h3 className="skill-row-title">{categoryData.category}</h3>
              <div className="skills-list">
                {categoryData.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`,
                    }}
                  >
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
