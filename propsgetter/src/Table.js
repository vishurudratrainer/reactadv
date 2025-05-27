function getTableProps() {
  return {
    border: "1",
  };
}

export default function Table() {
  return (
    <div>
      <table {...getTableProps}></table>{" "}
    </div>
  );
}
