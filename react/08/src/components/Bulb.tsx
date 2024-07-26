import { useState } from "react";

const Bulb = () => {
  const [source, setSource] = useState("off");
  return (
    <>
      <img
        onClick={(e) => {
          setSource(e.target.alt === "on" ? "off" : "on");
        }}
        src={`./src/assets/images/b_${source}.png`}
        alt={source}
      />
    </>
  );
};
export default Bulb;
