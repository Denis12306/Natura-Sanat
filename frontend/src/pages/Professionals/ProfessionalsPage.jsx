import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "../../api/axios";

import ProfessionalCard from "../../components/ProfessionalCard";

export default function ProfessionalsPage() {
  const [professionals, setProfessionals] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const { user } = useAuth();

  const canCreate = user && (user.role === "professional" || user.role === "admin");

  useEffect(() => {
    fetchProfessionals();
  }, []);

  async function fetchProfessionals() {
    try {
      const response =
        await axios.get("/professionals");

      setProfessionals(response.data.data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  const filtered =
    professionals.filter((professional) => {
      const fullName =
        `${professional.user?.firstName} ${professional.user?.lastName}`;

      return (
        fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        professional.city
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        professional.specialty
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

  return (
    <div>
      {canCreate && (
        <Link
          to="/professionals/create"
          style={{
            display: "inline-block",
            backgroundColor: "#3d5d36",
            color: "white",
            padding: "12px 24px",
            borderRadius: "16px",
            fontWeight: "600",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          + Créer ma fiche professionnelle
        </Link>
      )}
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "34px",
          color: "#3d5d36",
        }}
      >Nos Naturothérapeutes</h1>

      <input
        placeholder="Recherche..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: 12,
          width: 350,
          marginBottom: 30,
          borderRadius: 12,
        }}
      />

      {loading && <p>Chargement...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(280px,1fr))",
          gap: 25,
        }}
      >
        {filtered.map((professional) => (
          <ProfessionalCard
            key={professional._id}
            professional={professional}
          />
        ))}
      </div>

    </div>
  );
}
