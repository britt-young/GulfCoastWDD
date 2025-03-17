import React from 'react'
import ContactForm from '../Components/ContactForm'
import ContactSection from '../Components/ContactSection'

const Contact = () => {
  return (
    <div className=" bg-pink-300 min-h-screen ">
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto">
      <div className="basis-1/2"><ContactSection /></div>
      <div className="basis-1/2"><ContactForm /></div>
      </div>
      
    </div>
  )
}

export default Contact