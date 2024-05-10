import React from "react";
import "./Form.css";
import { useState } from "react";

export default function Form({
  addSubject,
  subject,
  handleSubmit,
  clearSubject,
}) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [credits, setCredits] = useState("");

  const handleAdd = () => {
    if (!name || !marks || !credits)
      alert("Name, Credits or Marks cannot be empty");
    else {
      addSubject(name, marks, credits);
      setCredits("");
      setMarks("");
      setName("");
    }
  };
  const clearAll = () => {
    clearSubject("hello");
  };

  return (
    <div className="forms">
      <div>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Subject Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Subject Name"
        />
        <br />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Marks Secured
        </label>
        <input
          type="number"
          value={marks}
          onChange={(e) => {
            setMarks(e.target.value);
          }}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter marks"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Credits
        </label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Credits"
        />
      </div>
      <button className="btn btn-sm btn-success" onClick={handleAdd}>
        Add
      </button>

      <hr />
    </div>
  );
}
