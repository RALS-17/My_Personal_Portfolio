function About() {
  const skills = [
    'React',
    'Python',
    'Flutter (Dart)',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Firebase',
    'MS Office',
    'GoogleColab',
    'API Integration',
    'CSS',
    'HTML',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Web Developer with hands-on experience developing responsive applications using Flutter (Dart),
          React, JavaScript, Python, SQL, and Firebase. Knowledgeable in full-stack development principles,
          cloud-based databases, and efficient data handling workflows. Experienced in data cleaning,
          preparation, and basic analytical techniques to support application functionality and performance.
          Highly adaptable, detail-oriented, and motivated to grow within a professional development
          environment.
        </p>
        <div className="skills">
          <h3 className="skills-title">💻 Technical Skills</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
