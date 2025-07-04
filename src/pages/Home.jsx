import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import Qualification from "./Qualification";
import Experience from "../Components/experiences";
import Education from "../Components/Education";
import ContactForm from "./ContactForm";
import ServiceSection from "./Services";

function Home() {
  return (
    <div className=" md:px-10   ">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <SkillsSection></SkillsSection>
      <ServiceSection></ServiceSection>

      {/* <Qualification></Qualification> */}
      {/* <Education></Education> */}
      <Experience></Experience>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
