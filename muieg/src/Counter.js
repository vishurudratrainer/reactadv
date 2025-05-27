import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);

  return (
    <div>
      <Button variant="contained" onClick={inc}>
        Increment
      </Button>
      <Alert severity="success">{counter}</Alert>
    </div>
  );
}
