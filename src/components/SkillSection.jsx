import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import Skills from '../assets/Skills.png';
import { technologies } from "../constants";
import Tilt from "react-parallax-tilt";

export const SkillSection = () => {
  return (
    <section id="Skills" className=" px-4 py-16 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-lg text-gray-600">
          I have experience in various technologies and tools that help me build efficient and scalable applications.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-1">
          {technologies.map((technology) => (
            <Tilt tiltMaxAngleX={360} tiltMaxAngleY={360} >
            <div
              key={technology.name}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            </Tilt>
          ))}
        </div>
        <img src={Skills} alt="Skills" className="w-full h-[80%] transition-transform duration-1000 hover:rotate-y-180" />
      </div>
    </section>
  )
}



  
