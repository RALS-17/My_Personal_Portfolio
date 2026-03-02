import { useEffect, useState } from 'react';
import '../styles/Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

function About() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

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
      skills: ['Data Analysis', 'Google Colab', 'Power BI', 'Visualization','Excel'],
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
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-category');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Web Developer with hands-on experience developing responsive applications using Flutter (Dart),
          React, JavaScript, Python, SQL, and Firebase. Knowledgeable in full-stack development principles,
          cloud-based databases, and efficient data handling workflows. Experienced in data cleaning,
          preparation, and analytical techniques to support application functionality and performance.
          Highly adaptable, detail-oriented, and motivated to grow within a professional development
          environment.
        </p>

        <h3 className="skills-title" style={{ marginTop: '3rem' }}>💻 Technical Skills</h3>
        <div className="skills-grid">
          {skillsData.map((categoryData, index) => (
            <div
              key={index}
              className={`skill-category ${visibleSkills[index] ? 'visible' : ''}`}
              data-index={index}
            >
              <h3 className="skill-category-title">{categoryData.category}</h3>
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
