import React from 'react';
import storyImage from '../../assets/img4.webp';

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8">
              About Us
            </h2>
            <div className="prose prose-lg text-gray-600 prose-strong:text-red-600 space-y-6">
              <p>
                <strong>Kathak Nrityashala</strong> is a reputed Kathak learning academy in Noida, led by <strong>Pooja Tripathi</strong> of the <strong>Lucknow Gharana</strong>, known for her dedication to promoting classical dance among young learners.
              </p>
              <p>
                With over <strong>25 years of experience</strong>, Pooja ji has trained hundreds of students, instilling in them not only the techniques of Kathak but also its rich cultural roots.
              </p>
              <p>
                She trained under <strong>Guru Mamta Maharaj</strong>, daughter of <strong>Padma Vibhushan Pt. Birju Maharaj</strong>, and holds top honors like <strong>Prabhakar</strong>, <strong>Visharad</strong>, and <strong>Naveen</strong> in Kathak, Tabla, and Vocal from <strong>Prayag Sangeet Samiti</strong> and <strong>Pracheen Kala Kendra</strong>.
              </p>
              <p>
                She has received awards from <strong>Sangeet Natak Akademi</strong> and recognitions like the <strong>Sarojini Naidu International Women Award</strong> and <strong>Women Achiever Award</strong> for her contribution to classical dance.
              </p>
              <p>
                Her students have performed at prestigious events such as <strong>Surajkund Mela</strong>, <strong>Triveni Kala Sangam</strong>, and <strong>Indira Gandhi Kala Kendra</strong>, making Kathak accessible to wider audiences.
              </p>
              <p>
                Besides dance, she’s passionate about <strong>fashion design</strong>, <strong>gardening</strong>, and creative expression, which further enriches her teaching style and connection with students.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="sticky top-24">
            <img
              src={storyImage}
              alt="Pooja Tripathi performing Kathak"
              className="rounded-2xl shadow-xl object-cover object-top w-full h-[500px]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
