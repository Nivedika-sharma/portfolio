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


const App = () => {
  return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
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
        

        {/* Add more sections as needed */}
        
       
      </main>

      {/* Footer */}
      
    </div>

  );
};

export default App;
