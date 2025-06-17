import withHover from "./withHover";

// Updated Text Component without the Hover Logic
const ModifiedTextComponent = ({ text, isHovered }) => {
  return (
    <>
      <p style={{ backgroundColor: isHovered ? "blue" : "white" }}>{text}</p>
    </>
  );
};


export default withHover(ModifiedTextComponent)