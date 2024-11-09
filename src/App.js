import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import all styles
import './styles/main.scss';
import './styles/Navbar.scss';
import './styles/Hero.scss';
import './styles/About.scss';
import './styles/Projects.scss';
import './styles/Skills.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';
import emailjs from '@emailjs/browser';

emailjs.init("05dA7Yv8bVKNf-03m");

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;