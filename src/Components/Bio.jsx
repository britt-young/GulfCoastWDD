import headshot from "../assets/imgs/owner.png";

const Bio = () => {
  // Phone number
  const phoneNumber = "(850) 296-8466";

  return (
    <div className="bg-white dark:bg-dark px-6 py-14 lg:px-8 grid grid-cols-1 lg:grid-cols-2 justify-center">
      <div className="mx-auto lg:mr-20 mb-5 lg:mb-0">
        <img
          src={headshot}
          alt="owner headshot"
          className="w-full lg:h-185 h-140 object-cover outline-2 outline-offset-1 outline-white rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center lg:mr-90 mt-10 lg:mt-0 dark:text-white">
        <h4 className="text-alternate dark:text-alt">Why Choose GCWDD?</h4>
        <h2 className="font-bold ">
          Let us bring your buisness to the online space
        </h2>
        <p className="mt-5">
          My name is Brittney, I'm the founder and developer behind Gulf Coast
          Web Design & Development. I served 13 years as a medic in the United
          States Army and later went on to earn my Full-Stack Developer
          Certification from the University of Utah.
        </p>
        <p className="mt-5">
          I started Gulf Coast Web Design & Development because I believe that
          every business, big or small, should have the ability to market their
          services online without breaking the bank. Many small business don't
          have the funds to pay large web design agencies just to receive a
          generic website that is boring and ineffective. I wanted to provide
          small businesses an alternate option that allows them to have a
          beautiful and custom website for only $145 a month.
        </p>
        <p className="mt-5">
          Gulf Coast Web Design & Development specializes in small businesses
          that are wanting to expand into the digital space to reach more
          clients or businesses that just want to upgrade their current outdated
          website. We do all the work for you; design, development, hosting, and
          updates so you can focus on running your business.
        </p>
        <button
          onClick={() => navigate("/Contact")}
          className="lg:mt-12 mt-10 bg-alternate hover:text-black transition hover:bg-alt text-white dark:bg-alt dark:text-black dark:hover:bg-white w-full md:w-fit"
        >
          <a href={`tel:${phoneNumber}`} className="hover:underline">
            Call Us: {phoneNumber}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Bio;
