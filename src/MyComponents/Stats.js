import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const facts = [
    {
      stat: "5+",
      desc: "Years of Coding Experience",
    },
    {
      stat: "10+",
      desc: "Projects built",
    },
    {
      stat: "200+",
      desc: "DSA Questions solved",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 210, friction: 100 },
  });

  return (
    <animated.div ref={ref} style={{ ...styles.statsContainer, ...fadeIn }}>
      {facts.map((fact, index) => (
        <div key={index} style={styles.statContainer}>
          <h2 style={styles.statNum}>{fact.stat}</h2>
          <p style={styles.statDesc}>{fact.desc}</p>
        </div>
      ))}
    </animated.div>
  );
};

const styles = {
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "100px 200px 100px",
  },
  statContainer: {
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    border: "2px solid white",
    padding: "10px 20px",
    width: "300px",
    borderRadius: "10px",
    color: "white",
    margin: "0 10px",
  },
  statNum: {
    color: "#e8a410",
    fontSize: "60px",
    margin: "0 20px",
  },
  statDesc: {
    color: "#b1c7c8",
    fontSize: "20px",
  },
};

export default Stats;
