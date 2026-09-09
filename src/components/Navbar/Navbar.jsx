import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'work', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
];

const RESUME_URL = '/Harshwardhan_Deshmukh_resume.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
      <div className="navbar__container container">
        <Link to="home" smooth duration={600} className="navbar__logo" aria-label="Go to home">
          <span>HD</span>
          <b>HARSHWARDHAN DESHMUKH</b>
        </Link>

        <ul className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} smooth duration={600} offset={-80} spy activeClass="navbar__link--active" className="navbar__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="navbar__resume">
          Resume <FiArrowUpRight />
        </a>

        <button type="button" className="navbar__mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-navigation" className="navbar__mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <div className="navbar__mobile-inner">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth duration={600} offset={-80} className="navbar__mobile-link" onClick={closeMobile}>
                  {link.label}
                </Link>
              ))}
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="navbar__mobile-resume" onClick={closeMobile}>
                Resume <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
