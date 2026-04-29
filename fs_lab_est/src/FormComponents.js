import React, { useState } from "react";
import { StudentModel } from "./models/Student";

function FormComponent() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const student = new StudentModel(formData);
    const validationErrors = student.validate();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    setSubmittedData(student.toJSON());
    setFormData({ name: "", email: "", course: "" });
    setErrors([]);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>

      {errors.length > 0 && (
        <div style={{ color: "red", marginTop: "10px" }}>
          {errors.map((err, i) => <p key={i}>{err}</p>)}
        </div>
      )}

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;