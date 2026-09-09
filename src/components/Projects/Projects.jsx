import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import finsoImage from '../../assets/projects/finso-generated.png';
import qodeImage from '../../assets/projects/qode-lstm-generated.png';
import youtubeAnalyserImage from '../../assets/projects/youtube-analyser-generated.png';
import libraryImage from '../../assets/projects/library-generated-v2.png';
import aqkdImage from '../../assets/projects/aqkd-generated.png';
import imageEngineImage from '../../assets/projects/image-engine-generated.png';
import prepizardImage from '../../assets/projects/prepizard-generated.png';
import './Projects.css';

const projectsData = [
  {
    title: 'FinSo',
    label: 'Personal Finance Platform',
    description: 'A finance platform for transaction management, investment tracking, reporting, SMS automation and spam detection.',
    tech: ['Android', 'Django', 'SQL', 'OCR'],
    category: 'Full Stack',
    github: 'https://github.com/Harshwardhan-Deshmukh03/Binary_Brigade_SGU',
    featured: true,
    code: 'FIN',
    image: finsoImage,
  },
  {
    title: 'QODE-LSTM',
    label: 'Quantum / Deep Learning',
    description: 'A hybrid architecture combining Variational Quantum Circuits, Neural ODEs and Peephole LSTM cells for sequential modelling.',
    tech: ['Qiskit', 'QML', 'Torch'],
    category: 'AI / ML',
    github: 'https://github.com/Harshwardhan-Deshmukh03/QODE-LSTM',
    code: 'QDL',
    image: qodeImage,
  },
  {
    title: 'YouTube Algorithm Analyser',
    label: 'SEO & Data Analytics',
    description: 'A web application that helps sustainability-focused creators improve YouTube SEO through trend and data analysis.',
    tech: ['Flask', 'Analytics', 'Trend Analysis'],
    category: 'Full Stack',
    github: 'https://github.com/Harshwardhan-Deshmukh03/BitBusters',
    code: 'YAA',
    image: youtubeAnalyserImage,
  },
  {
    title: 'Smart Library Management App',
    label: 'Native Android',
    description: 'A native Android application that digitizes end-to-end college library operations.',
    tech: ['Android', 'Firebase', 'Java', 'XML'],
    category: 'Full Stack',
    github: 'https://github.com/Harshwardhan-Deshmukh03/COEP-TECH-LIBRARY',
    code: 'LIB',
    image: libraryImage,
  },
  {
    title: 'Adaptive Quantum Key Distribution',
    label: 'Security Research',
    description: 'An adaptive QKD system combining quantum cryptography, classical post-processing and QNN-based dynamic optimisation.',
    tech: ['Qiskit', 'Protocols', 'QML'],
    category: 'Systems',
    github: 'https://github.com/Harshwardhan-Deshmukh03/AQKD',
    code: 'AQK',
    image: aqkdImage,
  },
  {
    title: 'Image Manipulation Engine',
    label: 'Algorithms / C',
    description: 'A C-based image manipulation engine using a Quadtree as an intermediate representation for image operations.',
    tech: ['C', 'DSA', 'Quadtree'],
    category: 'Systems',
    github: 'https://github.com/Harshwardhan-Deshmukh03/Image-Manipulation-QuadTree',
    code: 'IMG',
    image: imageEngineImage,
  },
  {
    title: 'PrepiZard',
    label: 'Interview Preparation Portal',
    description: 'A developer interview-preparation platform with real-time features and HackerRank integration.',
    tech: ['Python', 'Django', 'SQL', 'WebSockets'],
    category: 'Full Stack',
    github: 'https://github.com/Harshwardhan-Deshmukh03/PrepIzard',
    code: 'PREP',
    image: prepizardImage,
  },
];

const filters = ['All', 'Full Stack', 'AI / ML', 'Systems'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const visibleProjects = useMemo(
    () => filter === 'All' ? projectsData : projectsData.filter((project) => project.category === filter),
    [filter]
  );

  const featuredProject = projectsData.find((project) => project.featured);

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">04 / Selected work</span>
          <div className="projects__heading-row">
            <div>
              <h2 className="section-title">Things I&apos;ve <span className="gradient-text">built.</span></h2>
              <p className="section-subtitle">Side projects across full-stack development, AI, systems and research.</p>
            </div>
            <div className="projects__filters" aria-label="Project filters">
              {filters.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={filter === item ? 'projects__filter projects__filter--active' : 'projects__filter'}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {filter === 'All' && (
          <motion.article
            className="projects__featured"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="projects__featured-visual">
              <img src={featuredProject.image} alt={`${featuredProject.title} project preview`} />
              <span className="projects__visual-label">Featured project</span>
            </div>
            <div className="projects__featured-content">
              <div className="projects__project-meta">
                <span>01 / Featured</span>
                <FiStar />
              </div>
              <p className="projects__project-label">{featuredProject.label}</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <div className="projects__tech">
                {featuredProject.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <a href={featuredProject.github} target="_blank" rel="noreferrer" className="projects__project-link">
                View repository <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        )}

        <div className="projects__grid">
          {visibleProjects.filter((project) => !project.featured || filter !== 'All').map((project, index) => (
            <motion.article
              className="projects__card"
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="projects__card-visual">
                {project.image ? (
                  <img src={project.image} alt="" loading="lazy" />
                ) : (
                  <span>{project.code}</span>
                )}
              </div>
              <div className="projects__card-content">
                <div className="projects__project-meta"><span>{project.category}</span><span>0{index + 2}</span></div>
                <p className="projects__project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projects__tech">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="projects__project-link">
                  GitHub <FiArrowUpRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
