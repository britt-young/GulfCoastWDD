import Wave from "react-wavify";
// white wave
const WaveAnimation3 = () => {
  return (
    <div>
      <Wave
        fill="#ffffff"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "100%",
          index: "50",
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