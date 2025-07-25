import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

export default function ValuesSection() {
  const values = [
    {
      icon: <FavoriteBorderIcon fontSize="large" className="text-red-600" />,
      title: 'Authenticity',
      description:
        'We preserve the traditional techniques and spiritual essence of Kathak while making it accessible to modern learners.',
    },
    {
      icon: <StarBorderIcon fontSize="large" className="text-red-600" />,
      title: 'Excellence',
      description:
        'We maintain the highest standards in teaching and performance, ensuring each student reaches their full potential.',
    },
    {
      icon: <GroupOutlinedIcon fontSize="large" className="text-red-600" />,
      title: 'Community',
      description:
        'We foster a supportive and inclusive environment where dancers of all backgrounds can learn and grow together.',
    },
    {
      icon: <PublicOutlinedIcon fontSize="large" className="text-red-600" />,
      title: 'Cultural Bridge',
      description:
        'We serve as a bridge between traditional Indian culture and contemporary society, promoting understanding and appreciation.',
    },
  ];

  return (
    <section className="py-20 pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core <span className="text-red-600 font-pacifico">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do at our academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
