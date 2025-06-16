import { useState } from "react";

export default function SelectColor() {
  const [color, setColor] = useState("");
  const [colors] = useState(["red", "green", "blue"]);
  const changeColor = (e) => setColor(e.target.value);

  return (
    <div>
      <select onChange={changeColor}>
        <option>Please select color</option>
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <textarea style={{ backgroundColor: color }}>Color will change</textarea>
    </div>
  );
}
