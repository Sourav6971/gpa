import React from "react";
import "./Calculate.css";

export default function Calculate({ subject }) {
  const calculateCgpa = () => {
    let marksObtained = 0;
    let fullMarks = 0;
    let cgpa = 0;

    subject.map((element) => {
      marksObtained =
        marksObtained + Number(Math.ceil(element.Marks / 10) * element.Credits);
      fullMarks = fullMarks + Number(10 * element.Credits);
    });
    cgpa = (marksObtained / fullMarks) * 10;
    cgpa = cgpa.toFixed(2);

    return cgpa;
  };

  return (
    <div className="calculate">
      <h3 className="text-center">Grade List</h3>
      <br />
      <br />
      {subject.map((element) => {
        const marks = element.Marks;
        const grade =
          marks <= 40
            ? "F"
            : marks <= 50
            ? "P"
            : marks <= 60
            ? "B"
            : marks <= 70
            ? "B+"
            : marks <= 80
            ? "A"
            : marks < 90
            ? "A+"
            : "O";

        return (
          <>
            <h6>{element.Name.toUpperCase()}</h6>
            <p>{grade}</p>
          </>
        );
      })}
      <br />
      <br />
      <hr />

      <div>
        <h5>The Estimated CGPA is</h5>
        {subject.length === 0 ? 0 : calculateCgpa()}
      </div>
    </div>
  );
}
