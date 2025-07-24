import React from 'react';
import course1 from '../assets/course.webp';
import course2 from '../assets/course1.jpg';
import course3 from '../assets/course2.jpg';
import course4 from '../assets/course3.jpg';
import course5 from '../assets/course4.webp';
import course6 from '../assets/course5.jpg';
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
    title: 'Bollywood Fusion',
    image: course6,
    description: 'Experience the energy of Bollywood with a fusion of Indian and Western dance styles.',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Our Popular<span className="text-red-600 font-pacifico"> Classes</span>
        </h2>

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
  className="inline-block bg-red-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-700 transition self-start"
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


