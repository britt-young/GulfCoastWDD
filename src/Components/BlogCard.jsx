import { Link } from "react-router-dom"

const BlogCard = ({ image, date, CardTitle, CardDescription, url }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="service image" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-alternate">
                {date}
              </span>
            )}
            <h3>
              <Link
                to={url}
                className="mb-4 inline-block text-xl font-semibold text-black hover:text-alternate dark:text-white sm:text-2xl lg:text-xl xl:text-2xl cursor-pointer"
              >
                {CardTitle}
              </Link>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard