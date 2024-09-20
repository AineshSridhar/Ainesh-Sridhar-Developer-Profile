import './App.css';
import Navbar from "./MyComponents/Navbar";
import Header from "./MyComponents/Header";
import About from "./MyComponents/About";
import Stats from "./MyComponents/Stats";
import Expertise from "./MyComponents/Expertise";
import Skills from "./MyComponents/Skills"
import Projects from "./MyComponents/Projects";
import Profiles from "./MyComponents/Profiles";
import Footer from "./MyComponents/Footer";
import { useSpring, animated } from "react-spring";
import './App.css';

function App() {
  const fadeInApp = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={{ ...styles.appContainer, ...fadeInApp }}>
      <div style={styles.firstSection}>
        <Navbar />
        <Header />
      </div>
      <About />
      <Stats />
      <Expertise  />
      <Skills/>
      <Projects />
      <Profiles/>
      <Footer />
    </animated.div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "Ubuntu, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#0d0f0f",
  },
  firstSection: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/HomeBgImage.jpg)`,
    backgroundSize: "1400px",
    backgroundRepeat: "repeat",
    backgroundPosition: "top left",
  },
};

export default App;
