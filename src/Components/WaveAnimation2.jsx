import Wave from "react-wavify";
import { useEffect, useState } from "react";
// blue wave
const WaveAnimation2 = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      <Wave
        fill={isDark ? "#010a3b" : "#0222D0"}
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "100%",
          index: "50",
        }}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.1,
          points: 2,
        }}
      />
    </div>
  );
};

export default WaveAnimation2;
