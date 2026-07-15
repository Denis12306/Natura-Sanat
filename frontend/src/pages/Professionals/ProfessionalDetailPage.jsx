import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../../components/common/LoadingSpinner"
import CommentList from "../../components/CommentList";

// Page de détail d'un professionnel (affiche sa bio, ses spécialités et ses coordonnées)
export default function ProfessionalDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [professional, setProfessional] = useState(null);

  useEffect(() => {
    loadProfessional();
  }, []);

  async function loadProfessional() {
    const response = await axios.get(`/professionals/${id}`);
    setProfessional(response.data.data);
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Es-tu sûr de vouloir supprimer cette fiche ? Cette action est irréversible."
    );
    if (!confirmed) return;

    try {
      await axios.delete(`/professionals/${id}`);
      navigate("/professionals");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  }

  if (!professional) return <p>Chargement...</p>;

  const isOwner = user && professional.user?._id === user._id;
  const isAdmin = user && user.role === "admin";
  const canManage = isOwner || isAdmin;

  return (
    <div style={{ maxWidth: 900, margin: "auto" }} className="p-6">

      <img
        src={
          professional.profileImage ||
          "https://res.cloudinary.com/ddvpdcluh/image/upload/v1782576119/online-marketing-hIgeoQjS_iE-unsplash_x4mvni.jpg"
        }
        alt={professional.user?.firstName}
        className="w-full h-72 object-cover rounded-2xl shadow-lg mb-8"
      />

      <h1 className="text-3xl font-bold text-gray-900">
        {professional.user.firstName} {professional.user.lastName}
      </h1>
      <h3 className="text-lg font-semibold text-green-600 mt-1">
        {professional.specialty}
      </h3>
      <p className="text-gray-500 mt-1 mb-6">📍 {professional.city}</p>

      <hr className="mb-8" />

      <p className="text-gray-700 leading-8 mb-8 whitespace-pre-line">
        {professional.bio}
      </p>

      <h4 className="text-xl font-bold mb-3">Contact</h4>
      <p className="text-gray-700">📞 {professional.phone}</p>
      <p className="text-gray-700 mb-8">🌍 {professional.website}</p>

      {canManage && (
        <div className="flex gap-4">
          <Link
            to={`/professionals/edit/${id}`}
            className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
          >
            Modifier
          </Link>
          <button
            onClick={handleDelete}
            className="rounded-2xl bg-red-100 px-6 py-3 font-semibold text-red-600 hover:bg-red-200 transition"
          >
            Supprimer
          </button>
        </div>
      )}
      <CommentList targetType="Professional" targetId={id} />
    </div>
  );
}
