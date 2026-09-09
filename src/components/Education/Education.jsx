import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  { degree: 'B.Tech — Computer Science', institution: 'College of Engineering, Pune', period: '2021 — 2025', detail: 'GPA 3.7 / 4.0', highlights: ['DSAI Tech Lead', 'Events Head — CSI', 'Web Lead — Regatta'] },
  { degree: 'Honors in Data Science', institution: 'College of Engineering, Pune', period: '2024 — 2025', detail: 'GPA 3.5 / 4.0', highlights: ['Hackathon winner', 'Honors Program'] },
  { degree: 'Higher Secondary Education', institution: 'Deogiri College', period: '2019 — 2021', detail: '96.67%', highlights: ['NTSE Scholar', 'MTSE Scholar'] },
];

const Education = () => (
  <section className="education section" id="education">
    <div className="education__container container">
      <div className="education__header">
        <span className="section-label">06 / Education</span>
        <h2 className="section-title">The foundation.</h2>
      </div>
      <div className="education__list">
        {educationData.map((edu, i) => (
          <motion.article className="education__item" key={edu.degree} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            <span className="education__index">0{i + 1}</span>
            <div className="education__content">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <span className="education__detail">{edu.detail}</span>
              <div className="education__highlights">
                {edu.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
            <time>{edu.period}</time>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
