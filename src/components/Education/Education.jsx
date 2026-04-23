import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'College of Engineering, Pune',
    location: 'Pune, India',
    period: '2021 – 2025',
    description:
      'Built a strong foundation in software engineering, data structures, system design, and application security while actively working on AI-driven solutions, enterprise applications, and research-oriented projects in fintech and secure systems.',
    honors: 'GPA: 3.7/4.0',
    highlights: ['DSAI Tech Lead', 'Events Head CSI', 'Web Lead Regatta'],
  },
  {
    degree: 'Honors in Data science',
    institution: 'College of Engineering, Pune',
    location: 'Pune, India',
    period: '2024 – 2025',
    description:
      'Focused on machine learning, predictive analytics, and data-driven problem solving with practical experience in OCR automation, financial analysis systems, spam detection models, and intelligent workflow optimization.',
    honors: 'GPA: 3.5/4.0',
    highlights: ['Hackathon winner', 'Honors Program'],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Deogiri College',
    location: 'Aurangabad',
    period: '2019 – 2021',
    description:
      'Developed strong analytical and problem-solving skills with early exposure to programming, mathematics, and logical reasoning, which laid the foundation for pursuing advanced computer science and engineering projects.',
    honors: 'Grade: 96.67%',
    highlights: ['NTSE Scholar', 'MTSE Scholar'],
  },
];

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="education__container container">
        <motion.div
          className="education__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">journey</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            The foundation that shaped my technical expertise
          </p>
        </motion.div>

        <div className="education__grid">
          {educationData.map((edu, i) => (
            <motion.div
              className="education__card glass-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="education__card-accent" />
              <div className="education__card-content">
                <div className="education__card-top">
                  <div className="education__icon-wrap">
                    <FiBookOpen />
                  </div>
                  <div className="education__meta-badges">
                    {edu.honors && (
                      <span className="education__honors">
                        <FiAward /> {edu.honors}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="education__degree">{edu.degree}</h3>
                <div className="education__institution">{edu.institution}</div>

                <div className="education__meta">
                  <span><FiCalendar /> {edu.period}</span>
                  <span><FiMapPin /> {edu.location}</span>
                </div>

                <p className="education__description">{edu.description}</p>

                <div className="education__highlights">
                  {edu.highlights.map((h, idx) => (
                    <span className="education__highlight-tag" key={idx}>{h}</span>
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

export default Education;
