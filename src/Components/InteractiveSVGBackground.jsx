import { useState, useRef, useEffect } from "react";

export default function InteractiveSVGBackground({
  width = "100%",
  height = "100%",
  waveColor = "#0222D0",
  spotlightColor = "#ffffff",
  followSpeed = 0.12,
}) {
  const svgRef = useRef(null);

  // Target cursor position
  const targetSpot = useRef({ x: -1000, y: -1000 });

  // Animated spotlight position
  const [spot, setSpot] = useState({ x: -1000, y: -1000 });

  // Follow delay animation
  useEffect(() => {
    let frame;
    const animate = () => {
      setSpot((prev) => {
        const dx = targetSpot.current.x - prev.x;
        const dy = targetSpot.current.y - prev.y;
        return {
          x: prev.x + dx * followSpeed,
          y: prev.y + dy * followSpeed,
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [followSpeed]);

  const moveSpot = (clientX, clientY) => {
    const rect = svgRef.current.getBoundingClientRect();
    targetSpot.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handleLeave = () => {
    targetSpot.current = { x: -1000, y: -1000 };
  };

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      onMouseMove={(e) => moveSpot(e.clientX, e.clientY)}
      onMouseLeave={handleLeave}
      onTouchMove={(e) => {
        const t = e.touches[0];
        moveSpot(t.clientX, t.clientY);
      }}
      onTouchEnd={handleLeave}
      style={{ display: "block" }}
    >
      <defs>
        {/* Wave pattern (base dim waves) */}
        <pattern
          id="wavePatternBase"
          width="100"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z"
            fill={waveColor}
            fillOpacity="0.25"
          />
        </pattern>

        {/* Highlight wave pattern */}
        <pattern
          id="wavePatternHighlight"
          width="100"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z"
            fill={spotlightColor}
            fillOpacity="1"
          />
        </pattern>

        {/* Soft radial spotlight mask */}
        <radialGradient id="softSpotMask" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Mask using the radial gradient */}
        <mask id="spotMask">
          <rect width="100%" height="100%" fill="black" />
          {/* circle filled with the gradient */}
          <circle
            cx={spot.x}
            cy={spot.y}
            r="30"
            fill="url(#softSpotMask)"
          />
        </mask>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill={waveColor} />

      {/* Base waves */}
      <rect width="100%" height="100%" fill="url(#wavePatternBase)" />

      {/* Highlighted waves revealed by soft-edge spotlight */}
      <g mask="url(#spotMask)">
        <rect width="100%" height="100%" fill="url(#wavePatternHighlight)" />
      </g>
    </svg>
  );
}
