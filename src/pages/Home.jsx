import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import Qualification from "./Qualification";
import Experience from "../Components/experiences";
import Education from "../Components/Education";

function Home() {
  return (
    <div className="w-11/12 mx-auto md:px-10  ">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <SkillsSection></SkillsSection>
      {/* <Qualification></Qualification> */}
      {/* <Education></Education> */}
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default Home;
