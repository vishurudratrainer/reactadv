import { useState } from "react";
import StudentTable from "./StudentTable";

export default function StudentForm() {
  const [formData, setFormData] = useState({ name: "", age: 0, address: "" });
  const [students, setStudents] = useState([]);

  const captureName = (e) => setFormData({ ...formData, name: e.target.value });
  const captureAge = (e) => setFormData({ ...formData, age: e.target.value });
  const captureAddress = (e) =>
    setFormData({ ...formData, address: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault();//prevent default form behaviour of sending the data to action
    setStudents(students.concat(formData));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>
          Enter name <input required type="text" onChange={captureName} />
        </label>
        <br />
        <label>
          Enter age <input required type="number" onChange={captureAge} />
        </label>
        <br />
        <label>
          Enter address <textarea onChange={captureAddress} />
        </label>
        <br />
        <button>Add Student</button>
      </form>
      <StudentTable studentData ={students} pageName="Student Table"/>

    </div>
  );
}
