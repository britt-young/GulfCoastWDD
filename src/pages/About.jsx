import AboutHeader from '../Components/AboutHeader'
import Bio from '../Components/Bio'
import Workflow from '../Components/Workflow'
import Testimonials from '../Components/Testimonials'
import Portfolio from '../Components/Portfolio'

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <Bio />
      <Workflow />
      <Portfolio />
      <Testimonials />
    </div>
  )
}

export default About