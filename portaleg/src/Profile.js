import { useState } from "react";
import Modal from "./Modal";

export default function Profile() {
  const [model, setModel] = useState(false);
  const openModel = () => setModel(true);
  const closeModel = () => setModel(false);
  return (
    <div>
      <h1>Profile</h1>
      <h1>This here{model.toString()}</h1>

      <button onClick={openModel}>View More</button>
      {model && (
        <Modal>
          <h1>This is the info u wanted {model.toString()}</h1>
          <button onClick={closeModel}>Close Modal</button>
        </Modal>
      )}
    </div>
  );
}
