import FAQsHeader from '../Components/FAQsHeader'
import FAQsStepper from '../Components/FAQsStepper'
import SEOHelmet from '../Components/SEOHelmet'
import {faqData} from "../data/faqData"


const FAQs = () => {
  return (
    <div className="min-h-full ">
       {/* SEO Component */}
      <SEOHelmet
        title="Frequently Asked Questions | Gulf Coast Web Designs & Development"
        description="how much does a website cost? how long does it take to build a website?"
        canonical="/faqs"
        ogImage="imgs/faqs-og.png"
        faqs={faqData} // JSON-LD structured data
      />

      {/* Page Content */}
      <FAQsHeader />
      <FAQsStepper />
    </div>
  )
}

export default FAQs