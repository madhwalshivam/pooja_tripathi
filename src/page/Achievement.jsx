import React from 'react';
import studentsImg from '../assets/a.png';
import stageImg from '../assets/a3.png';
import certificateImg from '../assets/a2.png';
import awardImg from '../assets/a1.png';

export default function Achievement() {
  const stats = [
    {
      img: studentsImg,
      title: '700+',
      subtitle: 'Students Trained'
    },
    {
      img: stageImg,
      title: '200+',
      subtitle: 'Stage Performances'
    },
    {
      img: certificateImg,
      title: '100+',
      subtitle: 'Certifications & Achievements'
    },
    {
      img: awardImg,
      title: '70+',
      subtitle: 'Awards & Honors'
    }
  ];

  return (
    <section className="py-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-2">
          <img src={awardImg} alt="Achievements" className="w-8 h-8" />
          Our <span className="text-red-600 font-pacifico">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-amber-600 to-red-600  rounded-xl py-10 px-4 shadow-sm"
            >
              <div className="w-16 h-16 bg-white border rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.subtitle}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-white">{item.title}</h3>
              <p className="text-white mt-2 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


