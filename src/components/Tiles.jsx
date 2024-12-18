import React from "react";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Pre-Nursery",
      ageGroup: "Age Group: 2 years & above",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      title: "Nursery",
      ageGroup: "Age Group: 3 years & above",
      color: "bg-blue-400",
    },
    {
      id: 3,
      title: "LKG / Jr. KG",
      ageGroup: "Age Group: 4 years & above",
      color: "bg-red-400",
    },
    {
      id: 4,
      title: "UKG / Sr. KG",
      ageGroup: "Age Group: 5 years & above",
      color: "bg-green-400",
    },
    {
      id: 5,
      title: "Daycare & After School Care",
      ageGroup: "Age Group: 6 months onwards",
      color: "bg-pink-400",
    },
    {
      id: 6,
      title: "Corporate Daycare",
      ageGroup: "Age Group: 6 months onwards",
      color: "bg-purple-400",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      {/* Brain Development Section */}
      {/* <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Brain development during first 5 years
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <img src="https://via.placeholder.com/80" alt="Baby Icon" />
            <p>25%</p>
            <p>Birth</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/80" alt="Toddler Icon" />
            <p>75%</p>
            <p>2 Years</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/80" alt="Child Icon" />
            <p>90%</p>
            <p>5 Years</p>
          </div>
        </div>
      </motion.div> */}

      {/* Programs Section */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-red-500">Our Programs</h2>
        <p className="text-gray-600 mt-2">
          An environment is created that's conducive for learning and growth, we
          provide a large number of kid-centric facilities.
        </p>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            className={`p-6 rounded-lg shadow-md text-white ${program.color} hover:shadow-xl`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: program.id * 0.1 }}
          >
            <h3 className="text-lg font-bold mb-2">{program.title}</h3>
            <p className="mb-4">{program.ageGroup}</p>
            <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-200">
              More Info
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
