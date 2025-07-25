import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

export default function Achievement() {
  const stats = [
    {
      icon: <GroupIcon fontSize="large" className="text-red-600" />,
      title: '700+',
      subtitle: 'Students Trained'
    },
    {
      icon: <MusicNoteIcon fontSize="large" className="text-red-600" />,
      title: '200+',
      subtitle: 'Stage Performances'
    },
    {
      icon: <StarIcon fontSize="large" className="text-red-600" />,
      title: '100+',
      subtitle: 'Certifications & Achievements'
    },
    {
      icon: <EmojiEventsIcon fontSize="large" className="text-red-600" />,
      title: '70+',
      subtitle: 'Awards & Honors'
    }
  ];

  return (
    <section className="py-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-2">
  <EmojiEventsIcon className="text-red-600" fontSize="large" />
  Our <span className="text-red-600 font-pacifico">Achievements</span>
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {stats.map((item, index) => (
  <div
    key={index}
    className="bg-gray-50 border border-gray-200 rounded-xl py-10 px-4 shadow-sm hover:shadow-lg hover:shadow-red-500 transition-shadow duration-300"
  >
    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
      {item.icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{item.subtitle}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
}

