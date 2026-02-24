import React, { useState } from 'react';
import { X } from 'lucide-react';
import cert1 from '../assets/certificates/cert1.png';
import cert2 from '../assets/certificates/cert2.png';
import cert3 from '../assets/certificates/cert3.png';
import cert1Pdf from '../assets/certificates/cert1.pdf';
import cert2Pdf from '../assets/certificates/cert2.pdf';
import cert3Pdf from '../assets/certificates/cert3.pdf';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  pdfUrl: string;
}

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'React Developer Certification',
      issuer: 'Issued by: Udemy',
      date: 'Completed: January 2024',
      image: cert1,
      description: 'Advanced React development with hooks, context API, and performance optimization techniques.',
      pdfUrl: cert1Pdf,
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      issuer: 'Issued by: Codecademy',
      date: 'Completed: November 2023',
      image: cert2,
      description: 'Comprehensive full stack development covering frontend, backend, and database management.',
      pdfUrl: cert2Pdf,
    },
    {
      id: 3,
      title: 'JavaScript Mastery',
      issuer: 'Issued by: Coursera',
      date: 'Completed: September 2023',
      image: cert3,
      description: 'Deep dive into JavaScript fundamentals, ES6+, and modern web development practices.',
      pdfUrl: cert3Pdf,
    },
    {
      id: 4,
      title: 'Web Design & UX Principles',
      issuer: 'Issued by: Interaction Design Foundation',
      date: 'Completed: July 2023',
      image: '/certificates/ux-cert.png',
      description: 'User experience design, responsive design, and accessible web development standards.',
      pdfUrl: '/certificates/ux-cert.pdf',
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => setSelectedCertificate(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/300x200?text=' +
                      encodeURIComponent(cert.title);
                  }}
                />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
                <p className="certificate-click-hint">Click to view PDF</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
            >
              <X size={24} />
            </button>
            <h2 className="certificate-modal-title">{selectedCertificate.title}</h2>
            <div className="certificate-pdf-container">
              <iframe
                src={`${selectedCertificate.pdfUrl}#view=FitH`}
                title={selectedCertificate.title}
                className="certificate-pdf-viewer"
              />
            </div>
            <a
              href={selectedCertificate.pdfUrl}
              download
              className="certificate-download-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;