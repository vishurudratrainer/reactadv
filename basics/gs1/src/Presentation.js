import { useState } from "react";
import Slide from "./Slide";

const Presentation = () => {
  const [slides, setSlides] = useState([
    { id: 1, header: "What is React", body: "Reactis a UI framework" },
    { id: 2, header: "What is React Middle", body: "Reactis a UI framework" },
    { id: 3, header: "What is React last", body: "Reactis a UI framework" },
  ]);

  const [slideNumber, setSlideNumber] = useState(0);
  const prev = () => {
    if (slideNumber !== 0) {
      setSlideNumber(slideNumber - 1);
    }
  };

  const next = () => {
    if (slideNumber !== slides.length - 1) {
      setSlideNumber(slideNumber + 1);
    }
  };
  return (
    <div>
      <Slide
        slideNumber={slideNumber}
        slideBody={slides[slideNumber].body}
        slideHeader={slides[slideNumber].header}
      />
      <button hidden={slideNumber===0} onClick={prev}>Prev</button>
      <button hidden={slideNumber===slides.length-1} onClick={next}>Next</button>
    </div>
  );
};

export default Presentation