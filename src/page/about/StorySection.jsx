import React from 'react';
import storyImage from '../../assets/screen.jpg';

export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Text Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                About Us
              </span>
              <div className="h-[3px] w-16 bg-red-600 mt-2 rounded-full" />
            </h2>
            <div className="text-gray-700 space-y-4 text-base leading-relaxed text-justify">
              <p>
                Kathak Nrityashala is a classical dance academy located in Noida, established by Pooja Tripathi. She belongs to the Lucknow Gharana and has dedicated her life to spreading the rich tradition of Kathak.
              </p>
              <p>
                With more than 25 years of experience, she has mentored countless students, helping them develop not only as dancers but also as confident individuals connected to their culture.
              </p>
              <p>
                She received training under Guru Mamta Maharaj and holds certifications in Kathak, Tabla, and Vocal from prestigious institutions like Prayag Sangeet Samiti and Pracheen Kala Kendra.
              </p>
              <p>
                Her students have graced renowned stages such as Surajkund Mela, Triveni Kala Sangam, and Indira Gandhi Kala Kendra, showcasing their talent in front of large audiences.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-transform hover:scale-105 duration-300 ease-in-out animate-fade-in">
            <img
              src={storyImage}
              alt="Pooja Tripathi performing Kathak"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
