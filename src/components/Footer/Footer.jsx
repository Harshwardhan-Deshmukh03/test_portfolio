import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import './Footer.css';

const footerLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Work' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <Link to="home" smooth duration={600} className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Portfolio
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
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
