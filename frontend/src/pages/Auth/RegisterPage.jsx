import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("/auth/register", formData);

      login(res.data.data.user, res.data.data.token);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#d4e1ce] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-4xl">

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-xl font-semibold text-green-700">
            🌿 Natura Sanat
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Créer un compte
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xl leading-9 text-gray-600">
            Rejoignez Natura Sanat et accédez à des formations,
            des articles spécialisés ainsi qu'à un réseau de professionnels certifiés.
          </p>

        </div>

        <div className="rounded-[10px] bg-white p-26 shadow-4xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Prénom
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#5D7C50]"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium text-gray-700">
                  Nom
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#5D7C50]"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block font-medium text-gray-700">
                Adresse e-mail
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#5D7C50]"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium text-gray-700">
                Mot de passe
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#5D7C50]"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-2xl bg-[#5D7C50] py-4 text-lg font-semibold text-white transition hover:bg-[#4F6C44]"
            >
              {loading
                ? "Création du compte..."
                : "Créer mon compte"}
            </button>

          </form>

          <div className="my-8 h-px bg-gray-200"></div>

          <p className="text-center text-gray-600">

            Vous possédez déjà un compte ?

            <Link
              to="/login"
              className="ml-2 font-semibold text-[#5D7C50] hover:underline"
            >
              Se connecter
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
