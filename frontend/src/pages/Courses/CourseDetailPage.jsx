import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { getCourseById } from "../../api/courses";
import { useAuth } from "../../context/AuthContext";

export default function CourseDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return <p className="p-6">Chargement...</p>;
  }

  if (!course) {
    return <p className="p-6">Cours introuvable</p>;
  }

  const handleUpdatePrice = async () => {
    const newPrice = prompt("Entrez le nouveau tarif du cours (en €) :", course.price);

    if (newPrice === null || newPrice.trim() === "") return;

    const priceAsNumber = parseFloat(newPrice);

    if (isNaN(priceAsNumber)) {
      alert("Veuillez entrer un nombre valide.");
      return;
    }

    try {
      await axios.put(`/courses/${id}`, { price: priceAsNumber });
      setCourse((prev) => ({ ...prev, price: priceAsNumber }));
      alert("Le tarif a bien été modifié !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la modification du tarif.");
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Es-tu sûr de vouloir supprimer ce cours ? Cette action est irréversible."
    );
    if (!confirmed) return;

    try {
      await axios.delete(`/courses/${id}`);
      alert("Le cours a bien été supprimé.");
      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression du cours.");
    }
  };

  const isAdmin = user && user.role === "admin";

  return (
    <div className="max-w-4xl mx-auto p-6">
      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">
        {course.title || "Titre non renseigné"}
      </h1>

      <p className="text-gray-700 mb-6">
        {course.description || "Aucune description pour ce cours."}
      </p>

      <div className="flex items-center gap-4">
        <p className="text-2xl font-bold text-green-600">
          {course.price !== undefined ? `${course.price} €` : "Prix non renseigné"}
        </p>

        {user && (user.role === "professional" || user.role === "admin") && (
          <button
            onClick={handleUpdatePrice}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Modifier le tarif
          </button>
        )}

        {isAdmin && (
          <button
            onClick={handleDelete}
            className="text-sm bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Supprimer le cours
          </button>
        )}
      </div>
    </div>
  );
}
