import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <section className="about section" id="about">
    <div className="about__container container">
      <div className="about__grid">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-label">02 / About</span>
          <h2 className="section-title">A bit about me.</h2>
        </motion.div>
        <motion.div className="about__story" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
          <p className="about__lead">I&apos;m a software engineer interested in systems that sit between software, data and intelligent automation.</p>
          <p>Currently working on secure data exchange systems in the Open Banking space, with a backend-heavy full-stack focus across Java, Spring Boot, React and data platforms.</p>
          <p>I also like exploring AI, OCR, quantum machine learning and research-driven side projects when there is an interesting problem to chase.</p>
        </motion.div>
      </div>
      <div className="about__details">
        <div><span>Currently</span><strong>Software Engineer</strong><b>Wells Fargo · Bengaluru</b></div>
        <div><span>Focus</span><b>Backend Systems</b><b>Open Banking</b><b>AI Applications</b><b>Security</b><b>Full-Stack Development</b></div>
        <div><span>Working style</span><strong>Curious, practical, systems-minded.</strong><b>I care about useful software that survives contact with the real world.</b></div>
      </div>
    </div>
  </section>
);

export default About;
