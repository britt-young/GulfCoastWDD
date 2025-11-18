import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="bg-white dark:bg-dark flex justify-center py-20">
      <div className="container">
        <div className="flex flex-wrap mb-24">
          <div className="w-full">
            <div className="text-center">
              <h4 className="text-alternate dark:text-alt">
                Our Services
              </h4>
              <h2 className="mb-5 dark:text-white">
                More of what we offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, rerum.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="User-Friendly Features"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-01.jpg"
            url="/services/features"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Loading Speed Optimization"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-02.jpg"
            url="/services/optimization"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Responsive Design"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/responsiveness"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="User Security and Web Encryption"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/security"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="On-Page SEO"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/seo"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Shopify Store Integration"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/shopify"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
