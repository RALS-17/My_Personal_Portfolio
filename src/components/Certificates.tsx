import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHashScroll } from '../hooks/useHashScroll';
import cert1Pdf from '../assets/certificates/computer-hardware-basics.pdf';
import cert2Pdf from '../assets/certificates/data-analytics-essentials.pdf';
import cert3Pdf from '../assets/certificates/apply-ai-update-resume.pdf';
import cert4Pdf from '../assets/certificates/ccna-introduction-to-networks.pdf';
import cert5Pdf from '../assets/certificates/jcps-membership.pdf';
import cert6Pdf from '../assets/certificates/blockchain-fundamentals-applications.pdf';
import cert7Pdf from '../assets/certificates/ai-research-practice.pdf';
import cert9Pdf from '../assets/certificates/bitcon-2024.pdf';
import cert12Pdf from '../assets/certificates/introduction-to-data-science.pdf';
import cert13Pdf from '../assets/certificates/exploring-iot-cisco-packet-tracer.pdf';
import cert14Pdf from '../assets/certificates/Python_Essentials_1_certificate_reyaldrin17-gmail-com_b9475d73-34a4-4b10-84fd-3f99a70dfde2.pdf';
import cert18Pdf from '../assets/certificates/Python_Essentials_2_certificate_reyaldrin17-gmail-com_ee182be4-e783-4782-849f-4abda42e4734.pdf';
import cert15Pdf from '../assets/certificates/NC-2 COMPUTER SYSTEM SERVICING.pdf';
import cert16Pdf from '../assets/certificates/eGOVPH - Certificate.pdf';
import cert17Pdf from '../assets/certificates/Operating_Systems_Basics_certificate_reyaldrin17-gmail-com_6f0fd2b5-bc9b-4a55-adae-f583004b4b1c.pdf';
import cert19Pdf from '../assets/certificates/CSS - RO_00016.pdf';
import cert20Pdf from '../assets/certificates/JavaScript_Essentials_1_certificate_reyaldrin17-gmail-com_56d19ca0-2c06-43b8-90e4-bcb649e86165.pdf';
import cert21Pdf from '../assets/certificates/JavaScript_Essentials_2_certificate_reyaldrin17-gmail-com_8fc9229b-45b3-42a4-af7b-037e07f72560.pdf';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  description: string;
  pdfUrl: string;
  sortDate: string;
}

function Certificates() {
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
    const els = document.querySelectorAll('.certificate-list-item');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAll]);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Computer Hardware Basics',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 23, 2026',
      description: 'Foundational knowledge of computer hardware components including CPUs, RAM, storage devices, motherboards, and peripherals, as well as basic troubleshooting and system assembly skills.',
      pdfUrl: cert1Pdf,
      sortDate: '2026-02-23',
    },
    {
      id: 2,
      title: 'Data Analytics Essentials',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 18, 2026',
      description: 'Introduction to data analytics concepts including data collection, cleaning, visualization, and interpretation using analytical tools to support data-driven decision-making.',
      pdfUrl: cert2Pdf,
      sortDate: '2026-02-18',
    },
    {
      id: 3,
      title: 'Apply AI: Update Your Resume',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: February 3, 2026',
      description: 'Practical application of artificial intelligence tools to enhance resume writing, optimize professional profiles, and tailor applications for improved career opportunities.',
      pdfUrl: cert3Pdf,
      sortDate: '2026-02-03',
    },
    {
      id: 4,
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: September 16, 2025',
      description: 'Comprehensive introduction to networking fundamentals including network protocols, IP addressing, routing and switching concepts, network security basics, and configuration of Cisco networking devices.',
      pdfUrl: cert4Pdf,
      sortDate: '2025-09-16',
    },
    {
      id: 5,
      title: 'JCPS Membership',
      issuer: 'Issued by: Philippine Computer Society (PCS)',
      date: 'Completed: February 15, 2025',
      description: 'Official recognition as a bona fide member of the Junior Philippine Computer Society (JPCS) – BatStateU TNEU Alangilan Chapter, a recognized student chapter under the Philippine Computer Society, entitled to the rights, benefits, and privileges of national membership.',
      pdfUrl: cert5Pdf,
      sortDate: '2025-02-15',
    },
    {
      id: 6,
      title: 'Blockchain Fundamentals and Applications',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: December 15, 2025',
      description: 'Participation in a university seminar focused on blockchain fundamentals and real-world applications, covering core concepts, emerging technologies, and practical use cases to strengthen knowledge in digital innovation and decentralized systems.',
      pdfUrl: cert6Pdf,
      sortDate: '2025-12-15',
    },
    {
      id: 7,
      title: 'Navigating The Future Through Research and Practice ',
      issuer: 'Issued by: Batangas State University',
      date: 'Completed: February 24, 2026',
      description: 'Active participation in a virtual seminar exploring the impact of artificial intelligence on skills development, research, and career pathways, with emphasis on navigating the future through research-driven and practical AI applications.',
      pdfUrl: cert7Pdf,
      sortDate: '2026-02-24',
    },
    {
      id: 9,
      title: 'Batangas Information Technology Conference (BITCON) 2024',
      issuer: 'Issued by: Batangas Information Technology Society',
      date: 'Completed: March 2, 2026',
      description: 'Active participation in the Batangas Information Technology Conference 2024 themed "Navigating the Future of Technology: Integration, Innovation, and Security," held at Lipa Academy for Sports, Culture and Arts.',
      pdfUrl: cert9Pdf,
      sortDate: '2026-03-02',
    },
    {
      id: 12,
      title: 'Introduction to Data Science',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: March 2, 2026',
      description: 'Successfully completed the Introduction to Data Science course offered by Networking Academy through the Cisco Networking Academy program.',
      pdfUrl: cert12Pdf,
      sortDate: '2026-03-02',
    },
    {
      id: 13,
      title: 'Exploring Internet of Things with Cisco Packet Tracer',
      issuer: 'Issued by: DICT-ITU DTC Initiative',
      date: 'Completed: March 4, 2026',
      description: 'Successfully completed the Exploring Internet of Things with Cisco Packet Tracer course offered by DICT-ITU DTC Initiative through the Cisco Networking Academy program.',
      pdfUrl: cert13Pdf,
      sortDate: '2026-03-04',
    },
    {
      id: 14,
      title: 'Python Essentials 1',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: March 5, 2026',
      description: 'Successfully completed Python Essentials 1 course through Cisco Networking Academy, covering fundamental Python programming concepts including syntax, data types, control structures, functions, and basic problem-solving techniques.',
      pdfUrl: cert14Pdf,
      sortDate: '2026-03-05',
    },
    {
      id: 15,
      title: 'NC II Computer System Servicing',
      issuer: 'Issued by: TESDA',
      date: 'Completed: March 9, 2026',
      description: 'National Certification Level II in Computer System Servicing issued by the Technical Education and Skills Development Authority (TESDA), demonstrating competency in installing, configuring, and maintaining computer systems and networks.',
      pdfUrl: cert15Pdf,
      sortDate: '2026-03-09',
    },
    {
      id: 16,
      title: 'eGovPH App',
      issuer: 'Issued by: DICT Calabarzon',
      date: 'Completed: March 2026',
      description: 'Successfully completed training on the eGovPH App, covering digital government services, online transaction systems, and the use of government mobile applications for efficient public service delivery.',
      pdfUrl: cert16Pdf,
      sortDate: '2026-03-10',
    },
    {
      id: 17,
      title: 'Operating Systems Basics',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: March 10, 2026',
      description: 'Successfully completed the Operating Systems Basics course through Cisco Networking Academy, covering fundamental concepts of operating systems including process management, memory management, file systems, and system administration.',
      pdfUrl: cert17Pdf,
      sortDate: '2026-03-10',
    },
    {
      id: 18,
      title: 'Python Essentials 2',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: March 12, 2026',
      description: 'Successfully completed Python Essentials 2 course through Cisco Networking Academy, advancing knowledge in object-oriented programming, modules, packages, file operations, exception handling, and advanced Python programming techniques.',
      pdfUrl: cert18Pdf,
      sortDate: '2026-03-12',
    },
    {
      id: 20,
      title: 'JavaScript Essentials 1',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: April 28, 2026',
      description: 'Completed JavaScript Essentials 1 covering basics of JavaScript including syntax, variables, control flow, and functions.',
      pdfUrl: cert20Pdf,
      sortDate: '2026-04-28',
    },
    {
      id: 21,
      title: 'JavaScript Essentials 2',
      issuer: 'Issued by: Cisco Networking Academy',
      date: 'Completed: April 28, 2026',
      description: 'Completed JavaScript Essentials 2 covering advanced JavaScript topics including DOM manipulation, events, and asynchronous programming.',
      pdfUrl: cert21Pdf,
      sortDate: '2026-04-28',
    },
    {
      id: 19,
      title: 'Hardware and Software Repair Essentials',
      issuer: 'Issued by: DICT Calabarzon - SPARK Program',
      date: 'Completed: March 17, 2026',
      description: 'Successfully completed a 40-hour training on Hardware and Software Repair Essentials covering Hardware Components & Functions, Troubleshooting Hardware Issues, Software Troubleshooting & Repair Mastery, Advanced Troubleshooting & Preventative Maintenance, and Hands-on Training. Additional knowledge areas include Network Fundamentals, Troubleshooting, and Basic Configurations.',
      pdfUrl: cert19Pdf,
      sortDate: '2026-03-17',
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
        <div className="certificates-list">
          {visibleCertificates.map((cert, idx) => (
            <div
              key={cert.id}
              className={`certificate-list-item scroll-reveal-card ${visibleCards[idx] ? 'revealed' : ''}`}
              data-index={idx}
            >
              <div className="certificate-header">
                <h3 className="certificate-list-title">{cert.title}</h3>
              </div>
              <div className="certificate-info">
                <p className="certificate-list-issuer">{cert.issuer}</p>
                <p className="certificate-list-date">{cert.date}</p>
              </div>
              <div className="certificate-download-section">
                <a
                  href={cert.pdfUrl}
                  download
                  className="certificate-download-link"
                >
                  <FileText size={18} />
                  Download PDF
                </a>
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
    </section>
  );
}

export default Certificates;
