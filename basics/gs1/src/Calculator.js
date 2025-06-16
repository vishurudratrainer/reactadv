import { useState } from "react";
const Calculator = () => {
  const [ip1, setIp1] = useState(0);
  const [ip2, setIp2] = useState(0);
  const [res, setRes] = useState(0);
  const captureIp1 = (e) => {
    let v1 = e.target.value;
    setIp1(v1);
  };
  const captureIp2 = (e) => {
    let v1 = e.target.value;
    setIp2(v1);
  };

  const add = () => setRes(parseInt(ip1) + parseInt(ip2));

  return (
    <div>
      <label>
        Enter number 1: <input onChange={captureIp1} />
      </label>
      <br />
      <label>
        Enter number 2: <input onChange={captureIp2} />
      </label>
      <br />
      <button onClick={add}>+</button>
      <h1>Result is {res}</h1>
    </div>
  );
};

export default Calculator;
