import React from 'react';
import image from '../../assets/d.jpg';
import image1 from '../../assets/dt.jpg';
import image2 from '../../assets/class1.jpg';
import image3 from '../../assets/gallery1.jpeg';
import image4 from '../../assets/gallery2.jpeg';
import image5 from '../../assets/gallery3.jpeg';
import image6 from '../../assets/gallery4.jpeg';
import image7 from '../../assets/gallery5.jpeg';
import image8 from '../../assets/img2.webp';
import image9 from '../../assets/img3.webp';
import image10 from '../../assets/img4.webp';
import image11 from '../../assets/s.jpg';
import image12 from '../../assets/kj.jpg';

import CTAGallery from './CTAGallery';

export default function Gallery() {
  const images = [
    {
      id: 1,
      category: 'performances',
    title: 'School Kids Batch',
      url: image1
    },
    {
      id: 2,
      category: 'classes',
      title: 'Pooja Tripathi',
      url: image2
    },
  {
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi – Grace in Stillness',
  url: image3
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image4
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image9
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image10
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image11
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi – Radha Krishna Kathak',
  url: image12
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image8
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image5
},
{
  id: 2,
  category: 'classes',
  title: 'Pooja Tripathi',
  url: image6
},
{
  id: 2,
  category: 'classes',
  title: 'Group Dance',
  url: image7
}


    // ... continue with the rest of your image objects
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-96 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
             Gallery
            </span>
          </h1>
            <p className="text-xl md:text-2xl">Capturing the beauty and elegance of Kathak dance</p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                  Our Visual Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore moments from our classes, performances, and cultural celebrations
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => (
                <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTAGallery />
      </main>
    </div>
  );
}
