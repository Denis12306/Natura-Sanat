import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../../api/axios";
import CourseForm from "../../components/forms/CourseForm";

export default function EditCoursePage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  useEffect(() => {

    const fetchCourse = async () => {

      try {

        const res = await axios.get(`/courses/${id}`);

        setCourse(res.data.data);

      } catch (err) {

        console.error(err);

      }

    };

    fetchCourse();

  }, [id]);

  const handleUpdate = async (data) => {

    try {

      await axios.put(`/courses/${id}`, data);

      alert("Cours modifié.");

      navigate("/dashboard/professional/courses");

    } catch (err) {

      console.error(err);

      alert("Erreur.");

    }

  };

  if (!course) {
    return <p>Chargement...</p>;
  }

  return (

    <div style={{ maxWidth: 1500, margin: "40px auto" }}>

      <h1>Modifier le cours</h1>

      <CourseForm
        initialValues={course}
        onSubmit={handleUpdate}
        submitLabel="Enregistrer"
      />

    </div>

  );

}
