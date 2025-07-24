import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import LocationMap from './LocationMap'

const ContactPage = () => {
  return (
     <div className="min-h-screen bg-white">
        <ContactHero/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ContactForm/>
            <ContactInfo/>
        </div>
        <LocationMap/>     
    </div>
  )
}

export default ContactPage
