import { useEffect, useState } from "react";
import axios from "@/api/axios";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import AdminButton from "@/components/admin/AdminButton";
import StatusBadge from "@/components/admin/StatusBadge";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import DeleteModal from "../../../components/admin/DeleteModal";
import EmptyState from "@/components/admin/EmptyState";

// Page de création de la fonction UsersPage
export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Impossible de récupérer les utilisateurs.");
    } finally {
      setLoading(false);
    }
  };

  // Suppression d'un user
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer cet utilisateur ?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  };

  const columns = [
    {
      key: "firstName",
      label: "Prénom",
    },
    {
      key: "lastName",
      label: "Nom",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Rôle",
      render: (user) => (
        <StatusBadge role={user.role} />
      ),
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <AdminHeader
        title="Gestion des utilisateurs"
        subtitle="Liste des utilisateurs de Natura Sanat"
      />

      {loading ? (
        <LoadingSpinner />
      ) : users.length === 0 ? (
        <EmptyState text="Aucun utilisateur trouvé." />
      ) : (
        <AdminTable
          columns={columns}
          data={users}
          renderActions={(user) => (
            <AdminButton
              variant="danger"
              onClick={() => deleteUser(user._id)}
            >
              Supprimer
            </AdminButton>
          )}
        />
      )}
    </div>
  );
}
