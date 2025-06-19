import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      duration: "Currently Working",
      title: "Software Developer Intern",
      company: "Jam Analytics Pvt Ltd | Onsite",
      points: [
        "Working on the frontend part of the company website using React and Tailwind CSS.",
        "Developing and maintaining user interfaces with a focus on performance and responsiveness.",
        "Collaborating with the team to align designs with development goals and UI standards.",
        "Gaining hands-on experience in real-world development and design workflows.",
      ],
    },
    {
      duration: "1 Month",
      title: "AI Intern",
      company: "Edunet Foundation | Remote",
      points: [
        "Analyzed customer shopping data using Python, pandas, and seaborn.",
        "Identified trends in age, gender, payment methods, and product categories.",
        "Created visual reports to showcase spending behavior and seasonal preferences.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-black-200 pl-10">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute left-[-50px] top-[10px] w-10 h-10 bg-purple-400 border-4 border-white rounded-full z-10" />
              {/* Card */}
              <div className="bg-primary/10 shadow-md rounded-lg p-6 text-left">
                <div className="mb-3">
                  <span className="inline-block bg-white text-purple-600 text-muted-foreground px-3 py-1 rounded-full mb-1">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-semibold leading-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{exp.company}</p>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
