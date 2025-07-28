import React from 'react';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center mt-0 pt-0"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {"Find Your Inner".split("").map((char, index) => (
              <motion.span
                key={`line1-${index}`}
                variants={textVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            {"Peace".split("").map((char, index) => (
              <motion.span
                key={`line2-${index}`}
                variants={textVariants}
                className="inline-block bg-amber-600 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Whether you're seeking to learn the art of Kathak or want to collaborate,
            we’d love to hear from you.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-red-700 hover:to-amber-700 transition-all shadow-lg">
                Start Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

