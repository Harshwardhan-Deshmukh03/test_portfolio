import { Link } from 'react-scroll';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="home" smooth duration={600} className="footer__logo">
            <span>HD</span>
            <b>HARSHWARDHAN DESHMUKH</b>
          </Link>
          <p>Built with intention.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {['about:About', 'work:Experience', 'projects:Projects', 'skills:Skills', 'contact:Contact'].map((value) => {
            const [to, label] = value.split(':');
            return (
              <Link key={to} to={to} smooth duration={600} offset={-80}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="footer__socials">
          <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:harshwardhanrdd@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Harshwardhan Deshmukh</span>
        <Link to="home" smooth duration={600}>Back to top <FiArrowUpRight /></Link>
      </div>
    </div>
  </footer>
);

export default Footer;
