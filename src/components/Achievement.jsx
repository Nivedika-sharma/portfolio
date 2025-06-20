import React from "react";
import { Trophy, Award, Medal, Banknote, Star } from "lucide-react";

// Achievements Data
const achievements = [
  {
    icon: Trophy,
    title: "2nd Prize - Ideathon",
    description: "Won 2nd prize in Ideathon organized by SRMSCET, Bareilly.",
  },
  {
    icon: Award,
    title: "Most Scalable Solution",
    description:
      "Won category prize for 'Most Scalable Solution' in Hackathon by UCER College, Prayagraj.",
  },
  {
    icon: Medal,
    title: "Smart India Hackathon (SIH) 2023",
    description: "Position: Waiting List Runner-Up.",
  },
  {
    icon: Banknote,
    title: "₹88,000 Scholarship",
    description: "Awarded for outstanding academic performance.",
  },
  {
    icon: Star,
    title: "₹86,000 Scholarship",
    description: "Granted for excellence in academics and merit standing.",
  },
];

// Achievement Card component
const AchievementCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="p-6 rounded-[1.5rem] text-white transition-transform duration-500 transform-gpu
      hover:scale-[1.09] hover:-translate-y-4  hover:shadow-lg hover:shadow-primary/50
      hover:backdrop-blur-lg backdrop-blur-sm
      bg-card"
    >
      {Icon && (
        <div
          className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl"
          style={{
            background:
              "linear-gradient(215.15deg, rgba(52, 41, 66, 0.53) -171.85%, rgba(151, 71, 255, 0.53) 85.28%, rgba(140, 69, 255, 0.212) 122.51%)",
            boxShadow:
              "inset 2px 2px 8px rgba(255,255,255,0.15), 0 6px 14px rgba(151,71,255,0.5), 0 2px 3px rgba(0,0,0,0.8)",
            transform: "rotateX(12deg) rotateY(-9deg)",
          }}
        >
          <Icon size={28} className="text-white" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-snug tracking-wide">
        {description}
      </p>
    </div>
  );
};

// Main Section Component
const AchievementsSection = () => {
  return (
    <section id="Achievements" className="min-h-screen  py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12 text-center">
          Achiev<span className="text-primary">ements</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
