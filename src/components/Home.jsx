import { ArrowDown } from "lucide-react";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center h-screen  text-white relative overflow-hidden px-20">

      {/* Avatar & Glowing Effect */}
      {/* Intro Text */}
      <div className="relative  mt-10">
        {/* Glowing circle background */}
        <div className="absolute  inset-0 w-44 h-52 bg-purple-500 blur-3xl opacity-50 rounded-full z-0" />
        <img
          src={avatar}
          alt="Avatar"
          className="relative w-40 h-46 z-10 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        />
      </div>
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nivedika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sharma
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           Hello! I’m a CSE undergrad from SRMSCET, Bareilly who loves to build things.
           From AI models to full-stack apps, I bring ideas to life with code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

  

        
     

      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </div>

    </section>
  );
};

export default Home;
