import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    classType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const now = new Date();
    const formattedTime = now.toLocaleString();

    const payload = {
      ...formData,
      time: formattedTime,
    };

    emailjs
      .send(
        'service_l1pwnv7',
        'template_roe7wjv',
        payload,
        'o5X5iqFHhGIHDBsEv'
      )
      .then(
        () => {
          setSubmitStatus('Thank you for your message! We will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            experience: '',
            classType: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitStatus('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  const GradientWrapper = ({ children }) => (
    <div className="p-[2px] bg-gradient-to-r from-red-600 to-amber-500 rounded-lg">
      <div className="bg-white rounded-lg">{children}</div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 py-5">
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Book Your First Class
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <GradientWrapper>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  placeholder="Enter your full name"
                />
              </GradientWrapper>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <GradientWrapper>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  placeholder="Enter your email"
                />
              </GradientWrapper>
            </div>
          </div>

          {/* Phone & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <GradientWrapper>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </GradientWrapper>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <GradientWrapper>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="5"
                  max="80"
                  className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                  placeholder="Enter your age"
                />
              </GradientWrapper>
            </div>
          </div>

          {/* Experience & Class Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dance Experience</label>
              <GradientWrapper>
                <div className="relative">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm appearance-none focus:outline-none pr-10"
                  >
                    <option value="">Select your experience level</option>
                    <option value="none">No previous experience</option>
                    <option value="beginner">Some dance experience</option>
                    <option value="intermediate">Intermediate level</option>
                    <option value="advanced">Advanced level</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </GradientWrapper>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interested Class Type</label>
              <GradientWrapper>
                <div className="relative">
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm appearance-none focus:outline-none pr-10"
                  >
                    <option value="">Select class type</option>
                    <option value="beginner">Kathak in Original Form</option>
                    <option value="intermediate">Classical Dance</option>
                    <option value="advanced">Semi-Classical Dance</option>
                    <option value="kids">Folk Dance</option>
                    <option value="private">Choreographed Dance Events</option>
                    <option value="others">Others</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </GradientWrapper>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <GradientWrapper>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 rounded-lg text-sm resize-none focus:outline-none"
                placeholder="Tell us about your goals, questions, or any specific needs..."
              ></textarea>
            </GradientWrapper>
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-600 to-amber-600 text-white py-4 px-6 rounded-lg font-medium hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`text-center p-4 rounded-lg ${
                submitStatus.includes('Thank you')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
