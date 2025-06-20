import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import  { AboutSection } from './components/About.jsx';
import { StarBackGround } from './components/StarBackGround.jsx';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { SkillSection } from './components/SkillSection.jsx';
import ExperienceSection from './components/Experiencesection.jsx';
import ProjectSection from './components/Projects.jsx';
import AchievementsSection from './components/Achievement.jsx';
import Contact from './components/Contact.jsx';


const App = () => {
  return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     
      {/* Background Effects */}
      <StarBackGround />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Home/>
        <AboutSection/>
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <AchievementsSection />
        <Contact />
  
        
       
      </main>

      {/* Footer */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/Experience" element={<ExperienceSection />} />
        <Route path="/Projects" element={<ProjectSection />} />
        <Route path="/Skills" element={<SkillSection />} />
        <Route path="/Achievements" element={<AchievementsSection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
      
    </div>

  );
};

export default App;
