const WaveBackground3 = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 bg-alternate dark:bg-alternate ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,20
            Q25,30 50,20
            Q75,10 100,20
            V100 H0 Z
          "
          className="fill-alt dark:fill-alt"
        />
        <path
          d="
            M0,30
            Q25,40 50,30
            Q75,20 100,30
            V100 H0 Z
          "
          className="fill-[#ffffff] dark:fill-dark"
        />
      </svg>
    </div>
  );
};

export default WaveBackground3;
