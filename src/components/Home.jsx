import { ArrowDown } from "lucide-react";
import avatar from "../assets/avatar.png";
const Home = () => {
  return (
    <section id="home" className="flex flex-col mx-auto justify-center h-screen ">

      <div className="flex flex-col items-left text-left">
         {/* Glowing circle background */}
        <div className="relative left-64 bottom-20">
          <div className="absolute inset-0 rounded-full w-44 h-52 bg-purple-400 blur-3xl opacity-50 z-0"></div>
          <img
            src={avatar}
            alt="Avatar"
            className="relative  w-40 h-46 z-10 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
          />
          
        </div>
       
        </div>
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      </section>

 );
};

export default Home;  
