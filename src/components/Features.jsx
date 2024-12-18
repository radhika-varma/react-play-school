import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Interactive Learning",
      description:
        "Engaging methods and activities to make learning fun and effective.",
        icon: "feature/f-1.png", 
    },
    {
      id: 2,
      title: "Personalized Curriculum",
      description:
        "Tailored lessons and activities based on individual learning styles.",
        icon: "feature/f-2.png", 

    },
    {
      id: 3,
      title: "Qualified Teachers",
      description: "Experienced educators to guide and support every student.",
      icon: "feature/f-3.png", 
 
    },
    {
      id: 4,
      title: "Safe & Secure Environment",
      description: "A nurturing space where children feel safe and cared for.",
      icon: "feature/f-4.png", 

    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Our Features</h2>
        <p className="text-gray-600">
          Discover the unique aspects of our program that make learning exciting
          and effective.
        </p>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.6,
              delay: feature.id * 0.2,
              type: "spring",
              stiffness: 300,
            }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
