import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiAngular, SiFastapi,
  SiPython, SiSpringboot, SiNodedotjs, SiNextdotjs,
} from 'react-icons/si';
import { TbApi, TbBrain, TbAtom, TbLink } from 'react-icons/tb';
import { FiCpu, FiBox, FiLayers } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';
import './Skills.css';

const skillCategories = [
  {
    title: 'Core',
    description: 'The tools I use most often to build and ship software.',
    skills: [
      { name: 'Java / Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'REST APIs', icon: <TbApi /> },
    ],
  },
  {
    title: 'Systems',
    description: 'Backend and platform concepts I work with across applications.',
    skills: [
      { name: 'Microservices', icon: <FiLayers /> },
      { name: 'API Design', icon: <FiBox /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Angular', icon: <SiAngular /> },
    ],
  },
  {
    title: 'AI / Intelligent Systems',
    description: 'Applied AI work, automation and research experiments.',
    skills: [
      { name: 'AI Agents', icon: <BsRobot /> },
      { name: 'LLM Integrations', icon: <TbBrain /> },
      { name: 'MCP', icon: <FiCpu /> },
    ],
  },
  {
    title: 'Exploring',
    description: 'Areas I’m actively learning through research and side projects.',
    skills: [
      { name: 'Quantum ML', icon: <TbAtom /> },
      { name: 'Blockchain', icon: <TbLink /> },
    ],
  },
];

const Skills = () => (
  <section className="skills section" id="skills">
    <div className="skills__container container">
      <motion.div
        className="skills__header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">05 / Stack</span>
        <div className="skills__heading-row">
          <h2 className="section-title">The tools behind the <span className="gradient-text">work.</span></h2>
          <p className="section-subtitle">No arbitrary skill percentages—just a clearer distinction between core tools, adjacent systems and things I’m exploring.</p>
        </div>
      </motion.div>

      <div className="skills__categories">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            className="skills__category"
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: categoryIndex * 0.05 }}
          >
            <div className="skills__category-heading">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>

            <div className="skills__grid">
              {category.skills.map((skill) => (
                <div className="skills__item" key={skill.name}>
                  <span className="skills__item-icon">{skill.icon}</span>
                  <span className="skills__item-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
