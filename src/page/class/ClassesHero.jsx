

import React from 'react';
import backgroundImage from '../../assets/class.jpg'; 

export default function ClassesHero() {
  return (
    <section className="relative h-96 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
           <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
               Our Classes
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the perfect class for your skill level and dance goals
          </p>
        </div>
      </div>
    </section>
  );
}
