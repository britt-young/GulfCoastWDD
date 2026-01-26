import WaveAnimation from "../Components/WaveAnimation3";

const ComingSoon = () => {
  return (
    <section className="relative">
      <WaveAnimation />
      <div className="relative h-screen flex flex-col items-center justify-center dark:bg-dark bg-white">
        <h4 className="text-alternate dark:text-alt">please be patient</h4>
        <h2 className="dark:text-white">New blog articles coming soon</h2>
      </div>
    </section>
  );
};

export default ComingSoon;
