
const SEO = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      {/* Blog Header */}
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-4">
          Search Engine Optimization (SEO)
        </h2>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span>Britt Treece</span>
          <span className="mx-2">•</span>
          <span>October 2, 2025</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto text-alternate">
        
        <h3 className="mt-10 mb-5">What is SEO?</h3>
        <p className="text-black">
          React allows you to create reusable components, manage state
          efficiently, and build interactive UIs seamlessly.
        </p>
        <h3 className="mt-10 mb-5">On-Page SEO vs. Off-Page SEO</h3>
        <p className="text-black">
          Tailwind provides utility-first CSS classes, letting you style
          quickly without writing custom CSS. It’s perfect for rapid UI
          development. By combining React and Tailwind, developers can create powerful
          applications with minimal effort while maintaining clean code.
        </p>
      </div>
    </div>
  )
}

export default SEO