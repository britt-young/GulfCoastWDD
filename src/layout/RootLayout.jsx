import React from "react";
import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1f3b47] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%2218%22%20viewBox%3D%220%200%20100%2018%22%3E%3Cpath%20fill%3D%22%23000000%22%20fill-opacity%3D%220.08%22%20d%3D%22M61.82%2018c3.47-1.45%206.86-3.78%2011.3-7.34C78%206.76%2080.34%205.1%2083.87%203.42%2088.56%201.16%2093.75%200%20100%200v6.16C98.76%206.05%2097.43%206%2096%206c-9.59%200-14.23%202.23-23.13%209.34-1.28%201.03-2.39%201.9-3.4%202.66h-7.65zm-23.64%200H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57%209.3%207.08%206.78%200%206.16V0c6.25%200%2011.44%201.16%2016.14%203.42%203.53%201.7%205.87%203.35%2010.73%207.24%204.45%203.56%207.84%205.9%2011.31%207.34zM61.82%200h7.66a39.57%2039.57%200%200%201-7.34%204.58C57.44%206.84%2052.25%208%2046%208S34.56%206.84%2029.86%204.58A39.57%2039.57%200%200%201%2022.52%200h15.66C41.65%201.44%2045.21%202%2050%202c4.8%200%208.35-.56%2011.82-2z%22%3E%3C/path%3E%3C/svg%3E')] bg-repeat bg-contain">{/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer className=""/>
    </div>
  );
};

export default RootLayout;


// bg-gradient-to-tr from-[#1f3b47] from-55% via-[#406779] via-70% to-[#3d8069] to-85%