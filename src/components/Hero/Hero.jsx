import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDownCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Hi, I&apos;m <span className="gradient-text">Your Name</span>
            <br />
            Full Stack Developer
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            I craft exceptional digital experiences with modern technologies.
            Passionate about building scalable applications and beautiful user
            interfaces that make an impact.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link to="projects" smooth duration={600} offset={-80} className="hero__btn hero__btn--primary">
              View My Work
            </Link>
            <Link to="contact" smooth duration={600} offset={-80} className="hero__btn hero__btn--secondary">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="Twitter">
              <FiTwitter />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <span className="hero__avatar-text">YN</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <FiArrowDownCircle className="hero__scroll-icon" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
