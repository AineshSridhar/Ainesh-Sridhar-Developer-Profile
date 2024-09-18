import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "VIT Bhopal University, Bhopal, Madhya Pradesh",
      duration: "June 2022 - July  2026",
    },
    {
      degree: "12th Grade",
      school: "N.K. Bagrodia Public School, Dwarka, Delhi",
      duration: "June 2021 - May 2022",
    },
    {
      degree: "10th Grade",
      school: "Amity Global School (IGCSE), Gurgaon, Haryana",
      duration: "June 2019 - May 2020",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 210, friction: 100 },
  });

  const slideIn = useSpring({
    transform: inView ? "translateX(0px)" : "translateX(-100px)",
    config: { mass: 1, tension: 210, friction: 100 },
  });

  return (
    <animated.div ref={ref} style={{ ...styles.aboutSection, ...fadeIn }}>
      <h2 style={styles.title}>About Me</h2>
      <div style={styles.info}>
        <animated.div style={{ ...styles.imgContainer, ...slideIn }}>
          <h2 style={styles.imgName}>AINESH SRIDHAR</h2>
          <img src="url('../../../public/casuals2.png')" alt="AineshSridhar2" style={styles.pic} />
        </animated.div>
        <div style={styles.desc}>
          <p style={styles.brief}>
            Hi, I'm Ainesh Sridhar, a Computer Science student at VIT Bhopal
            University with a CGPA of 9.01. I’m passionate about technology and
            enjoy creating innovative web applications and solving complex
            problems. From building dynamic platforms to exploring machine
            learning, I love using tech to make a difference. In my free time, I
            keep up with the latest trends and embrace new challenges.
          </p>
          {education.map((educ, index) => (
            <div key={index}>
              <div style={styles.educationItem}>
                <div style={styles.textContainer}>
                  <div style={styles.degree}>{educ.degree}</div>
                  <div style={styles.school}>{educ.school}</div>
                </div>
                <div style={styles.duration}>{educ.duration}</div>
              </div>
              <div style={styles.dots}></div>
            </div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default About;

const styles = {
  aboutSection: {
    margin: "70px 200px 0 190px",
  },
  title: {
    margin: "0 0 50px",
    fontSize: "40px",
    color: "#69ff98",
    fontFamily: "Playfair Display, serif",
  },
  info: {
    display: "flex",
    gap: "80px",
  },
  imgContainer: {
    position: "relative",
    marginRight: "20px",
  },
  imgName: {
    margin: "0",
    position: "absolute",
    top: "180px",
    left: "-180px",
    transform: "rotate(-90deg)",
    color: "rgb(255, 255, 255)",
    fontSize: "48px",
    zIndex: "2",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  pic: {
    width: "400px",
    borderRadius: "20px",
    boxShadow: "-10px -10px 15px black",
    zIndex: "1",
  },
  brief: {
    fontSize: "18px",
    color: "#b1c7c8",
    lineHeight: "1.6",
    flex: "1",
    marginBottom: "40px",
  },
  educationItem: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  textContainer: {
    flex: 1,
    paddingRight: "20px",
  },
  degree: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    marginTop: "10px",
  },
  school: {
    fontSize: "14px",
    color: "#b1c7c8",
    marginBottom: "10px",
  },
  dots: {
    flexGrow: 1,
    height: "1px",
    borderBottom: "1px dashed #b1c7c8",
  },
  duration: {
    fontSize: "14px",
    color: "#b1c7c8",
    whiteSpace: "nowrap",
  },
};
