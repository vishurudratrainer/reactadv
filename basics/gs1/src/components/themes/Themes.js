
const Themes = ({setTheme}) => {
  return (
    <div>
      <select onChange={e=>setTheme(e.target.value)}>
        <option>Select</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
};
export default Themes