'use client' 

import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "VIT Bhopal University, Bhopal, Madhya Pradesh",
    duration: "June 2022 - July 2026",
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

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    config: { mass: 1, tension: 210, friction: 100 },
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-60px)",
    config: { mass: 1, tension: 210, friction: 100 },
  });

  return (
    <section
      id="about"
      className="relative min-h-[60vh] bg-white flex flex-col md:flex-row items-center justify-between px-8 pt-20 pb-12 overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-36 bg-orange-100 rounded-b-full blur-2xl opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-black rounded-full blur-3xl opacity-10 pointer-events-none z-0" />

      {/* Profile Image and Name */}
      <animated.div
        ref={ref}
        style={slideIn}
        className="flex-1 flex flex-col items-center md:items-end justify-center relative z-10"
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <img
            src="/casuals2.png"
            alt="Ainesh Sridhar"
            className="w-[110%] h-[110%] object-cover rounded-3xl shadow-2xl border-4 border-orange-200"
            style={{
              position: "absolute",
              left: "50%",
              top: "54%",
              transform: "translate(-50%, -60%) scale(1.1)",
              pointerEvents: "none",
            }}
          />
          <span className="absolute -left-20 top-1/2 -translate-y-1/2 rotate-[-90deg] bg-black/80 text-white text-3xl font-extrabold px-4 py-2 rounded-lg drop-shadow-xl tracking-wider">
            AINESH SRIDHAR
          </span>
        </div>
      </animated.div>

      {/* About & Education */}
      <animated.div
        style={fadeIn}
        className="flex-1 z-10 flex flex-col items-start md:ml-16 mt-10 md:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-6 text-orange-500 tracking-tight drop-shadow-lg">
          About Me
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-800 max-w-xl font-medium">
          Hi, I'm <span className="font-bold text-black">Ainesh Sridhar</span>, a Computer Science student at VIT Bhopal University with a CGPA of 9.01. I’m passionate about technology and enjoy creating innovative web applications and solving complex problems. From building dynamic platforms to exploring machine learning, I love using tech to make a difference. In my free time, I keep up with the latest trends and embrace new challenges.
        </p>
        <div className="w-full space-y-6">
          {education.map((educ, idx) => (
            <div key={idx} className="flex items-center w-full">
              <div className="flex-1">
                <div className="text-lg font-bold text-black">{educ.degree}</div>
                <div className="text-sm text-gray-600">{educ.school}</div>
              </div>
              <div className="flex-grow border-b border-dashed border-orange-200 mx-4" />
              <div className="text-sm text-orange-500 font-semibold whitespace-nowrap">
                {educ.duration}
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </section>
  );
}
