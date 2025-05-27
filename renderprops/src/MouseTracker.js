import { useState } from "react";
export default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
}
