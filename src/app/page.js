import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Education from "./components/EducationSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import AboutSection from './components/About';

export default function Home() {
  return (
    // Main wrapper with the background image
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: "url('\plain-black-background-02fh7564l8qq4m6d.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundSize: "",
        backgroundAttachment: "fixed", // Optional: keeps background fixed on scroll
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
      }}
    >
      {/* <Navbar /> */}
      <Hero />
      {/* <AboutSection/> */}
      {/* <Education /> */}
      <SkillsSection />
      <LogoBar />
      <ProjectsSection />
      <CertificatesSection />
    </div>
  );
}
