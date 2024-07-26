import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <h1>{color}</h1>
          <div
            className={`w-40 h-40 border border-slate-500`}
            style={{ backgroundColor: color }}
          ></div>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
};
export default ColorBox;
