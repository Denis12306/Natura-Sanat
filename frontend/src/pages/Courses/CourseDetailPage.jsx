import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { getCourseById } from "../../api/courses";
import { useAuth } from "../../context/AuthContext";

export default function CourseDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
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

    // Si l'utilisateur clique sur annuler ou ne met rien
    if (newPrice === null || newPrice.trim() === "") return;

    const priceAsNumber = parseFloat(newPrice);

    if (isNaN(priceAsNumber)) {
      alert("Veuillez entrer un nombre valide.");
      return;
    }

    try {
      // Appelle ton API pour mettre à jour le prix
      await axios.put(`/courses/${id}`, { price: priceAsNumber });

      // Met à jour l'affichage localement sans recharger la page
      setCourse((prev) => ({ ...prev, price: priceAsNumber }));
      alert("Le tarif a bien été modifié !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la modification du tarif.");
    }
  };

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

      <p className="text-2xl font-bold text-green-600">
        {course.price !== undefined ? `${course.price} €` : "Prix non renseigné"}
      </p>

      {user && (user.role === "professional" || user.role === "admin") && (
        <button
          onClick={handleUpdatePrice}
          className="ml-4 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Modifier le tarif
        </button>
      )}
    </div>
  );
}
