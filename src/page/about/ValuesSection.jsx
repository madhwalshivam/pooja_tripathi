import React from 'react';
import authenticityImg from '../../assets/o.png';
import excellenceImg from '../../assets/o1.png';
import communityImg from '../../assets/o2.png';
import bridgeImg from '../../assets/o3.png';

export default function ValuesSection() {
  const values = [
    {
      img: authenticityImg,
      title: 'Authenticity',
      description:
        'We preserve the traditional techniques and spiritual essence of Kathak while making it accessible to modern learners.',
    },
    {
      img: excellenceImg,
      title: 'Excellence',
      description:
        'We maintain the highest standards in teaching and performance, ensuring each student reaches their full potential.',
    },
    {
      img: communityImg,
      title: 'Community',
      description:
        'We foster a supportive and inclusive environment where dancers of all backgrounds can learn and grow together.',
    },
    {
      img: bridgeImg,
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
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-10 h-10 object-contain"
                />
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

