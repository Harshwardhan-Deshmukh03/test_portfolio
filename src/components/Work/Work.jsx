import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Work.css';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Corp Inc.',
    location: 'San Francisco, CA',
    period: '2023 – Present',
    description:
      'Leading the development of scalable web applications using React, Node.js, and cloud services. Mentoring junior developers and driving engineering best practices across the team.',
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    current: true,
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    period: '2022 – 2023',
    description:
      'Built responsive, accessible user interfaces for enterprise clients. Implemented design systems and improved performance by 40% through code optimization.',
    tech: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS'],
    current: false,
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Hub',
    location: 'Remote',
    period: '2021 – 2022',
    description:
      'Developed features for a SaaS platform serving 10K+ users. Collaborated closely with designers and product managers in an agile environment.',
    tech: ['JavaScript', 'Vue.js', 'Firebase', 'Git'],
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
