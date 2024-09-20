import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const initialSkills = [
    { name: 'JavaScript', icon: '🟨', position: 0 },
    { name: 'Python', icon: '🐍', position: 1 }, 
    { name: 'HTML', icon: '🔤', position: 2 },
    { name: 'CSS', icon: '🎨', position: 3 },  
    { name: 'Java', icon: '☕', position: 4 },
    { name: 'React', icon: '⚛️', position: 5 },
    { name: 'Express', icon: '🚂', position: 6 },  
    { name: 'Node', icon: '🌳', position: 7 },     
    { name: 'MySQL', icon: '🐬', position: 8 },      
    { name: 'PostgreSQL', icon: '🦉', position: 9 }, 
    { name: 'PHP', icon: '🐘', position: 10 },  
    { name: 'C++', icon: '⚙️', position: 11 },        
  ];

  const [skills, setSkills] = useState(initialSkills);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 210, friction: 100 },
  });

  const swapSkills = () => {
    const newSkills = [...skills];
    const index1 = Math.floor(Math.random() * newSkills.length);
    const index2 = Math.floor(Math.random() * newSkills.length);

    [newSkills[index1].position, newSkills[index2].position] = [newSkills[index2].position, newSkills[index1].position];

    setSkills(newSkills);
  };

  useEffect(() => {
    const interval = setInterval(swapSkills, 2000);
    return () => clearInterval(interval);
  }, [skills]);

  return (
    <section id="skills">
    <animated.div ref={ref} style={{ ...styles.skillsSection, ...fadeIn }}>
      <h2 style={styles.title}>Skillset</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              ...styles.skillBox,
              transform: `translate(${(skill.position % 6) * 220}px, ${Math.floor(skill.position / 6) * 320}px)`,
            }}
          >
            <span style={styles.icon}>{skill.icon}</span>
            <p style={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </animated.div>
    </section>
  );
};

const styles = {
  skillsSection: {
    padding: '0 50px 50px',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '40px',
    marginBottom: '40px',
    color: '#e8a410',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '1300px',
    height: '625px',
    margin: '0 auto',
  },
  skillBox: {
    width: '200px',
    height: '300px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    border: "2px solid lightblue",
    borderRadius: '100px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.8s ease',
  },
  icon: {
    fontSize: '100px',
  },
  skillName: {
    marginTop: '10px',
    fontSize: '26px',
    fontWeight: 'bold',
    color: 'lightblue',
  },
};

export default Skills;
