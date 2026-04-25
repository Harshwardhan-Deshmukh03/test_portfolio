import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    title: 'Personal Finance Management application',
    description:
      'FinSo is a comprehensive personal finance management application offering features like transaction management, investment tracking, financial reporting, and more. The application also provides SMS automation, spam detection, and various other financial utilities.',
    tech: ['Android', 'Django', 'SQL', 'Graph', 'OCR'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/Binary_Brigade_SGU',
    live: null,
    featured: true,
    color: '#6c63ff',
  },
  {
    title: 'QODE-LSTM',
    description:
      'A hybrid quantum-classical deep learning architecture that fuses Variational Quantum Circuits, Neural ODEs, and Peephole LSTM cells',
    tech: ['Qiskit', 'QML', 'Torch'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/QODE-LSTM',
    live: null,
    featured: false,
    color: '#00d4aa',
  },
  {
    title: 'Youtube Algorithm Analyser',
    description:
      'YouTubeAlgoAnalyser is a web application designed to assist YouTube content creators focused on "Environment and Sustainable development" in improving their SEO strategies.',
    tech: ['Flask', 'Data Analytics', 'Trend Analysis'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/BitBusters',
    live: null,
    featured: false,
    color: '#ff6b9d',
  },
  {
    title: 'Smart Library Management App',
    description:
      'A native Android application that digitizes the end-to-end operations of a college library.',
    tech: ['Android', 'Firebase', 'Java', 'XML'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/COEP-TECH-LIBRARY',
    live: null,
    featured: false,
    color: '#f59e0b',
  },
  {
    title: 'Adaptive Quantum Key Distribution',
    description:
      'Adaptive Quantum Key Distribution (AQKD) system combining quantum cryptography, classical post-processing, and a QNN Machine Learning Model for optimizing security dynamically.',
    tech: ['Qiskit', 'Protocol design', 'QML'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/AQKD',
    live: null,
    featured: false,
    color: '#8b5cf6',
  },
  {
    title: 'Image Manipulation engine',
    description:
      'A high-performance C-based image manipulation engine that uses a Quadtree data structure as the universal intermediate representation for all operations.',
    tech: ['DSA', 'QuadTree', 'C', 'Image-manipulation'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/Image-Manipulation-QuadTree',
    live: null,
    featured: false,
    color: '#06b6d4',
  },
  {
    title: 'PrepiZard: Interview Preparation Portal',
    description:
      'Prepizard is a premium, feature-rich platform designed to empower software developers during their interview preparation.',
    tech: ['Python', 'Django', 'SQL', 'Websockets', 'HackerRank API'],
    github: 'https://github.com/Harshwardhan-Deshmukh03/PrepIzard',
    live: null,
    featured: false,
    color: '#6c63ff',
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="projects__grid">
          {projectsData.map((project, i) => (
            <motion.div
              className={`projects__card glass-card ${project.featured ? 'projects__card--featured' : ''}`}
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="projects__card-accent"
                style={{ background: project.color }}
              />
              <div className="projects__card-content">
                <div className="projects__card-top">
                  <div className="projects__card-folder">
                    {project.featured ? (
                      <FiStar className="projects__star-icon" />
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                  </div>
                  <div className="projects__card-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
                      <FiGithub />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-tech">
                  {project.tech.map((t, idx) => (
                    <span className="projects__tech-tag" key={idx}>{t}</span>
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

export default Projects;
