// import { Outlet } from 'react-router-dom';

import Blog from "../Components/Blog";
import BlogHeader from "../Components/BlogHeader";

const Services = () => {
  return (
    <div className="min-h-screen">
      <BlogHeader />
      <Blog />
    </div>
    // <Outlet />
  );
};

export default Services;
