import React from 'react';
import course1 from '../assets/course.webp';
import course2 from '../assets/banner1.avif';
import course3 from '../assets/course2.jpg';
import course4 from '../assets/course3.jpg';
import course5 from '../assets/bkr.jpg';
import course6 from '../assets/dt.jpg';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Kathak in Original Form',
    image: course1,
    description: 'Learn the essence of Kathak through authentic techniques, storytelling, and footwork.',
  },
  {
    title: 'Classical Dance',
    image: course2,
    description: 'Explore Indian classical dance forms with deep focus on expressions and discipline.',
  },
  {
    title: 'Semi-Classical Dance',
    image: course3,
    description: 'Blend classical precision with modern rhythm in beautifully choreographed performances.',
  },
  {
    title: 'Folk Dance',
    image: course4,
    description: 'Celebrate India’s rich heritage with vibrant and energetic folk dance styles.',
  },
  {
    title: 'Choreographed Dance Events',
    image: course5,
    description: 'Get trained in professionally choreographed routines for weddings and special events.',
  },
  {
    title: 'School Kids Batch',
    image: course6,
    description: 'Specially curated for young school kids Fun, interactive Kathak sessions to spark their interest.',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-5 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
         <h1 className="text-4xl font-bold text-gray-800 mb-4 py-5">
              <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
               Our Popular Classes
              </span>
              
            </h1> 

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 sm:h-52 object-cover"
              />
              <div className="p-4 text-left flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {course.description}
                </p>
           <Link
  to="/contact"
  className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-center px-3 py-2 rounded-full font-medium hover:from-red-700 hover:to-amber-700 transition-all text-sm"
>
  Enquiry
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;


