import React from 'react';
import beginnerImage from '../../assets/c.jpg';
import intermediateImage from '../../assets/c.jpg';
import advancedImage from '../../assets/c.jpg';
import kidsImage from '../../assets/c.jpg';
import courseImage from '../../assets/course.webp';


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
      image: kidsImage
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
      image: intermediateImage
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
      image: beginnerImage
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
      image: courseImage
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
      image: intermediateImage
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
      image: advancedImage
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
      image: kidsImage
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
      image: advancedImage
    }
  ];

  const admissionNote = `"Kathak Nrityashala" is open to all enthusiasts 7 days a week (10AM–8PM). 
But as every form needs discipline, admission to the class depends on the individual's commitment.

Minimum age for admission is 5 years due to the theoretical aspects of Kathak.

The Nrityashala ensures authenticity through yearly exams in affiliation with Prayag Sangeet Samiti, Prayagraj.

Current batches include:
- School-going kids (weekend/evening)
- Working ladies (late evening)
- Homemakers & senior ladies (weekday daytime)
- Customized batches as per requirement

Dance forms taught:
- Kathak (original)
- Classical / Semi-classical / Folk
- Choreographed event dances

Admission to any class is based on mentor recommendation.
Classes offered:
- Praveshika, First to Sixth Year
- Beyond Sixth Year: Performance-based entry by mentor decision.`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Batches Section */}
        <div>
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12 ">Current Batches</h2>
          <div className="space-y-16">
            {batches.map((level, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-red-600 mb-4">{level.title}</h3>
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
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={level.image}
                    alt="Kathak class"
                    className="rounded-2xl shadow-lg object-cover object-top w-full h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Dance Forms We Teach</h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
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
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt="Dance style"
                    className="rounded-2xl shadow-lg object-cover object-top w-full h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Note */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-red-600 mb-4">About Admission & Structure</h3>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
            {admissionNote}
          </pre>
        </div>
      </div>
    </section>
  );
}
