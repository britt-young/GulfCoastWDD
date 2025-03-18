import React from 'react'
import FAQsHeader from '../Components/FAQsHeader'
import FAQsStepper from '../Components/FAQsStepper'


const FAQs = () => {
  return (
    <div className="min-h-screen absolute top-0 -z-10 w-full">
      <FAQsHeader />
      <FAQsStepper />
    </div>
  )
}

export default FAQs