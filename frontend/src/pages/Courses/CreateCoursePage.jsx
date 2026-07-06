import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import CourseForm from "../../components/forms/CourseForm";

export default function CreateCoursePage() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await axios.post("/courses", data);
      alert("Cours créé.");
      navigate("/dashboard/professional/courses");
    } catch (err) {
      console.error(err);
      alert("Erreur.");
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <h1>Créer un cours</h1>
      <CourseForm
        onSubmit={handleCreate}
        submitLabel="Créer"
      />
    </div>
  );
}
