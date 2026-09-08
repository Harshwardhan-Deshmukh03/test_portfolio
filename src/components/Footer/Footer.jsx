import { Link } from 'react-scroll';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const footerLinks = [
  { to: 'about', label: 'About' },
  { to: 'work', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Stack' },
  { to: 'contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="home" smooth duration={600} className="footer__logo">
            <span>&lt;/&gt;</span> harsh.dev
          </Link>
          <p>Building scalable software systems.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} smooth duration={600} offset={-84} className="footer__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer__socials">
          <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Harshwardhan Deshmukh</p>
        <Link to="home" smooth duration={600} className="footer__top-link">Back to top <FiArrowUpRight /></Link>
      </div>
    </div>
  </footer>
);

export default Footer;
