import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import Qualification from "./Qualification";

function Home() {
  return (
    <div className="w-11/12 mx-auto border-2 border-red-300">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <SkillsSection></SkillsSection>
      <Qualification></Qualification>
      <Projects></Projects>
    </div>
  );
}

export default Home;
