import React from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import { Link } from 'react-router-dom';

const galleryImages = [img1, img2, img3, img4];

const HomeGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-800 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the beauty and grace of Kathak through our collection of performance moments 
            and student achievements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={image}
                alt={`Kathak Performance ${idx + 1}`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link to= '/gallery'>
          <button className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-amber-700 transition-all">
            View Full Gallery
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
