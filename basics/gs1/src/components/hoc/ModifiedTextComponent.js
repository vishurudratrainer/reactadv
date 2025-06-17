import withHover from "./withHover";

// Updated Text Component without the Hover Logic
const ModifiedTextComponent = ({ text, isHovered,Paragragh }) => {
  return (
    <div>
          <Paragragh></Paragragh>

      <p style={{ backgroundColor: isHovered ? "#FF0000" : "#00FF00" }}>{text}</p>
    </div>
  );
};


export default withHover(ModifiedTextComponent)