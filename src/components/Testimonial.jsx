import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Testimonial Component
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      text: 'This service is amazing! I’ve never seen something so effective and easy to use.',
      imgSrc: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager',
      text: 'I had an amazing experience! Highly recommend it to everyone.',
      imgSrc: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Mary Johnson',
      role: 'UI/UX Designer',
      text: 'Excellent work! It has helped our team increase productivity significantly.',
      imgSrc: 'https://via.placeholder.com/100',
    },
    {
      id: 4,
      name: 'James Brown',
      role: 'Project Manager',
      text: 'A game-changer! The quality and customer support are outstanding.',
      imgSrc: 'https://via.placeholder.com/100',
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-pink-600 mb-8">
        What Our Clients Say
      </h2>
      
      {/* Slider */}
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-item bg-white rounded-lg shadow-lg p-6 mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
