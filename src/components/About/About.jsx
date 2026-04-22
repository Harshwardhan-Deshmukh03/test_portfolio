import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';
import './About.css';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Built' },
  { number: '10+', label: 'Technologies' },
  { number: '5+', label: 'Happy Clients' },
];

const highlights = [
  {
    icon: <FiCode />,
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented code following industry best practices.',
  },
  {
    icon: <FiLayers />,
    title: 'Full Stack',
    description: 'End-to-end development from responsive UIs to robust backend systems.',
  },
  {
    icon: <FiZap />,
    title: 'Performance',
    description: 'Optimizing for speed, accessibility, and exceptional user experience.',
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">reality</span>
          </h2>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about__bio">
              I&apos;m a passionate Full Stack Developer with a love for creating
              elegant solutions to complex problems. My journey in software
              development started with curiosity and has evolved into a deep
              commitment to building impactful digital products.
            </p>
            <p className="about__bio">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or sharing knowledge
              with the developer community. I believe in continuous learning and
              pushing the boundaries of what&apos;s possible with technology.
            </p>

            <div className="about__stats">
              {stats.map((stat, i) => (
                <motion.div
                  className="about__stat"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <span className="about__stat-number gradient-text">{stat.number}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                className="about__highlight glass-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{item.title}</h4>
                  <p className="about__highlight-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
