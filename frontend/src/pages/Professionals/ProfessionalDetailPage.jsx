import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

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
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <img
        src={
          professional.profileImage ||
          "https://res.cloudinary.com/ddvpdcluh/image/upload/v1782576119/online-marketing-hIgeoQjS_iE-unsplash_x4mvni.jpg"
        }
        alt={professional.user?.firstName}
        style={{
          width: "100%",
          borderRadius: 20,
          marginBottom: 30,
        }}
      />

      <h1>
        {professional.user.firstName} {professional.user.lastName}
      </h1>
      <h3>{professional.specialty}</h3>
      <p>📍 {professional.city}</p>
      <hr />
      <p>{professional.bio}</p>

      <h4>Contact</h4>
      <p>📞 {professional.phone}</p>
      <p>🌍 {professional.website}</p>

      {canManage && (
        <div className="flex gap-4 mt-8">
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
    </div>
  );
}
