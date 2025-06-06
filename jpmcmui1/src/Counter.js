import { useState } from "react";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);

  return (
    <div>
      <Button variant="contained" onClick={inc}>
        Increment
      </Button>
      <Button variant="contained" onClick={dec}>
        Decrement
      </Button>
      <br />
      <Alert severity="success">Counter :{counter} </Alert>
    </div>
  );
}
