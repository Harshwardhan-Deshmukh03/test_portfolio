import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import './Education.css';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2019 – 2021',
    description:
      'Specialized in Artificial Intelligence and Software Engineering. Conducted research on distributed systems and published 2 papers. Graduated with distinction.',
    honors: 'GPA: 3.9/4.0',
    highlights: ['AI/ML Specialization', 'Research Assistant', 'Dean\'s List'],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    period: '2015 – 2019',
    description:
      'Strong foundation in data structures, algorithms, and software engineering. Led the university coding club and participated in 5+ hackathons.',
    honors: 'GPA: 3.7/4.0',
    highlights: ['Coding Club President', 'Hackathon Winner', 'Honors Program'],
  },
  {
    degree: 'High School Diploma',
    institution: 'Lincoln High School',
    location: 'San Jose, CA',
    period: '2011 – 2015',
    description:
      'Valedictorian. Early start in programming through AP Computer Science. Built first web application in sophomore year.',
    honors: 'Valedictorian',
    highlights: ['AP Computer Science', 'Math Olympiad', 'Science Fair Winner'],
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
