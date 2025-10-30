import WaveAnimation from "../Components/WaveAnimation3";

const ComingSoon = () => {
  return (
    <div className="relative h-screen">
      <WaveAnimation />
      <h1 className="relative uppercase text-black flex flex-col items-center min-h-screen justify-center tracking-wide animate-pulse">
        Coming Soon
      </h1>
    </div>
  );
};

export default ComingSoon;
