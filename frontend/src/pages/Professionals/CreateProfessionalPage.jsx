import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import ProfessionalForm from "../../components/forms/ProfessionalForm";
import { useAuth } from "../../context/AuthContext";

// Page de création d'une fiche professionnelle
export default function CreateProfessionalPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [mode, setMode] = useState("existing");
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "professional",
  });

  useEffect(() => {
    if (!isAdmin) return;

    const fetchUsers = async () => {
      try {
        const res = await axios.get("/users");
        const eligibleUsers = res.data.data.filter(
          (u) => u.role === "professional" || u.role === "admin"
        );
        setUsers(eligibleUsers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, [isAdmin]);

  function handleNewUserChange(e) {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  }

  const handleCreate = async (formData) => {
    try {
      let targetUserId = selectedUserId;

      // Si admin en mode "nouvel utilisateur" : on crée d'abord le compte
      if (isAdmin && mode === "new") {
        const res = await axios.post("/users", newUser);
        targetUserId = res.data.data._id;
      }

      if (isAdmin && targetUserId) {
        formData.append("userId", targetUserId);
      }

      const res = await axios.post("/professionals", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Fiche professionnelle créée.");
      navigate(`/professionals/${res.data.data._id}`);
    } catch (err) {
      console.error(err);

      if (err.response?.data?.message === "User already exists") {
        alert("Un compte existe déjà avec cet email.");
      } else if (err.response?.data?.message === "Profile already exists") {
        alert("Cet utilisateur a déjà une fiche professionnelle.");
      } else {
        alert("Erreur lors de la création.");
      }
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        {isAdmin ? "Créer une fiche professionnelle" : "Créer ma fiche professionnelle"}
      </h1>

      {isAdmin && (
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 space-y-6">

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setMode("existing")}
              className={`px-5 py-3 rounded-xl font-semibold transition ${
                mode === "existing"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Utilisateur existant
            </button>
            <button
              type="button"
              onClick={() => setMode("new")}
              className={`px-5 py-3 rounded-xl font-semibold transition ${
                mode === "new"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Nouvel utilisateur
            </button>
          </div>

          {mode === "existing" ? (
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Attribuer cette fiche à
              </label>
              <select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
              >
                <option value="">-- Sélectionner un utilisateur --</option>
                {users.map((u) => (
                  <option key={u._id} value={u._id}>
                    {u.firstName} {u.lastName} ({u.email})
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleNewUserChange}
                  placeholder="Prénom"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
                />
                <input
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleNewUserChange}
                  placeholder="Nom"
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
                />
              </div>

              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleNewUserChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
              />

              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleNewUserChange}
                placeholder="Mot de passe temporaire"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
              />

              <select
                name="role"
                value={newUser.role}
                onChange={handleNewUserChange}
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
              >
                <option value="professional">Professionnel</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
        </div>
      )}

      <ProfessionalForm onSubmit={handleCreate} submitLabel="Créer" />
    </div>
  );
}
