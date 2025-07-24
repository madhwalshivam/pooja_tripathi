import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturesPage from './FeaturesPage'
import Achievement from './Achievement.jsx'
import CoursesSection from '../components/Courses.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import CTASection from '../components/CTASection.jsx'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Achievement/>
      <FeaturesPage/>
      <CoursesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  )
}

export default Home
