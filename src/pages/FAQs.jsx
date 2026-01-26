import FAQsHeader from '../Components/FAQsHeader'
import FAQsStepper from '../Components/FAQsStepper'
import SEOHelmet from '../Components/SEOHelmet'


const FAQs = () => {
  return (
    <div className="min-h-full ">
       {/* SEO Component */}
      <SEOHelmet
        title="Frequently Asked Questions | Gulf Coast Web Design & Development"
        description="Answers to common questions about our pricing packages and e-commerce services."
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