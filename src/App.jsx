import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import { StarBackGround } from "./components/StarBackGround.jsx";


import Home from "./components/Home.jsx";
import { AboutSection } from "./components/About.jsx";
import { SkillSection } from "./components/SkillSection.jsx";
import ExperienceSection from "./components/Experiencesection.jsx";
import ProjectSection from "./components/Projects.jsx";
import AchievementsSection from "./components/Achievement.jsx";
import Contact from "./components/Contact.jsx";
import HomePage from "./Pages/Homepage.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-base text-base overflow-x-hidden">
      {/* Static Parts: Always Rendered */}
      <StarBackGround />
      <Navbar />

      {/* Route Content: Only This Changes */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/achievements" element={<AchievementsSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
