import React from 'react';
import { motion } from 'framer-motion';

// ⚙️ Data based on your CV
const experienceData = [
  {
    id: 1,
    title: "IT Assistant (IT Unit)",
    company: "T/Mu/Al-Mina Vidyalayam, Muthur",
    years: "2018 - 2020 (03 Years)",
    points: [
      "Instructed IT for School students.",
      "Taught English for Students with IT Skills.",
    ],
    icon: '💻' // IT icon
  },
  {
    id: 2,
    title: "Cashier and Waiter",
    company: "Deen Knox Hotel, Muthur",
    years: "2013 - 2014 (01 Year)",
    points: [
      "Successfully worked as Cashier and Waiter.",
    ],
    icon: '🛎️' // Hotel icon
  }
];

// Helper component for one entry in the timeline
const ExperienceCard = ({ experience, index }) => {
  return (
    // Animate each card to slide up and fade in
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      className="relative p-6 bg-white rounded-lg shadow-xl mb-8 border-l-4 border-blue-500 timeline-card"
    >
      {/* Timeline Icon */}
      <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
        {experience.icon}
      </div>
      
      <h3 className="text-xl font-bold text-white-900 mb-1">{experience.title}</h3>
      <p className="text-blue-600 font-semibold mb-2">{experience.company}</p>
      <p className="text-sm text-gray-500 mb-4">{experience.years}</p>
      
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};


const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">My Experience</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical line for the timeline */}
          <div className="absolute h-full border-l-2 border-gray-300 left-3 top-0 hidden md:block"></div>
          
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;