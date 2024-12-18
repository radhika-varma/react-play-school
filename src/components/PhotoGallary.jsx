import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PhotoGallary = () => {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    { id: 1, src: 'gallery/g-1.jpg', alt: 'Image 1' },
    { id: 2, src: 'gallery/g-2.jpg', alt: 'Image 2' },
    { id: 3, src: 'gallery/g-3.jpg', alt: 'Image 3' },
    { id: 4, src: 'gallery/g-4.jpg', alt: 'Image 4' },
    { id: 5, src: 'gallery/g-5.jpg', alt: 'Image 5' },
    { id: 6, src: 'gallery/g-6.jpg', alt: 'Image 6' },
    { id: 5, src: 'gallery/g-7.jpg', alt: 'Image 5' },
    { id: 6, src: 'gallery/g-8.jpg', alt: 'Image 6' },
  ];

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-pink-600 mb-8">
        Image Gallery
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} openModal={openModal} />
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
              onClick={closeModal}
            >
              X
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const GalleryItem = ({ image, openModal }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
      onClick={() => openModal(image)}

    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-center items-center h-full">
          {/* <motion.button
            className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => openModal(image)}
          >
            +
          </motion.button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoGallary;
