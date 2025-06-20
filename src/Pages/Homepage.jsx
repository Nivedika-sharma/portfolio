import React from 'react';
import Home from '../components/Home.jsx';
import { AboutSection } from '../components/About.jsx';
import { SkillSection } from '../components/SkillSection.jsx';
import ExperienceSection from '../components/Experiencesection.jsx';
import ProjectSection from '../components/Projects.jsx';
import AchievementsSection from '../components/Achievement.jsx';
import Contact from '../components/Contact.jsx';

const HomePage = () => {
  return (
    <div className="space-y-28">
      <section id="home"><Home /></section>
      <section id="about"><AboutSection /></section>
      <section id="skills"><SkillSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="achievements"><AchievementsSection /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default HomePage;
