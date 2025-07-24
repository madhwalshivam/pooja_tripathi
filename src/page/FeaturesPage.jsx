
import React from 'react';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';

export default function FeaturesPage() {
  const learnings = [
    {
      icon: <DirectionsWalkIcon fontSize="large" className="text-red-600" />,
      title: 'Master Basic Techniques',
      description: 'Learn the fundamentals, including basic steps, hand gestures (mudras), and spins (chakkars).'
    },
    {
      icon: <MusicNoteIcon fontSize="large" className="text-red-600" />,
      title: 'Understand Rhythm',
      description: 'Delve into the complexities of taal (rhythm) and laya (tempo), which are essential to Kathak.'
    },
    {
      icon: <EmojiEmotionsIcon fontSize="large" className="text-red-600" />,
      title: 'Explore Storytelling',
      description: 'Experience the art of abhinaya (expression) to convey stories and emotions through dance.'
    },
    {
      icon: <DirectionsRunIcon fontSize="large" className="text-red-600" />,
      title: 'Advanced Techniques',
      description: 'Train in complex footwork, intricate compositions, and stage performance techniques.'
    },
    {
      icon: <MenuBookIcon fontSize="large" className="text-red-600" />,
      title: 'Theory and History',
      description: 'Gain an understanding of the history and cultural significance of Kathak.'
    },
    {
      icon: <GroupIcon fontSize="large" className="text-red-600" />,
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
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
