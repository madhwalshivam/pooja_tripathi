import React from 'react';
import { motion } from 'framer-motion';
import advancedImage from '../../assets/c.jpg';
import courseImage from '../../assets/course.webp';
import homeImage from '../../assets/home.jpg';
import classImage from '../../assets/class1.jpg';
import class1Image from '../../assets/dt.jpg';
import class2Image from '../../assets/ph4.jpg';
import class3Image from '../../assets/banner1.avif';
import class4Image from '../../assets/course2.jpg';
import class5Image from '../../assets/bkr.jpg';
import class6Image from '../../assets/mutliple.jpg';
import { Link } from 'react-router-dom';

export default function ClassLevels() {
  const batches = [
    {
      title: 'School Kids Batch',
      description: 'Weekend or evening classes designed for school-going children.',
      curriculum: [
        'Foundational Kathak steps and postures',
        'Fun exercises and coordination games',
        'Introduction to rhythm and mudras',
        'Storytelling through dance',
        'Mini performances and confidence building'
      ],
      image: class1Image
    },
    {
      title: 'Working Ladies Batch',
      description: 'Late evening batch tailored for working women to unwind and learn Kathak.',
      curriculum: [
        'Kathak in original and semi-classical forms',
        'Warm-up and flexibility training',
        'Choreographed routines for events',
        'Rhythmic combinations and abhinaya',
        'Stress-relieving movement practice'
      ],
      image: classImage
    },
    {
      title: 'Homemakers Batch',
      description: 'Daytime weekday classes ideal for homemakers to explore Kathak.',
      curriculum: [
        'Classical and folk dance training',
        'Posture and grace improvement',
        'Basic to intermediate Kathak techniques',
        'Expressive storytelling through dance',
        'Preparation for group performances'
      ],
      image: homeImage
    },
    {
      title: 'Senior Ladies Batch',
      description: 'Gentle weekday sessions for senior women focusing on movement and culture.',
      curriculum: [
        'Low-impact classical movements',
        'Cultural engagement through folk forms',
        'Breathing, balance, and rhythm practice',
        'Light choreography for participation',
        'Interactive storytelling and enjoyment'
      ],
      image: advancedImage
    },
    {
      title: 'Custom Requirement Batch',
      description: 'Flexible batches formed based on individual or group requirements.',
      curriculum: [
        'Choreographed dance for events',
        'Dance forms based on preference',
        'Rhythm-based routines and variations',
        'Focused individual or group training',
        'Customized syllabus and scheduling'
      ],
      image: class2Image
    }
  ];

  const services = [
    {
      title: 'Kathak in Original Form',
      description: 'Authentic training preserving the traditional structure and grace of Kathak.',
      curriculum: [
        'Traditional Kathak compositions',
        'Technical precision and footwork',
        'Cultural history and context',
        'Spins (chakkars) and mudras',
        'Theoretical foundations'
      ],
      image: courseImage
    },
    {
      title: 'Classical',
      description: 'Structured classical Kathak for disciplined learners.',
      curriculum: [
        'Raag-based compositions',
        'Graceful postures and gestures',
        'Rhythmic cycles (taal) and laya',
        'Abhinaya and expressions',
        'Stage performance preparation'
      ],
      image: class3Image
    },
    {
      title: 'Semi-Classical',
      description: 'A blend of classical base with lighter choreography styles.',
      curriculum: [
        'Fusion movements',
        'Creative expression and freedom',
        'Thematic storytelling',
        'Simplified classical steps',
        'Performance choreography'
      ],
      image: class4Image
    },
    {
      title: 'Folk',
      description: 'Vibrant and energetic folk dances inspired by regional traditions.',
      curriculum: [
        'Basic steps of folk styles (e.g., Bihu, Garba)',
        'Use of props and formations',
        'Folk rhythms and expressions',
        'Community-style group movements',
        'Folk-based storytelling'
      ],
      image: class5Image
    },
    {
      title: 'Choreographed Event Dance',
      description: 'Customized dance routines for functions and special events.',
      curriculum: [
        'Theme-based choreography',
        'Group and solo coordination',
        'Costume and stage orientation',
        'Quick-learning methods',
        'Stage presence and delivery'
      ],
      image: class6Image
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Batches Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Current Batches
            </span>
          </h2>
          <div className="space-y-16">
            {batches.map((level, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                      {level.title}
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{level.description}</p>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      {level.curriculum.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.img
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  src={level.image}
                  alt="Kathak class"
                  className="rounded-2xl shadow-lg object-cover object-top w-full h-80 lg:order-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Dance Forms We Teach
            </span>
          </h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      {service.curriculum.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.img
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  src={service.image}
                  alt="Dance style"
                  className="rounded-2xl shadow-lg object-cover object-top w-full h-80 lg:order-1"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
          <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about our pricing or need a custom plan?
              </p>
              <Link to="/contact" className="text-white text-sm font-medium px-4 py-2 rounded-full border border-transparent bg-black/50 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-600">
                Contact Us
              </Link>
            </div>
    </section>

  );
}
