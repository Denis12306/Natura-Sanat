import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { getCourseById } from "../../api/courses";
import { useAuth } from "../../context/AuthContext";
import CommentList from "../../components/CommentList";

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
  const isOwner = user && course.author?._id === user._id;
  const canEdit = isOwner || isAdmin;

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

      {user ? (

        <div className="mb-8 space-y-6 text-lg leading-9 text-gray-700">
          {course.description
            ? course.description
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            : (
              <p>Aucune description.</p>
            )}
        </div>

      ) : (

        <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-8">

          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            🔒 Formation réservée aux membres
          </h2>

          <p className="mb-6 text-gray-600">
            Connectez-vous ou créez un compte gratuitement pour accéder au contenu complet de cette formation.
          </p>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Se connecter
            </Link>

            <Link
              to="/register"
              className="rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
            >
              Créer un compte
            </Link>

          </div>

        </div>

      )}

      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-2xl font-bold text-green-600">
          {course.price !== undefined ? `${course.price} €` : "Prix non renseigné"}
        </p>

        {user && (user.role === "admin") && (
          <button
            onClick={handleUpdatePrice}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Modifier le tarif
          </button>
        )}

        {user && canEdit && (
          <Link
            to={`/courses/edit/${id}`}
            className="text-sm bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Modifier le cours
          </Link>
        )}

        {user && isAdmin && (
          <button
            onClick={handleDelete}
            className="text-sm bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Supprimer le cours
          </button>
        )}
      </div>
      <CommentList targetType="Course" targetId={id} />
    </div>
  );
}
