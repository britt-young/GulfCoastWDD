import { Link } from "react-router-dom"
import { Dot } from "lucide-react"

const BlogCard = ({ image, date, CardTitle, CardDescription, url, icon, author }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded-3xl border-1 border-white shadow-lg">
            <img src={image} alt="service offered image" className="w-full hover:scale-105 transition-all duration-300" />
          </div>
          <div>
            {date && (
              <span className="bg-alt rounded-3xl mb-2 inline-flex  py-0 px-2 text-xs font-semibold leading-loose text-black dark:text-alt">
                {date}<Dot />{author}
              </span>
            )}
            <h5>
              <Link
                to={url}
                className="w-full gap-4 uppercase cursor-pointer inline-flex items-center text-black hover:text-alternate dark:hover:text-dark"
              >
                {CardTitle}{icon}
              </Link>
            </h5>
            <p className="mt-1 font-alt text-black dark:text-white">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard