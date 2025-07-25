import React from 'react'
import AboutHero from './AboutHero'
import StorySection from './StorySection'
import ValuesSection from './ValuesSection'


const AboutPage = () => {
  return (
     <div className="min-h-screen bg-white">
      <AboutHero/> 
      <StorySection/>
      <ValuesSection/>        
    </div>
  )
}

export default AboutPage