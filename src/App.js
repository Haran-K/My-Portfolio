import React from "react";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
