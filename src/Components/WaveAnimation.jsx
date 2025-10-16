import Wave from "react-wavify";

const WaveAnimation = () => {
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
          height: 40,
          amplitude: 25,
          speed: 0.1,
          points: 6,
        }}
      />
      
    </div>
  );
};

export default WaveAnimation;
