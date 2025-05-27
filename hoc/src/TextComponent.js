import { useState } from "react";
const TextComponent = ({ text }) => {
  const [isHovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <>
      <p
        style={{ backgroundColor: isHovered ? "blue" : "white" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </p>
    </>
  );
};

export default TextComponent;
