import { motion } from 'framer-motion';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-greeting"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-title"
        >
          SHUBHAM PARDESHI.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-subtitle"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-description"
        >
          I'm a frontend developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
          If you want to create your own amazing websites, hit me up!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-cta"
        >
          <motion.a
            href="#projects"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;