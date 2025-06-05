import withHover from "./hoc/withHover";

const InputComponent = ({ type, isHovered }) => {
  return (
    <input
      type={type}
      style={{ backgroundColor: isHovered ? "blue" : "white" }}
    />
  );
};

export default withHover(InputComponent);
