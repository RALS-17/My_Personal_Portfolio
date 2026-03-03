import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Footer() {
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal({ threshold: 0.2 });
  const languages = ['TypeScript', 'React', 'HTML', 'CSS'];
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RALS-17',
      icon: Github,
      label: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rey-aldrin-sutare',
      icon: Linkedin,
      label: 'Connect on LinkedIn'
    },
    {
      name: 'Email',
      url: 'mailto:your-email@example.com',
      icon: Mail,
      label: 'Send me an email'
    },
  ];

  return (
    <footer ref={footerRef} className={`footer scroll-reveal scroll-reveal-up ${footerVisible ? 'revealed' : ''}`}>
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-rights">© 2026 Rey Aldrin Sutare • All rights reserved</div>
          <div className="footer-social">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.label}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                  <span className="social-tooltip">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
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
