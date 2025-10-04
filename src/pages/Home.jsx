import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import Qualification from "./Qualification";
import Experience from "../Components/experiences";
import ContactForm from "./ContactForm";
import ServiceSection from "./Services";
import Education from "../Components/Education";
import AdditionalSkills from "../Components/AdditionalSkills";
import Skills from "../Components/Skills";

function Home() {
  return (
    <div className=" md:px-10   ">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Education></Education>
      <SkillsSection></SkillsSection>
      <ServiceSection></ServiceSection>
      <Experience></Experience>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
