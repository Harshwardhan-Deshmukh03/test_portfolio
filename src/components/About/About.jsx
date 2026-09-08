import { motion } from 'framer-motion';
import { FiLayers, FiShield, FiCpu } from 'react-icons/fi';
import './About.css';

const stats = [
  { number: '3+', label: 'Years building' },
  { number: '10+', label: 'Technologies' },
  { number: '7', label: 'Selected projects' },
];

const highlights = [
  {
    number: '01',
    icon: <FiLayers />,
    title: 'Backend systems',
    description: 'Java, Spring Boot, APIs, data exchange and the systems behind production applications.',
  },
  {
    number: '02',
    icon: <FiShield />,
    title: 'Security-minded engineering',
    description: 'Secure data exchange, application security and reliability are part of how I approach system design.',
  },
  {
    number: '03',
    icon: <FiCpu />,
    title: 'AI & intelligent systems',
    description: 'Applied AI, OCR, machine learning, LLM integrations and research-driven experiments.',
  },
];

const About = () => (
  <section className="about section" id="about">
    <div className="about__container container">
      <motion.div
        className="about__intro"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">02 / About</span>
        <h2 className="section-title">I like building things that are <span className="gradient-text">difficult to build.</span></h2>
      </motion.div>

      <div className="about__content">
        <motion.div
          className="about__story"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p>
            I&apos;m a software engineer working on secure data exchange in the Open Banking domain, with a backend-heavy full-stack focus.
          </p>
          <p>
            My work sits across Java and Spring Boot, React, APIs and modern data platforms, while my side projects explore AI, OCR, quantum machine learning and intelligent automation.
          </p>
          <p className="about__story-note">
            I care about systems that are useful in the real world—not just impressive in a demo.
          </p>

          <div className="about__stats">
            {stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__highlights"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {highlights.map((item) => (
            <div className="about__highlight glass-card" key={item.number}>
              <span className="about__highlight-number">{item.number}</span>
              <div className="about__highlight-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
