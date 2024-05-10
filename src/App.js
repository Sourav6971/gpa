import "./App.css";
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Calculate from "./components/Calculate";
import { useState } from "react";
function App() {
  const [subject, setSubject] = useState([]);

  const addSubject = (name, marks, credits) => {
    const newSubject = {
      Name: name,
      Marks: marks,
      Credits: credits,
    };
    setSubject([...subject, newSubject]);
  };

  return (
    <div>
      <Header />
      <Form
        addSubject={addSubject}
        subject={subject}
        clearSubject={() => {
          setSubject([]);
        }}
      />
      <Calculate subject={subject} />
    </div>
  );
}

export default App;
