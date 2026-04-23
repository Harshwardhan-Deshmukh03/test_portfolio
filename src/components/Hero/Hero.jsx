import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText, FiArrowDownCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profilePic from '../../assets/profile.jpg';
import ResumeModal from '../ResumeModal/ResumeModal';
import './Hero.css';

const roles = ['Full Stack Developer', 'Backend Engineer', 'AI Systems Builder'];

const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 60, pauseDuration = 1800) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
};

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const typedRole = useTypewriter(roles);

  return (
    <section className="hero section" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Hi, I&apos;m <span className="gradient-text">Deshmukh Harshwardhan</span>
            <br />
            <span className="hero__typed-role">
              {typedRole}
              <span className="hero__cursor">|</span>
            </span>
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
            <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <button
              className="hero__social-link"
              onClick={() => setResumeOpen(true)}
              aria-label="Resume"
            >
              <FiFileText />
            </button>
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
            <div className="hero__avatar-glow" />
            <div className="hero__avatar">
              <img src={profilePic} alt="Harshwardhan Deshmukh" className="hero__avatar-img" />
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

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Hero;
