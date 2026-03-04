import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHashScroll } from '../hooks/useHashScroll';
import cert1 from '../assets/certificates/cert1.png';
import cert2 from '../assets/certificates/cert2.png';
import cert3 from '../assets/certificates/cert3.png';
import cert4 from '../assets/certificates/cert4.png';
import cert5 from '../assets/certificates/cert5.png';
import cert6 from '../assets/certificates/cert6.png';
import cert7 from '../assets/certificates/cert7.png';
import cert8 from '../assets/certificates/cert8.jpg';
import cert9 from '../assets/certificates/cert9.jpg';
import cert10 from '../assets/certificates/cert10.jpg';
import cert11 from '../assets/certificates/cert11.jpg';
import cert12 from '../assets/certificates/cert12.png';
import cert13 from '../assets/certificates/cert13.png';
import cert1Pdf from '../assets/certificates/computer-hardware-basics.pdf';
import cert2Pdf from '../assets/certificates/data-analytics-essentials.pdf';
import cert3Pdf from '../assets/certificates/apply-ai-update-resume.pdf';
import cert4Pdf from '../assets/certificates/ccna-introduction-to-networks.pdf';
import cert5Pdf from '../assets/certificates/jcps-membership.pdf';
import cert6Pdf from '../assets/certificates/blockchain-fundamentals-applications.pdf';
import cert7Pdf from '../assets/certificates/ai-research-practice.pdf';
import cert8Pdf from '../assets/certificates/national-robotics-competition-2020.pdf';
import cert9Pdf from '../assets/certificates/bitcon-2024.pdf';
import cert10Pdf from '../assets/certificates/robotics-resource-speaker-2022.pdf';
import cert11Pdf from '../assets/certificates/robotics-training-participation-2022.pdf';
import cert12Pdf from '../assets/certificates/introduction-to-data-science.pdf';
import cert13Pdf from '../assets/certificates/exploring-iot-cisco-packet-tracer.pdf';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  pdfUrl: string;
  sortDate: string;
}

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [zoomPercent, setZoomPercent] = useState<number>(100);
  const [showAll, setShowAll] = useState<boolean>(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  
  useHashScroll('certificates');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          } else {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[idx] = false;
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.certificate-card');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAll]);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Computer Hardware Basics',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert1,
      description: 'Foundational knowledge of computer hardware components including CPUs, RAM, storage devices, motherboards, and peripherals, as well as basic troubleshooting and system assembly skills.',
      pdfUrl: cert1Pdf,
      sortDate: '2026-02-28',
    },
    {
      id: 2,
      title: 'Data Analytics Essentials',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert2,
      description: 'Introduction to data analytics concepts including data collection, cleaning, visualization, and interpretation using analytical tools to support data-driven decision-making.',
      pdfUrl: cert2Pdf,
      sortDate: '2026-03-15',
    },
    {
      id: 3,
      title: 'Apply AI: Update Your Resume',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 2026',
      image: cert3,
      description: 'Practical application of artificial intelligence tools to enhance resume writing, optimize professional profiles, and tailor applications for improved career opportunities.',
      pdfUrl: cert3Pdf,
      sortDate: '2026-01-25',
    },
    {
      id: 4,
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: January 2024',
      image: cert4,
      description: 'Comprehensive introduction to networking fundamentals including network protocols, IP addressing, routing and switching concepts, network security basics, and configuration of Cisco networking devices.',
      pdfUrl: cert4Pdf,
      sortDate: '2024-01-15',
    },
    {
      id: 5,
      title: 'JCPS Membership',
      issuer: 'Issued by: Philippine Computer Society (PCS)',
      date: 'Completed: Year 2024-2025',
      image: cert5,
      description: 'Official recognition as a bona fide member of the Junior Philippine Computer Society (JPCS) – BatStateU TNEU Alangilan Chapter, a recognized student chapter under the Philippine Computer Society, entitled to the rights, benefits, and privileges of national membership.',
      pdfUrl: cert5Pdf,
      sortDate: '2025-12-31',
    },
    {
      id: 6,
      title: 'Blockchain Fundamentals and Applications',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: November 2025',
      image: cert6,
      description: 'Participation in a university seminar focused on blockchain fundamentals and real-world applications, covering core concepts, emerging technologies, and practical use cases to strengthen knowledge in digital innovation and decentralized systems.',
      pdfUrl: cert6Pdf,
      sortDate: '2025-11-01',
    },
    {
      id: 7,
      title: 'Navigating The Future Through Research and Practice ',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: October 2025',
      image: cert7,
      description: 'Active participation in a virtual seminar exploring the impact of artificial intelligence on skills development, research, and career pathways, with emphasis on navigating the future through research-driven and practical AI applications.',
      pdfUrl: cert7Pdf,
      sortDate: '2025-10-01',
    },
    {
      id: 8,
      title: 'National Robotics Competition 2020 – Mission Harvest Category',
      issuer: 'Issued by: Batangas City Government',
      date: 'Completed: February 2020',
      image: cert8,
      description: 'Recognized as the STAR Award Winner in the Mission Harvest Category during the National Robotics Competition 2020 (Luzon), held at Francisco G. Nepomuceno Memorial High School and presented by the Batangas City Government.',
      pdfUrl: cert8Pdf,
      sortDate: '2020-02-17',
    },
    {
      id: 9,
      title: 'Batangas Information Technology Conference (BITCON) 2024',
      issuer: 'Issued by: Batangas Information Technology Society',
      date: 'Completed: April, 2024',
      image: cert9,
      description: 'Active participation in the Batangas Information Technology Conference 2024 themed "Navigating the Future of Technology: Integration, Innovation, and Security," held at Lipa Academy for Sports, Culture and Arts.',
      pdfUrl: cert9Pdf,
      sortDate: '2024-04-06',
    },
    {
      id: 10,
      title: 'Robotics Training/Workshop Resource Speaker Recognition',
      issuer: 'Issued by: Department of Education – Batangas City Division',
      date: 'Completed: July, 2022',
      image: cert10,
      description: 'Acknowledgement for serving as a resource speaker during the Robotics Training/Workshop at Paharang Integrated School, highlighting dedication to inspiring learners in science and technology through robotics excellence.',
      pdfUrl: cert10Pdf,
      sortDate: '2022-07-22',
    },
    {
      id: 11,
      title: 'Robotics Training/Workshop Participation Certificate',
      issuer: 'Issued by: Department of Education – Batangas City Division',
      date: 'Completed: July, 2022',
      image: cert11,
      description: 'Certificate of participation for the Robotics Training/Workshop themed "Stimulating Learners’ Interest in Science and Technology through Continued Excellence in the Field of Robotics," held at Paharang Integrated School Social Hall.',
      pdfUrl: cert11Pdf,
      sortDate: '2022-07-22',
    },
    {
      id: 12,
      title: 'Introduction to Data Science',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: March, 2026',
      image: cert12,
      description: 'Successfully completed the Introduction to Data Science course offered by Networking Academy through the Cisco Networking Academy program.',
      pdfUrl: cert12Pdf,
      sortDate: '2026-04-02',
    },
    {
      id: 13,
      title: 'Exploring Internet of Things with Cisco Packet Tracer',
      issuer: 'Issued by: DICT-ITU DTC Initiative',
      date: 'Completed: March, 2026',
      image: cert13,
      description: 'Successfully completed the Exploring Internet of Things with Cisco Packet Tracer course offered by DICT-ITU DTC Initiative through the Cisco Networking Academy program.',
      pdfUrl: cert13Pdf,
      sortDate: '2026-03-04',
    },
  ];

  const orderedCertificates = [...certificates].sort((a, b) => 
    new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
  );

  const visibleCertificates = showAll ? orderedCertificates : orderedCertificates.slice(0, 3);



  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title scroll-reveal ${titleVisible ? 'revealed' : ''}`}>Certificates</h2>
        <div className="certificates-grid">
          {visibleCertificates.map((cert, idx) => (
            <div
              key={cert.id}
              className={`certificate-card scroll-reveal-card ${visibleCards[idx] ? 'revealed' : ''}`}
              data-index={idx}
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
                  <span className="certificate-click-hint">Click card to view certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {orderedCertificates.length > 3 && (
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
                  onClick={() => setZoomPercent((z) => Math.max(50, z - 25))}
                  title="Zoom out"
                >
                  <ZoomOut size={18} />
                </button>
                <div className="toolbar-zoom-indicator">{zoomPercent}%</div>
                <button
                  className="toolbar-btn"
                  onClick={() => setZoomPercent((z) => Math.min(300, z + 25))}
                  title="Zoom in"
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>
            <div className="certificate-image-viewer-container">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-image-viewer"
                style={{ transform: `scale(${zoomPercent / 100})`, transformOrigin: 'center', transition: 'transform 0.2s' }}
              />
            </div>
            <div className="certificate-modal-actions">
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
        </div>
      )}
    </section>
  );
}

export default Certificates;
