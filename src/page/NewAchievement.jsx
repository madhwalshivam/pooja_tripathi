 
 import React from 'react';
import bannerImage from '../assets/dv.jpg'; 

export default function AchievementPage() {
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
  <h1 className="text-5xl md:text-6xl text-red-600 font-bold mb-4">Achievements</h1>
  <p className="text-xl md:text-2xl">Celebrating our journey of dedication, excellence, and recognition in the world of Kathak</p>
</div>
        </section>

        {/* Student Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                  Pooja Tripathi's Achievements
                </span>
              </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Honoring Guru Pooja Tripathi’s remarkable journey in Kathak — her dedication, accolades, and the legacy she's building through dance.
  </p>
</div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Achievement Card 1 */}
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Young%20kathak%20dancer%20receiving%20award%20or%20trophy%20at%20dance%20competition%2C%20achievement%20celebration%2C%20proud%20moment%2C%20high%20quality%20photography&width=300&height=300&seq=achievement1&orientation=squarish"
                  alt="Competition Winner"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Priya Sharma</h3>
                <p className="text-amber-600 font-semibold mb-2">First Place - Regional Competition</p>
                <p className="text-gray-600 text-sm">
                  "Winning this competition was a dream come true. The training here prepared me for every challenge."
                </p>
              </div>

              {/* Achievement Card 2 */}
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Adult%20kathak%20dancer%20performing%20at%20cultural%20festival%2C%20confident%20performance%2C%20traditional%20costume%2C%20high%20quality%20photography&width=300&height=300&seq=achievement2&orientation=squarish"
                  alt="Cultural Ambassador"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Rajesh Kumar</h3>
                <p className="text-amber-600 font-semibold mb-2">Cultural Ambassador</p>
                <p className="text-gray-600 text-sm">
                  "Representing our culture internationally has been the highlight of my dance journey."
                </p>
              </div>

              {/* Achievement Card 3 */}
              <div className="text-center p-8 bg-amber-50 rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Kathak%20dance%20teacher%20instructing%20students%2C%20skilled%20instructor%2C%20professional%20teaching%2C%20high%20quality%20photography&width=300&height=300&seq=achievement3&orientation=squarish"
                  alt="Teaching Achievement"
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Anita Patel</h3>
                <p className="text-amber-600 font-semibold mb-2">Certified Instructor</p>
                <p className="text-gray-600 text-sm">
                  "From student to teacher, this journey has been transformative. Now I'm passing on the tradition."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
