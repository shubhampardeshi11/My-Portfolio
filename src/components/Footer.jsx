import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="social-links">
          <motion.a
            href="https://github.com/shubhampardeshi11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shubham-pardeshi-3a456120a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="mailto:shubhampardeshi160@gmail.com"
            whileHover={{ y: -5 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Shubham Pardeshi. All rights reserved.
            <br />
            Built with <span style={{ color: '#e25555' }}>♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;