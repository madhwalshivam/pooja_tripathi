import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/dv.jpg';
import award1 from '../assets/award.jpeg';
import award2 from '../assets/award1.jpg';
import award3 from '../assets/ioi.jpg';
import perf1 from '../assets/awardd.jpg';
import perf2 from '../assets/rt.jpg';
import perf3 from '../assets/kj.jpg';
import perf4 from '../assets/dt.jpg';

export default function AchievementPage() {
  const achievements = [
    {
      title: 'Women’s Achiever Award',
      image: award1,
      description: 'Recognized for outstanding contributions and excellence in classical dance.',
    },
    {
      title: 'Sashakt Nari Award',
      image: award2,
      description: 'Honored as a symbol of empowered womanhood in the performing arts.',
    },
    {
      title: 'Sarojini Naidu International Award',
      image: award3,
      description: 'A prestigious honor for cultural excellence and international recognition.',
    },
    {
      title: 'Performance at Kumbh Mela, Kalagram, Prayagraj',
      image: perf1,
      description: 'A soul-stirring Kathak performance during the world’s largest spiritual gathering.',
    },
    {
      title: 'Performance at Indira Gandhi Auditorium',
      image: perf2,
      description: 'A mesmerizing showcase of classical art at a renowned cultural venue.',
    },
    {
      title: 'Performance at Triveni Kala Kendra',
      image: perf3,
      description: 'A graceful performance at one of Delhi’s iconic art institutions.',
    },
    {
      title: 'Judge at Modern School, New Delhi',
      image: perf4,
      description: 'Served as a chief guest and judge for a prestigious inter-school dance competition.',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-96 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
             Achievements
            </span>
          </h1>
            <p className="text-xl md:text-2xl">
              Celebrating our journey of dedication, excellence, and recognition in the world of Kathak
            </p>
          </div>
        </section>

    
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                  Pooja Tripathi's Achievements & Performances
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                A tribute to the awards received and the iconic stages graced by Guru Pooja Tripathi.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-red-600 to-amber-500 text-center rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

