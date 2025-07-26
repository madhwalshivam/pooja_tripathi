import React from 'react'
import ClassesHero from './ClassesHero'
import ClassLevels from './ClassLevel'



const ClassPage = () => {
  return (
     <div className="min-h-screen bg-white">
        <ClassesHero/>   
        <ClassLevels/> 
       
    </div>
  )
}

export default ClassPage