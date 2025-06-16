import { useState } from "react";
import StudentTable from "./StudentTable";
import StudentTableRecent from "./StudentTableRecent";

export default function StudentForm() {
  const [formData, setFormData] = useState({ name: "", age: 0, address: "" });
  const [students, setStudents] = useState([]);
  const deleteByName = (e) => {
    let nameToDelete = e.target.name;
    let dataAfterDelete = [];
    students.forEach((element) => {
      if (element.name !== nameToDelete) {
        dataAfterDelete.push(element);
      }
    });

    setStudents(dataAfterDelete);
  };

  const duplicateByName = (e) => {
    let nameToDelete = e.target.name;
    let dataToInsert = null;
    students.forEach((element) => {
      if (element.name === nameToDelete) {
        dataToInsert = element;
      }
    });
    if (dataToInsert != null) setStudents(students.concat(dataToInsert));
  };

  const captureName = (e) => setFormData({ ...formData, name: e.target.value });
  const captureAge = (e) => setFormData({ ...formData, age: e.target.value });
  const captureAddress = (e) =>
    setFormData({ ...formData, address: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault(); //prevent default form behaviour of sending the data to action
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
      <StudentTable
        studentData={students}
        pageName="Student Table"
        deleteByName={deleteByName}
        duplicateByName={duplicateByName}
      />
      <StudentTableRecent studentData={students} pageName="Student Table New" />
    </div>
  );
}
