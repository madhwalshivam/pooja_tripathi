import React from 'react';
import iconBasics from '../assets/f.png';
import iconRhythm from '../assets/f1.png';
import iconStory from '../assets/f2.png';
import iconAdvanced from '../assets/f3.png';
import iconTheory from '../assets/f4.png';
import iconCommunity from '../assets/f5.png';

export default function FeaturesPage() {
  const learnings = [
    {
      icon: iconBasics,
      title: 'Master Basic Techniques',
      description: 'Learn the fundamentals, including basic steps, hand gestures (mudras), and spins (chakkars).'
    },
    {
      icon: iconRhythm,
      title: 'Understand Rhythm',
      description: 'Delve into the complexities of taal (rhythm) and laya (tempo), which are essential to Kathak.'
    },
    {
      icon: iconStory,
      title: 'Explore Storytelling',
      description: 'Experience the art of abhinaya (expression) to convey stories and emotions through dance.'
    },
    {
      icon: iconAdvanced,
      title: 'Advanced Techniques',
      description: 'Train in complex footwork, intricate compositions, and stage performance techniques.'
    },
    {
      icon: iconTheory,
      title: 'Theory and History',
      description: 'Gain an understanding of the history and cultural significance of Kathak.'
    },
    {
      icon: iconCommunity,
      title: 'Community and Collaboration',
      description: 'Join group choreographies and connect with other passionate dancers in workshops and events.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-red-600 font-pacifico">Kathak?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kathak is more than just dance—it’s a way of expressing stories and emotions through intricate footwork, swift spins, and subtle gestures.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What You’ll Learn</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a beginner or looking to deepen your practice, our Kathak program guides you through the art—from basic postures to stage presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-red-600 to-amber-600 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white border rounded-full flex items-center justify-center mb-6">
                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

