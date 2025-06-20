import { Database, Code, Bot } from "lucide-react";
import Tilt from "react-parallax-tilt";
import resume from "../assets/resume.pdf";

export const AboutSection = () => {
  return (
    <section id="About" className="py-16 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I’m Nivedika Sharma, a dedicated Computer Science Engineering
              student at SRMSCET, Bareilly, currently maintaining a CGPA of 9.16
              . I’m passionate about building innovative digital solutions that
              blend strong problem-solving skills with modern technologies.
            </p>

            <p className="text-muted-foreground">
              With hands-on experience in both frontend and backend development,
              I thrive in building scalable and user-centric web and mobile
              applications. My journey in tech has also led me deep into AI and
              Machine Learning, where I’ve applied real-world models in projects
              and hackathons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={resume}
                download="nivedika_sharma_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Tilt
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              className="gradient-border p-2  card-hover rounded-2xl transition-all duration-300"
            >
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Developer</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              className="gradient-border p-2  card-hover rounded-2xl transition-all duration-300"
            >
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI Enthusiast</h4>
                    <p className="text-muted-foreground">
                      AI & Machine Learning: Building intelligent systems using
                      Python, TensorFlow, and real-world data-driven models.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              className="gradient-border p-2  card-hover rounded-2xl transition-all duration-300"
            >
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Backend Developer</h4>
                    <p className="text-muted-foreground">
                      Creating secure and scalable APIs with Node.js, Express,
                      and modern databases.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};
