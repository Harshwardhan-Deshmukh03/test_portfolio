import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Work.css';

const experiences = [
  {
    role: 'Program Associate',
    company: 'Wells Fargo',
    location: 'Bengaluru, India',
    period: '2025 – Present',
    description: 'Working in Application Secure Data Exchange within the Open Banking domain, building enterprise software with a backend-heavy full-stack focus.',
    tech: ['Java', 'Spring Boot', 'React', 'Open Banking', 'MongoDB'],
    current: true,
  },
  {
    role: 'Technical Lead',
    company: 'DSAI COEP Tech',
    location: 'Pune, India',
    period: '2024 – 2025',
    description: 'Led technical initiatives across AI and LLM projects while coordinating teams and sessions around machine learning, NLP and applied AI.',
    tech: ['AI', 'ML', 'Data Science', 'LLM'],
    current: false,
  },
  {
    role: 'Software Developer',
    company: 'SDS COEP Tech',
    location: 'Pune, India',
    period: '2023 – 2024',
    description: 'Built production-oriented web applications with collaborative development practices and a focus on scalable software delivery.',
    tech: ['MERN', 'DBMS', 'SQL'],
    current: false,
  },
];

const Work = () => (
  <section className="work section" id="work">
    <div className="work__container container">
      <motion.div
        className="work__header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">03 / Experience</span>
        <div className="work__heading-row">
          <h2 className="section-title">Where I&apos;ve <span className="gradient-text">worked.</span></h2>
          <p className="section-subtitle">A concise view of the roles and systems that shaped my engineering practice.</p>
        </div>
      </motion.div>

      <div className="work__timeline">
        {experiences.map((exp, i) => (
          <motion.article
            className={`work__item ${exp.current ? 'work__item--current' : ''}`}
            key={exp.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <div className="work__marker" aria-hidden="true"><span /></div>
            <div className="work__card">
              <div className="work__card-topline">
                <div className="work__role-block">
                  <span className="work__period"><FiCalendar /> {exp.period}</span>
                  <h3>{exp.role}</h3>
                  <div className="work__company"><FiBriefcase /> {exp.company}</div>
                </div>
                {exp.current && <span className="work__current">CURRENT</span>}
              </div>

              <div className="work__location"><FiMapPin /> {exp.location}</div>
              <p className="work__description">{exp.description}</p>

              <div className="work__tech">
                {exp.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
