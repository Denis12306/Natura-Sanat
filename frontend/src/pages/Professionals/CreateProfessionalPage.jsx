import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import ProfessionalForm from "../../components/forms/ProfessionalForm";

export default function CreateProfessionalPage() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const res = await axios.post("/professionals", data);
      alert("Fiche professionnelle créée.");
      navigate(`/professionals/${res.data.data._id}`);
    } catch (err) {
      console.error(err);

      if (err.response?.data?.message === "Profile already exists") {
        alert("Vous avez déjà une fiche professionnelle. Rendez-vous sur votre profil pour la modifier.");
      } else {
        alert("Erreur lors de la création.");
      }
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Créer ma fiche professionnelle
      </h1>
      <ProfessionalForm onSubmit={handleCreate} submitLabel="Créer" />
    </div>
  );
}
