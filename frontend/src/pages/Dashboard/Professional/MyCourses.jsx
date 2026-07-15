import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../../api/axios";

// Composant permettant à un professionnel de gérer ses cours (affichage, modification, suppression)
export default function MyCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {

    try {

      const res = await axios.get("/courses/me");

      setCourses(res.data.data);

    } catch (err) {

      console.error(err);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Supprimer ce cours ?")) return;

    try {

      await axios.delete(`/courses/${id}`);

      fetchCourses();

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>Mes cours</h1>

      <Link to="/courses/create">
        ➕ Ajouter un cours
      </Link>

      <hr />

      {courses.length === 0 ? (

        <p>Aucun cours.</p>

      ) : (

        courses.map((course) => (

          <div
            key={course._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              marginBottom: 15,
            }}
          >

            <h3>{course.title}</h3>

            <p>{course.category}</p>

            <Link to={`/courses/edit/${course._id}`}>
              Modifier
            </Link>

            {" | "}

            <button
              onClick={() => handleDelete(course._id)}
            >
              Supprimer
            </button>

          </div>

        ))

      )}

    </div>

  );

}
