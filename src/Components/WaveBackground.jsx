
const WaveBackground = ({ className = "" }) => {
  return (
    <div className="absolute inset-0 bg-[#022C3D] dark:bg-[#022C3D]">
      <svg
        className="absolute inset-0 h-full w-full opacity-100 dark:opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
       {/* Waves: darkest at top, lighter near bottom */}
        <path
          d="M0,20 Q25,40 50,20 Q75,0 100,20 V100 H0 Z"
          className="fill-white/10 dark:fill-[#024059]/10"
        />
        <path
          d="M0,30 Q25,50 50,30 Q75,10 100,30 V100 H0 Z"
          className="fill-white/30 dark:fill-[#024059]/20"
        />
        <path
          d="M0,40 Q25,60 50,40 Q75,20 100,40 V100 H0 Z"
          className="fill-white/40 dark:fill-[#024059]/30"
        />
        <path
          d="M0,50 Q25,70 50,50 Q75,30 100,50 V100 H0 Z"
          className="fill-white/50 dark:fill-[#024059]/40"
        />
        <path
          d="M0,60 Q25,80 50,60 Q75,40 100,60 V100 H0 Z"
          className="fill-white/60 dark:fill-[#024059]/50"
        />
        <path
          d="M0,70 Q25,90 50,70 Q75,50 100,70 V100 H0 Z"
          className="fill-white/70 dark:fill-[#024059]/60"
        />
        <path
          d="M0,80 Q25,100 50,80 Q75,60 100,80 V100 H0 Z"
          className="fill-white dark:fill-[#024059]/100"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
