import { motion } from 'framer-motion';
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profilePic from '../../assets/profile.jpg';
import './Hero.css';

const RESUME_URL = '/Harshwardhan_Deshmukh_resume.pdf';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__container container">
      <motion.div className="hero__content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="hero__eyebrow">
          <span>01 / Software Engineer</span>
          <span className="hero__status"><i /> Currently @ Wells Fargo</span>
        </div>
        <h1 className="hero__title">I build systems<br />for complicated <span>problems.</span></h1>
        <p className="hero__description">Software engineer working across backend systems, secure data exchange, AI and full-stack applications.</p>
        <div className="hero__actions">
          <Link to="projects" smooth duration={600} offset={-84} className="hero__btn hero__btn--primary">View My Work <FiArrowDownRight /></Link>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="hero__btn hero__btn--secondary">Download Resume <FiDownload /></a>
        </div>
        <div className="hero__socials">
          <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer"><FiGithub /> GitHub ↗</a>
          <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn ↗</a>
        </div>
      </motion.div>

      <motion.aside className="hero__side" initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
        <div className="hero__portrait-wrap"><img src={profilePic} alt="Harshwardhan Deshmukh" className="hero__portrait" /></div>
        <div className="hero__facts">
          <div><span>Based in</span><strong>Bengaluru, India</strong><small>GMT +5:30</small></div>
          <div><span>Specializes in</span><strong>Java</strong><strong>Spring Boot</strong><strong>React</strong><strong>Python / AI</strong><strong>System Design</strong></div>
        </div>
        <div className="hero__note">Building useful systems.<br />Learning continuously.</div>
      </motion.aside>
    </div>
    <div className="hero__section-index">// 01</div>
  </section>
);

export default Hero;
