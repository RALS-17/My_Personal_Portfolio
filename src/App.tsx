import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { useHashNavigation } from './hooks/useHashScroll';
import './App.css';

function App() {
  useHashNavigation();
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
