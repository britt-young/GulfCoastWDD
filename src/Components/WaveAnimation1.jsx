import Wave from "react-wavify";
// green wave
const WaveAnimation1 = () => {
  return (
    <div>
      <Wave
        fill="#A7DC6A"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          height: "100%",
          index: "50",
        }}
        options={{
          height: 0,
          amplitude: 40,
          speed: 0.1,
          points: 6,
        }}
      />
      
    </div>
  );
};

export default WaveAnimation1;
