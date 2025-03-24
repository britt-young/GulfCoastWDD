import React from 'react'
import AboutHeader from '../Components/AboutHeader'
import Bio from '../Components/Bio'
import Workflow from '../Components/Workflow'
import Testimonials from '../Components/Testimonials'

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <Bio />
      <Workflow />
      <Testimonials />
    </div>
  )
}

export default About