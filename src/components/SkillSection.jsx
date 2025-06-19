import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import Skills from '../assets/Skills.png';

export const SkillSection = () => {
  return (
   
        <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        
            <p className="text-lg text-gray-600">
                I have experience in various technologies and tools that help me build efficient and scalable applications.
            </p>
        <img src={Skills} alt="Skills" className="w-full pt-18 h-[60%]" />
        <div className="text-center mt-8">
            
        </div>
      </div>
        </section>
  
  )
}



  
