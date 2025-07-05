// app/page.js
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
    </>
  );
}
