import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedIcons = () => {
  const data = [
    { icon: "👩‍🎓", text: "300+ Students" },
    { icon: "👨‍💼", text: "70 Staff Members" },
    { icon: "📍", text: "Best Location" },
    { icon: "💡", text: "NEP" },
    { icon: "👨‍👩‍👦", text: "Hello Parent" },
  ];

  return (
    <div className="bg-purple-700 text-white py-10">
      <div className="container mx-auto flex justify-center gap-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 70,
            }}
          >
            <div className="bg-indigo-800 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-3">
              {item.icon}
            </div>
            <p className="text-lg font-medium text-white">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedIcons;
