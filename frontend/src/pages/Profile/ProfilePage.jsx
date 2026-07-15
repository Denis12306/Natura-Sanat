import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

// Page du Profil
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        // utilisateur connecté
        const me = await axios.get("/auth/me");
        setUser(me.data.data);

        // si professionnel, récupérer sa fiche
        if (me.data.data.role === "professional") {
          try {
            const pro = await axios.get("/professionals/me");
            setProfile(pro.data.data);
          } catch {
            setProfile(null);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadProfile();
  }, []);

  if (!user) return <p className="p-10">Chargement...</p>;

  return (
    <div className="mx-auto max-w-5xl p-10">

      <h1 className="mb-8 text-4xl font-bold">
        Bonjour {user.firstName} 👋
      </h1>

      <div className="rounded-3xl bg-white p-10 shadow-xl">

        <div className="mb-8 flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
            {user.firstName[0]}
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>

            <p className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              {user.role}
            </p>

          </div>

        </div>

        <hr className="my-8" />

        <h3 className="mb-4 text-2xl font-bold">
          Informations personnelles
        </h3>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Prénom</p>
            <p className="font-semibold">{user.firstName}</p>
          </div>

          <div>
            <p className="text-gray-500">Nom</p>
            <p className="font-semibold">{user.lastName}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Rôle</p>
            <p className="font-semibold capitalize">
              {user.role}
            </p>
          </div>

        </div>

        {user.role === "professional" && (
          <>
            <hr className="my-8" />

            <h3 className="mb-4 text-2xl font-bold">
              Ma fiche professionnelle
            </h3>

            {profile ? (
              <>
                <p className="text-lg font-semibold">
                  {profile.specialty}
                </p>

                <p className="text-gray-600">
                  {profile.city}
                </p>

                <div className="mt-6 flex gap-4">

                  <Link
                    to={`/professionals/${profile._id}`}
                    className="rounded-xl bg-green-600 px-6 py-3 text-white"
                  >
                    Voir ma fiche
                  </Link>

                  <Link
                    to={`/professionals/edit/${profile._id}`}
                    className="rounded-xl border border-green-600 px-6 py-3 text-green-700"
                  >
                    Modifier
                  </Link>

                </div>
              </>
            ) : (
              <>
                <p className="mb-6">
                  Vous n'avez pas encore créé votre fiche.
                </p>

                <Link
                  to="/professionals/create"
                  className="rounded-xl bg-green-600 px-6 py-3 text-white"
                >
                  Créer ma fiche
                </Link>
              </>
            )}
          </>
        )}

        <hr className="my-8" />

        <h3 className="mb-4 text-2xl font-bold">
          Mon activité
        </h3>

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-2xl bg-green-50 p-6">
            <p className="text-3xl font-bold">0</p>
            <p>Cours commencés</p>
          </div>

          <div className="rounded-2xl bg-green-50 p-6">
            <p className="text-3xl font-bold">0</p>
            <p>Cours terminés</p>
          </div>

          <div className="rounded-2xl bg-green-50 p-6">
            <p className="text-3xl font-bold">0</p>
            <p>Articles favoris</p>
          </div>

        </div>

      </div>

    </div>
  );
}
