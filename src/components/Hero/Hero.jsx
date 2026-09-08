import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profilePic from '../../assets/profile.jpg';
import './Hero.css';

const RESUME_URL = '/Harshwardhan_Deshmukh_resume.pdf';

const Hero = () => (
  <section className="hero section" id="home">
    <div className="hero__container container">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="hero__eyebrow">
          <span>01 / Software Engineer</span>
          <span className="hero__status"><i /> Currently @ Wells Fargo</span>
        </div>

        <h1 className="hero__title">
          I build <span className="gradient-text">scalable</span><br />
          software systems.
        </h1>

        <p className="hero__description">
          Full-stack engineer focused on backend systems, secure data exchange,
          AI-powered applications, and products that have to work beyond the demo.
        </p>

        <div className="hero__actions">
          <Link to="projects" smooth duration={600} offset={-84} className="hero__btn hero__btn--primary">
            View Projects <FiArrowDownRight />
          </Link>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary">
            Resume <FiArrowUpRight />
          </a>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer" className="hero__social-link">
            <FiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer" className="hero__social-link">
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="hero__visual-label">Bengaluru / India</div>
        <div className="hero__portrait-frame">
          <img src={profilePic} alt="Harshwardhan Deshmukh" className="hero__portrait" />
          <div className="hero__frame-corner hero__frame-corner--tl" />
          <div className="hero__frame-corner hero__frame-corner--br" />
        </div>
        <div className="hero__visual-note">JAVA · SPRING BOOT · REACT · AI</div>
      </motion.div>
    </div>

    <div className="hero__scroll-cue">
      <span>Scroll to explore</span>
      <FiArrowDownRight />
    </div>
  </section>
);

export default Hero;
