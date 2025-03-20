import React from 'react'
import AboutHeader from '../Components/AboutHeader'
import Bio from '../Components/Bio'
import Workflow from '../Components/Workflow'

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <Bio />
      <Workflow />
    </div>
  )
}

export default About