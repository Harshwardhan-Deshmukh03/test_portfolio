import { useState, useEffect } from 'react';
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
    title: 'Web Development',
    skills: [
      { name: 'React', icon: <SiReact />, level: 90, color: '#61DAFB' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 82, color: '#3178C6' },
      { name: 'REST APIs', icon: <TbApi />, level: 88, color: '#00D4AA' },
      { name: 'Angular', icon: <SiAngular />, level: 75, color: '#DD0031' },
    ],
  },
  {
    title: 'Backend & Systems',
    skills: [
      { name: 'Java (Spring Boot)', icon: <SiSpringboot />, level: 85, color: '#6DB33F' },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 83, color: '#339933' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 78, color: '#ffffff' },
      { name: 'Microservices', icon: <FiLayers />, level: 80, color: '#8B5CF6' },
      { name: 'FastAPI', icon: <SiFastapi />, level: 78, color: '#009688' },
      { name: 'API Design', icon: <FiBox />, level: 82, color: '#FF6B9D' },
    ],
  },
  {
    title: 'AI & Intelligent Systems',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 88, color: '#3776AB' },
      { name: 'AI Agents', icon: <BsRobot />, level: 80, color: '#6C63FF' },
      { name: 'LLM Integrations', icon: <TbBrain />, level: 78, color: '#FF9F43' },
      { name: 'MCP', icon: <FiCpu />, level: 72, color: '#00D4AA' },
    ],
  },
  {
    title: 'Exploration',
    skills: [
      { name: 'Quantum ML', icon: <TbAtom />, level: 65, color: '#A855F7' },
      { name: 'Blockchain', icon: <TbLink />, level: 60, color: '#F59E0B' },
    ],
  },
];

// Each row starts at a different offset so the glows are staggered:
// Row 0 → starts at skill 0, Row 1 → starts at skill 1, Row 2 → starts at skill 2, etc.
const initialOffsets = skillCategories.map((_, i) => i);

const CYCLE_INTERVAL = 3600; // 3x slower than the original 1200ms

const Skills = () => {
  // One active index per category row
  const [activeIndices, setActiveIndices] = useState(() =>
    skillCategories.map((cat, i) => initialOffsets[i] % cat.skills.length)
  );
  const [isHovering, setIsHovering] = useState(false);
  const [hoverKey, setHoverKey] = useState(null); // "catIdx-skillIdx"

  // Independent cycling per category row
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndices((prev) =>
        prev.map((idx, catIdx) => (idx + 1) % skillCategories[catIdx].skills.length)
      );
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovering]);

  const isActive = (catIndex, skillIndex) => {
    if (isHovering && hoverKey) return hoverKey === `${catIndex}-${skillIndex}`;
    return activeIndices[catIndex] === skillIndex;
  };

  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills__categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              className="skills__category"
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__grid">
                {category.skills.map((skill, skillIndex) => {
                  const active = isActive(catIndex, skillIndex);

                  return (
                    <motion.div
                      className={`skills__item glass-card ${active ? 'skills__item--active' : ''}`}
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.05 }}
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setHoverKey(`${catIndex}-${skillIndex}`);
                      }}
                      onMouseLeave={() => {
                        setIsHovering(false);
                        setHoverKey(null);
                      }}
                      style={active ? { '--glow-color': skill.color } : {}}
                    >
                      <div className="skills__item-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skills__item-name">{skill.name}</span>
                      <div className="skills__bar">
                        <motion.div
                          className="skills__bar-fill"
                          style={{ background: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
