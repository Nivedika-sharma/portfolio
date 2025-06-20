import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import React from "react";
import jalaj from "../assets/jalaj.jpeg";
import yatripath from "../assets/yatripath.jpeg";
import PowerBI from "../assets/PowerBI.png";
import iris from "../assets/iris.jpg";
import weather from "../assets/weather.jpg";
const projects = [
  {
    id: 1,
    title: "JALAJ",
    description:
      "Developed with Flutter, Dart, and Node.js, this mobile application uses AI to analyze images, predict the type and intensity of natural disasters, and help authorities respond effectively. .",
    image: jalaj,
    tags: ["FLutter", "Node.js", "Python", "AI", "Disaster Management"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yashgupta683/Jalaj.git",
  },
  {
    id: 2,
    title: "YATRIPATH",
    description:
      "The problem involves developing a comprehensive navigation solution for railway stations that assists passengers in locating various facilities and destinations within the station premises.",
    image: yatripath,
    tags: ["FLutter", "AR", "Navigation", "3D Mapping"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/Nivedika-sharma/YatriPath-Your-Station-Your-Way",
  },
  {
    id: 3,
    title: "Global Energy Trends",
    description:
      "This project uses Power BI to analyze global energy production data across different regions and energy sources. It provides pinteractive visualizations to compare trends, track shifts in generation modes, and support data-driven energy policy decisions. ..",
    image: PowerBI,
    tags: ["PowerBI", "Excel"],
    //demoUrl: "#",
    githubUrl:
      "https://github.com/Nivedika-sharma/Global-Energy-Trends-A-Comprehensive-Analysis-of-Key-Regions-and-Generation-Modes-using-Power-BI",
  },
  {
    id: 4,
    title: "Iris Recognition",
    description:
    " Machine learning model for classifying iris species (setosa, versicolor, virginica), built using scikit-learn and Python.",
    image: iris,
    tags: ["Python", "Scikit-learn","Numpy","Pandas", "Machine Learning"],
    demoUrl: "https://irisspeciesprediction-psrjnfsycvza5ue8jhxwhx.streamlit.app/",
    githubUrl:
      "https://github.com/Nivedika-sharma/Iris_species_prediction",
  },
  {
    id: 5,
    title: "Weather Prediction",
    description:
     "Time series forecasting model for predicting weather patterns using scikit-learn, statsmodels, and other data analytics tools.",
    image: weather,
    tags: [" Python","Forecasting", "Machine Learning"],
    demoUrl: "https://weatherprediction-68jlwjbd2ydgw3h7fzljpw.streamlit.app/",
    githubUrl:
      "https://github.com/Nivedika-sharma/Weather_predictionusing-Power-BI",
  },
  
];
const ProjectSection = () => {
  return (
    <section id="Projects" className=" px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary "> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-4xl overflow-hidden shadow-xs card-hover transition-transform duration-500 transform hover:scale-105 active:scale-100"
            >
              <Tilt>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              </Tilt>
            </div>
            
          ))}
         
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Nivedika-sharma"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
