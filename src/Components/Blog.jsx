import BlogCard from "./BlogCard";
import { Store, MousePointerClick, Gauge, Scaling, GlobeLock, SearchCheck} from 'lucide-react';

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
              <h2 className="mb-2 dark:text-white">
                What makes a great website? 
              </h2>
              <p className="text-black dark:text-white">
                At Gulf Coast Web Design & Development we include all the essential features that make a website safe, attractive, easy to use, and fast! 
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
            icon={<MousePointerClick />}
            author="Brittney Treece"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Loading Speed Optimization"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-02.jpg"
            url="/services/optimization"
            icon={<Gauge />}
            author="Brittney Treece"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Responsive Design"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/responsiveness"
            icon={<Scaling />}
            author="Brittney Treece"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="User Security and Web Encryption"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/security"
            icon={<GlobeLock />}
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="On-Page SEO"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/seo"
            icon={<SearchCheck />}
            author="Brittney Treece"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Shopify Store Integration"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://cdn.tailgrids.com/assets/images/application/blogs/blog-01/image-03.jpg"
            url="/services/shopify"
            icon={<Store />}
            author="Brittney Treece"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
