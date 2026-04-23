import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import ResumeModal from '../ResumeModal/ResumeModal';
import './Footer.css';

const footerLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Work' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <Link to="home" smooth duration={600} className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            harsh.dev
            <span className="footer__logo-bracket"> /&gt;</span>
          </Link>

          <nav className="footer__nav">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="footer__nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer__socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <button
              className="footer__social-link"
              onClick={() => setResumeOpen(true)}
              aria-label="Resume"
            >
              <FiFileText />
            </button>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Harshwardhan Deshmukh.
          </p>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </footer>
  );
};

export default Footer;
