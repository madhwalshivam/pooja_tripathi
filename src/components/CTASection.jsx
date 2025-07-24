import React from "react";

export default function CTASection() {
  return (
    <section className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Begin Your Journey with <br />
          <span className="block font-pacifico text-white text-5xl mt-2">
            Pooja Tripathi’s Kathak Nrityalaya
          </span>
        </h2>
        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
          Dive into the world of classical dance with us. Experience tradition,
          grace, and storytelling through every step.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            Book Your First Class
          </a>
          <a
            href="/classes"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            View Class Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
