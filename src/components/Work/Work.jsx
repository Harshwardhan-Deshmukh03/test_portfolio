import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Work.css';

const experiences = [
  {
    role: 'Program Associate',
    company: 'Wells Fargo',
    location: 'Bengaluru, India',
    period: '2025 – Present',
    description:
      'Working as a developer in Application Secure Data Exchange in the Open Banking domain.',
    tech: ['JAVA', 'Spring Boot', 'React', 'Open Banking', 'Mongo DB'],
    current: true,
  },
  {
    role: 'Technical Lead',
    company: 'DSAI COEP Tech',
    location: 'Pune, India',
    period: '2024 – 2025',
    description:
      'Led DSAI club as AI Lead, managing technical teams, driving AI and LLM-based projects, and organizing sessions on machine learning, NLP, and industrial AI applications.',
    tech: ['AI', 'ML', 'Data Science', 'LLM'],
    current: false,
  },
  {
    role: 'Software Developer',
    company: 'SDS COEP Tech',
    location: 'Pune, India',
    period: '2023 – 2024',
    description:
      'Developed and delivered production-ready, scalable software applications as part of SDS, collaborating with teams to build solutions tailored to industry-grade organizational',
    tech: ['MERN', 'DBMS', 'SQL'],
    current: false,
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <div className="work__container container">
        <motion.div
          className="work__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey and the companies I&apos;ve contributed to
          </p>
        </motion.div>

        <div className="work__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="work__item"
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="work__timeline-dot">
                {exp.current && <span className="work__timeline-pulse" />}
              </div>
              <div className="work__card glass-card">
                <div className="work__card-header">
                  <div>
                    <h3 className="work__role">{exp.role}</h3>
                    <div className="work__company">
                      <FiBriefcase /> {exp.company}
                    </div>
                  </div>
                  {exp.current && <span className="work__badge">Current</span>}
                </div>
                <div className="work__meta">
                  <span><FiCalendar /> {exp.period}</span>
                  <span><FiMapPin /> {exp.location}</span>
                </div>
                <p className="work__description">{exp.description}</p>
                <div className="work__tech">
                  {exp.tech.map((t, idx) => (
                    <span className="work__tech-tag" key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
