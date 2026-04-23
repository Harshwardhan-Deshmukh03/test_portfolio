import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiNextdotjs, SiFigma, SiVercel, SiRedux, SiGraphql,
  SiFirebase
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact />, level: 90, color: '#61DAFB' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 78, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
      { name: 'Redux', icon: <SiRedux />, level: 75, color: '#764ABC' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
      { name: 'Python', icon: <SiPython />, level: 82, color: '#3776AB' },
      { name: 'GraphQL', icon: <SiGraphql />, level: 70, color: '#E10098' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, color: '#4169E1' },
      { name: 'Firebase', icon: <SiFirebase />, level: 78, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' },
      { name: 'Docker', icon: <SiDocker />, level: 72, color: '#2496ED' },
      { name: 'Vercel', icon: <SiVercel />, level: 68, color: '#ffffff' },
      { name: 'Figma', icon: <SiFigma />, level: 75, color: '#F24E1E' },
    ],
  },
];

// Build a flat list of all skill indices for auto-cycling
const allSkillIndices = [];
skillCategories.forEach((cat, catIdx) => {
  cat.skills.forEach((_, skillIdx) => {
    allSkillIndices.push({ catIdx, skillIdx });
  });
});

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0); // index into allSkillIndices
  const [isHovering, setIsHovering] = useState(false);
  const [hoverKey, setHoverKey] = useState(null); // "catIdx-skillIdx"

  // Auto-cycle when not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allSkillIndices.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovering]);

  const getActiveKey = useCallback(() => {
    if (isHovering && hoverKey) return hoverKey;
    const { catIdx, skillIdx } = allSkillIndices[activeIndex];
    return `${catIdx}-${skillIdx}`;
  }, [isHovering, hoverKey, activeIndex]);

  const currentActiveKey = getActiveKey();

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
                  const itemKey = `${catIndex}-${skillIndex}`;
                  const isActive = currentActiveKey === itemKey;

                  return (
                    <motion.div
                      className={`skills__item glass-card ${isActive ? 'skills__item--active' : ''}`}
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.05 }}
                      onMouseEnter={() => {
                        setIsHovering(true);
                        setHoverKey(itemKey);
                      }}
                      onMouseLeave={() => {
                        setIsHovering(false);
                        setHoverKey(null);
                      }}
                      style={isActive ? { '--glow-color': skill.color } : {}}
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
