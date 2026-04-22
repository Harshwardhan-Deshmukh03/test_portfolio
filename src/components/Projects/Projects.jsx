import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce application with real-time inventory management, Stripe payment integration, and an admin dashboard. Handles 1000+ concurrent users.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: '#6c63ff',
  },
  {
    title: 'AI Chat Application',
    description:
      'Real-time chat application powered by AI for smart responses and language translation. Features WebSocket communication and message encryption.',
    tech: ['Next.js', 'OpenAI', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#00d4aa',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics. Inspired by Trello and Notion.',
    tech: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#ff6b9d',
  },
  {
    title: 'Portfolio Generator',
    description:
      'A CLI tool that generates beautiful portfolio websites from a JSON config file. Supports multiple themes and deployment to Vercel/Netlify.',
    tech: ['Node.js', 'EJS', 'CLI', 'CSS'],
    github: 'https://github.com',
    live: null,
    featured: false,
    color: '#f59e0b',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard with 7-day forecasts, location search, and dynamic backgrounds that change based on current weather conditions.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#8b5cf6',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Analytics dashboard that aggregates data from multiple social platforms, providing insights on engagement, reach, and audience growth trends.',
    tech: ['Python', 'Flask', 'React', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com',
    live: null,
    featured: false,
    color: '#06b6d4',
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
