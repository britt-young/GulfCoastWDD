//WHITE WAVE

import { useEffect, useState } from "react";
import Wave from "react-wavify";

const WaveAnimation3 = () => {
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
        fill={isDark ? "#002775" : "#ffffff"}
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          
          height: "100%",
          zIndex: 0,
        }}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.1,
          points: 6,
        }}
      />
    </div>
  );
};

export default WaveAnimation3;