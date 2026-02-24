function Footer() {
  const languages = ['TypeScript', 'React', 'HTML', 'CSS'];
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-rights">© 2026 My Portfolio • All rights reserved</div>
        <div className="footer-languages">
          {languages.map((lang) => (
            <span key={lang} className="tech-tag">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
