// app/page.js
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Education from "./components/EducationSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <Education />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
    </>
  );
}
