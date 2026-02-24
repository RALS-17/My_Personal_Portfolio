import { useMemo, useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, ExternalLink } from 'lucide-react';
import cert1 from '../assets/certificates/cert1.png';
import cert2 from '../assets/certificates/cert2.png';
import cert3 from '../assets/certificates/cert3.png';
import cert4 from '../assets/certificates/cert4.png';
import cert5 from '../assets/certificates/cert5.png';
import cert6 from '../assets/certificates/cert6.png';
import cert7 from '../assets/certificates/cert7.png';
import cert1Pdf from '../assets/certificates/cert1.pdf';
import cert2Pdf from '../assets/certificates/cert2.pdf';
import cert3Pdf from '../assets/certificates/cert3.pdf';
import cert4Pdf from '../assets/certificates/cert4.pdf';
import cert5Pdf from '../assets/certificates/cert5.pdf';
import cert6Pdf from '../assets/certificates/cert6.pdf';
import cert7Pdf from '../assets/certificates/cert7.pdf';

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
  const [zoomPercent, setZoomPercent] = useState<number>(110);
  const [fitMode, setFitMode] = useState<'percent' | 'fit-width' | 'fit-page'>('fit-width');
  const [showAll, setShowAll] = useState<boolean>(false);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Computer Hardware Basics',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert1,
      description: 'Foundational knowledge of computer hardware components including CPUs, RAM, storage devices, motherboards, and peripherals, as well as basic troubleshooting and system assembly skills.',
      pdfUrl: cert1Pdf,
    },
    {
      id: 2,
      title: 'Data Analytics Essentials',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert2,
      description: 'Introduction to data analytics concepts including data collection, cleaning, visualization, and interpretation using analytical tools to support data-driven decision-making.',
      pdfUrl: cert2Pdf,
    },
    {
      id: 3,
      title: 'Apply AI: Update Your Resume',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert3,
      description: 'Practical application of artificial intelligence tools to enhance resume writing, optimize professional profiles, and tailor applications for improved career opportunities.',
      pdfUrl: cert3Pdf,
    },
    {
      id: 4,
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: January 2024',
      image: cert4,
      description: 'Comprehensive introduction to networking fundamentals including network protocols, IP addressing, routing and switching concepts, network security basics, and configuration of Cisco networking devices.',
      pdfUrl: cert4Pdf,
    },
    {
      id: 5,
      title: 'JCPS Membership',
      issuer: 'Issued by: Philippine Computer Society (PCS)',
      date: 'Completed: Year 2024-2025',
      image: cert5,
      description: 'Official recognition as a bona fide member of the Junior Philippine Computer Society (JPCS) – BatStateU TNEU Alangilan Chapter, a recognized student chapter under the Philippine Computer Society, entitled to the rights, benefits, and privileges of national membership.',
      pdfUrl: cert5Pdf,
    },
    {
      id: 6,
      title: 'Blockchain Fundamentals and Applications',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: November 2025',
      image: cert6,
      description: 'Participation in a university seminar focused on blockchain fundamentals and real-world applications, covering core concepts, emerging technologies, and practical use cases to strengthen knowledge in digital innovation and decentralized systems.',
      pdfUrl: cert6Pdf,
    },
    {
      id: 7,
      title: 'Navigating The Future Through Research and Practice ',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: October 2025',
      image: cert7,
      description: 'Active participation in a virtual seminar exploring the impact of artificial intelligence on skills development, research, and career pathways, with emphasis on navigating the future through research-driven and practical AI applications.',
      pdfUrl: cert7Pdf,
    },
  ];

  const viewerSrc = useMemo(() => {
    if (!selectedCertificate) return undefined;
    if (fitMode === 'fit-width') return `${selectedCertificate.pdfUrl}#view=FitH`;
    if (fitMode === 'fit-page') return `${selectedCertificate.pdfUrl}#view=Fit`;
    return `${selectedCertificate.pdfUrl}#zoom=${zoomPercent}`;
  }, [selectedCertificate, fitMode, zoomPercent]);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {(showAll ? certificates : certificates.slice(0, 3)).map((cert) => (
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
                <div className="certificate-card-actions">
                  <span className="certificate-click-hint">Click card to view PDF</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {certificates.length > 3 && (
          <div className="certificates-actions">
            <button className="show-more-btn" onClick={() => setShowAll((v) => !v)}>
              {showAll ? 'Show less' : 'Show all certificates'}
            </button>
          </div>
        )}
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
            <div className="certificate-toolbar">
              <div className="toolbar-left">
                <button
                  className="toolbar-btn"
                  onClick={() => {
                    setFitMode('percent');
                    setZoomPercent((z) => Math.max(50, z - 25));
                  }}
                  title="Zoom out"
                >
                  <ZoomOut size={18} />
                </button>
                <div className="toolbar-zoom-indicator">{fitMode === 'percent' ? `${zoomPercent}%` : fitMode === 'fit-width' ? 'Fit width' : 'Fit page'}</div>
                <button
                  className="toolbar-btn"
                  onClick={() => {
                    setFitMode('percent');
                    setZoomPercent((z) => Math.min(300, z + 25));
                  }}
                  title="Zoom in"
                >
                  <ZoomIn size={18} />
                </button>
                <button className="toolbar-btn" onClick={() => setFitMode('fit-width')} title="Fit width">
                  Fit width
                </button>
                <button className="toolbar-btn" onClick={() => setFitMode('fit-page')} title="Fit page">
                  Fit page
                </button>
              </div>
              <div className="toolbar-right">
                <a
                  className="toolbar-link"
                  href={selectedCertificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                  <span>Open</span>
                </a>
                <button className="toolbar-btn" onClick={() => NB_fullscreenToggle()} title="Toggle fullscreen">
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
            <div className="certificate-pdf-container">
              <iframe
                src={viewerSrc}
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

// local helper to toggle fullscreen class
function NB_fullscreenToggle(): void {
  const modal = document.querySelector('.certificate-modal-content');
  if (!modal) return;
  modal.classList.toggle('fullscreen');
}
