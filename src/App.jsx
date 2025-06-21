import React from "react";

import Navbar from "./components/Navbar.jsx";
import { StarBackGround } from "./components/StarBackGround.jsx";

import Home from "./components/Home.jsx";
import { AboutSection } from "./components/About.jsx";
import { SkillSection } from "./components/SkillSection.jsx";
import ExperienceSection from "./components/Experiencesection.jsx";
import ProjectSection from "./components/Projects.jsx";
import AchievementsSection from "./components/Achievement.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-base text-base overflow-x-hidden">
      <StarBackGround />
      <Navbar />

      <main className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="contact">
          <Contact />S
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
