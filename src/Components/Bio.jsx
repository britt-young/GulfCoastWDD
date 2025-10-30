import headshot from "../assets/imgs/headshot.png";


const Bio = () => {
  return (
    <div className="bg-white dark:bg-dark px-6 py-10 lg:px-8 grid grid-cols-1 lg:grid-cols-2 justify-center">
      <div className="mx-auto lg:mr-20 mb-5 lg:mb-0">
        <img
          src={headshot}
          alt="owner headshot"
          className="w-full lg:h-185 h-140 object-cover outline-2 outline-offset-1 outline-white rounded-lg"
        />
        <p className="hidden lg:block absolute lg:bottom-2 lg:left-78  bg-white text-dark px-2 py-1 rounded-lg text-sm lg:text-base">
          <span className="font-semibold tracking-widee">Brittney Treece</span>, Owner of Gulf Coast Web Designs & Development
        </p> 
      </div>
      <div className="flex flex-col items-start lg:mr-90 mt-10 lg:mt-0">
        <h4 className="text-alternate">Why Choose GCWDD?</h4>
        <h2 className="font-bold">
          Let us bring your buisness to the online space
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </p>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laborisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris</p>
          <button
            onClick={() => navigate("/Contact")}
            className="mt-5 bg-alternate hover:text-black transition hover:bg-alt text-white"
          >
            Call Us:  (513) 262-4121
          </button>
      </div>
    </div>
  );
};

export default Bio;


