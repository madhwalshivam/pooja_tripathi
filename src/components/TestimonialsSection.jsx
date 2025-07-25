import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Advanced Student',
    content:
      'Learning Kathak under Pooja Ma’am has been transformative. Her dedication to traditional techniques is inspiring.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent',
    content:
      'My daughter has grown tremendously in confidence and grace thanks to Pooja’s Kathak training.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Intermediate Student',
    content:
      'Pooja makes each class engaging and precise. Her style blends tradition and modern clarity beautifully.',
    rating: 5,
  },
  {
    name: 'Neha Verma',
    role: 'Beginner Student',
    content:
      'Even as a beginner, I felt welcomed and supported. Pooja’s teaching made learning easy and joyful.',
    rating: 5,
  },
  {
    name: 'Anjali Mehta',
    role: 'Semi-Classical Performer',
    content:
      'The depth of training I received from Pooja for semi-classical pieces helped me perform confidently on stage.',
    rating: 5,
  },
  {
    name: 'Ravi Desai',
    role: 'Dance Enthusiast',
    content:
      'What I admire most about Pooja is her passion for Kathak and her ability to connect with every student.',
    rating: 5,
  },
  {
    name: 'Meera Joshi',
    role: 'Workshop Attendee',
    content:
      'I attended a weekend workshop led by Pooja and was amazed at how much I learned in a short time.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-20 pt-10 bg-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Students <span className="text-red-600 font-pacifico">Say</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Hear from those who learned the art of Kathak from Pooja
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-4xl mx-auto transition-all duration-700 ease-in-out">
          <div className="flex justify-center mb-6">
            <AccountCircleIcon fontSize="large" className="text-red-500" />
          </div>

          <div className="flex justify-center text-red-400 mb-4">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          <blockquote className="italic text-xl md:text-2xl text-gray-700 mb-6 relative">
            <FormatQuoteIcon className="text-red-400 absolute -top-4 left-1/2 -translate-x-1/2" />
            <p className="mt-4">{testimonials[current].content}</p>
          </blockquote>

          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              {testimonials[current].name}
            </h4>
            <p className="text-gray-600">{testimonials[current].role}</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prev}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-100 transition"
          >
            <ArrowBackIosNewIcon className="text-red-600" fontSize="small" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-100 transition"
          >
            <ArrowForwardIosIcon className="text-red-600" fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
