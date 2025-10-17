import Wave from "react-wavify";
// blue wave
const WaveAnimation2 = () => {
  return (
    <div>
      <Wave
        fill="#0091C0"
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
          points: 6,
        }}
      />
    </div>
  );
};

export default WaveAnimation2;
