import React from "react";
import { motion } from "framer-motion";

const LevelsOfLearning = () => {
  const levels = [
    {
      id: 1,
      title: "DAY CARE (18 MONTHS AND ABOVE)",
      description:
        "Mother's Pride Day Care offers a nurturing and stimulating child day care program with a team of dedicated care givers.",
      image: "learn/level-1.jpg",
    },
    {
      id: 2,
      title: "PLAY GROUP (2 YEARS AND ABOVE)",
      description:
        "At the age of two, children begin to develop independence. It is the best time to explore their developmental milestones.",
        image: "learn/level-2.jpg",
    },
    {
      id: 3,
      title: "NURSERY (3 YEARS AND ABOVE)",
      description:
        "Nursery programs focus on fostering social skills, creativity, and confidence, helping children to prepare for primary school.",
        image: "learn/level-3.jpg",
    },
    {
      id: 4,
      title: "KINDERGARTEN (4 YEARS AND ABOVE)",
      description:
        "Kindergarten is the time to strengthen foundational skills and build curiosity for learning in a structured environment.",
        image: "learn/level-4.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-6 text-pink-600">
        Levels of learning for various age groups
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {levels.map((level) => (
          <motion.div
            key={level.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: level.id * 0.2 }}
          >
            <img
              src={level.image}
              alt={level.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {level.title}
              </h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LevelsOfLearning;
