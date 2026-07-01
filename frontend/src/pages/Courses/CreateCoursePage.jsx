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

      alert("Erreur lors de la création du cours.");

    }

  };

  return (

    <div style={{ maxWidth: "700px", margin: "40px auto" }}>

      <h1>Nouveau cours</h1>

      <CourseForm
        initialValues={{}}
        onSubmit={handleCreate}
        submitLabel="Créer le cours"
      />

    </div>

  );

}
