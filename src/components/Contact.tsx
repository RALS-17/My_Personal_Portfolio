import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title scroll-reveal ${titleVisible ? 'revealed' : ''}`}>📧 Get In Touch</h2>
        <p ref={textRef} className={`contact-text scroll-reveal scroll-reveal-up ${textVisible ? 'revealed' : ''}`}>
          Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <div ref={linksRef} className={`contact-links scroll-reveal scroll-reveal-up ${linksVisible ? 'revealed' : ''}`}>
          <a
            href="mailto:reyaldrin17@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={22} />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Email</div>
              <div style={{ fontWeight: 600 }}>reyaldrin17@gmail.com</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rey-aldrin-sutare-5165713b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>LinkedIn</div>
              <div style={{ fontWeight: 600 }}>Connect with me</div>
            </div>
          </a>
          <a
            href="https://github.com/RALS-17"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>GitHub</div>
              <div style={{ fontWeight: 600 }}>Check my projects</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
