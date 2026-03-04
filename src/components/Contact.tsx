import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHashScroll } from '../hooks/useHashScroll';
import emailjs from '@emailjs/browser';

function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.15 });
  
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useHashScroll('contact');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // EmailJS configuration
      const serviceId = 'service_elpgw0f';
      const templateId = 'template_378uixa';
      const publicKey = '5pCC62HFF0-VISMIU';
      
      const currentTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      
      const templateParams = {
        name: formData.email,
        time: currentTime,
        message: formData.message
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus('success');
      setFormData({ email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title scroll-reveal ${titleVisible ? 'revealed' : ''}`}>📧 Get In Touch</h2>
        <p ref={textRef} className={`contact-text scroll-reveal scroll-reveal-up ${textVisible ? 'revealed' : ''}`}>
          Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        
        <div className="contact-content">
          {/* Social Links - Left Side */}
          <div ref={linksRef} className={`contact-links-section scroll-reveal scroll-reveal-up ${linksVisible ? 'revealed' : ''}`}>
            <h3 className="contact-section-title">Connect With Me</h3>
            <div className="contact-links">
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
                href="https://linkedin.com/in/rey-aldrin-sutare"
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

          {/* Message Form - Right Side */}
          <div ref={formRef} className={`contact-form-section scroll-reveal scroll-reveal-up ${formVisible ? 'revealed' : ''}`}>
            <h3 className="contact-section-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="form-textarea"
                  rows={4}
                />
              </div>
              
              {status === 'success' && (
                <div className="form-status form-status-success">
                  <CheckCircle size={18} />
                  <span>Message sent successfully!</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="form-status form-status-error">
                  <AlertCircle size={18} />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
              
              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
