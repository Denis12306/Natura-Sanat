import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import ProfessionalForm from "../../components/forms/ProfessionalForm";

export default function EditProfessionalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/professionals/${id}`);
        setProfile(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      await axios.put(`/professionals/${id}`, data);
      alert("Fiche mise à jour.");
      navigate(`/professionals/${id}`);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour.");
    }
  };

  if (!profile) return <p>Chargement...</p>;

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Modifier ma fiche professionnelle
      </h1>
      <ProfessionalForm
        initialValues={profile}
        onSubmit={handleUpdate}
        submitLabel="Enregistrer"
      />
    </div>
  );
}
