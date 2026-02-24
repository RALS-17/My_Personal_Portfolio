import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">RALS</div>
        
        {/* Desktop Navigation */}
        <div className={`nav-links ${isMobile ? 'desktop-hidden' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection('certificates')} className="nav-link">
            Certificates
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button 
            className="hamburger-button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Sidebar Menu */}
        <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
          <div className={`sidebar-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <div className="sidebar-logo">RALS</div>
              <button className="sidebar-close" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="sidebar-content">
              <button onClick={() => scrollToSection('about')} className="sidebar-nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="sidebar-nav-link">
                Projects
              </button>
              <button onClick={() => scrollToSection('certificates')} className="sidebar-nav-link">
                Certificates
              </button>
              <button onClick={() => scrollToSection('contact')} className="sidebar-nav-link">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
