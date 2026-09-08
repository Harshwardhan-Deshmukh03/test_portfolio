import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi';
import './Education.css';

const educationData = [
  {
    degree: 'B.Tech — Computer Science',
    institution: 'College of Engineering, Pune',
    period: '2021 – 2025',
    honors: 'GPA: 3.7 / 4.0',
    highlights: ['DSAI Tech Lead', 'Events Head — CSI', 'Web Lead — Regatta'],
  },
  {
    degree: 'Honors in Data Science',
    institution: 'College of Engineering, Pune',
    period: '2024 – 2025',
    honors: 'GPA: 3.5 / 4.0',
    highlights: ['Hackathon winner', 'Honors Program'],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Deogiri College',
    period: '2019 – 2021',
    honors: 'Grade: 96.67%',
    highlights: ['NTSE Scholar', 'MTSE Scholar'],
  },
];

const Education = () => (
  <section className="education section" id="education">
    <div className="education__container container">
      <motion.div
        className="education__header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">06 / Education</span>
        <div className="education__heading-row">
          <h2 className="section-title">The foundation behind the <span className="gradient-text">work.</span></h2>
          <p className="section-subtitle">Kept intentionally compact—the professional work and projects above do the heavier lifting.</p>
        </div>
      </motion.div>

      <div className="education__list">
        {educationData.map((edu, index) => (
          <motion.article
            className="education__item"
            key={edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="education__index">0{index + 1}</div>
            <div className="education__main">
              <div className="education__topline">
                <div>
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
                <span className="education__period"><FiCalendar /> {edu.period}</span>
              </div>
              <div className="education__bottomline">
                <span className="education__honors"><FiAward /> {edu.honors}</span>
                <div className="education__highlights">
                  {edu.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                </div>
              </div>
            </div>
            <FiBookOpen className="education__icon" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
