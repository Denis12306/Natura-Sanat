import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Trees } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import hero, { images } from "../../assets/images";
import axios from "../../api/axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", formData);

      const user = response.data.data.user;
      const token = response.data.data.token;

      login(user);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-stretch">

        {/* TITRE - occupe toute la largeur */}
        <div className="hidden lg:block lg:col-span-2 space-y-6 mb-10">
          <span className="text-4xl flex items-center gap-2 text-green-600 font-medium">
            <Trees size={30} />
            Santé naturelle, vie équilibrée
          </span>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Connectez-vous afin d'accéder à vos formations, vos articles et
            retrouver vos professionnels favoris.
          </h1>
        </div>

        {/* IMAGE - gauche, même hauteur que la carte */}
        <div className="hidden lg:block h-100">
          <img
            src={images.hero}
            alt="hero"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* CARTE DE CONNEXION - droite */}
        <div className="flex items-center justify-center lg:justify-start min-h-screen lg:min-h-0 py-12 lg:py-0">
          <div className="w-full max-w-lg h-full rounded-3xl bg-white shadow-2xl p-14 flex flex-col justify-between">

            {/* BLOC HAUT : logo + titre */}
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="bg-green-100 p-6 rounded-full">
                  <Trees size={64} className="text-green-600" />
                </div>
              </div>

              <h2 className="flex justify-center text-4xl font-bold tracking-tight">
                Bienvenue
              </h2>

              <p className="text-gray-500 flex justify-center leading-relaxed">
                Heureux de vous revoir.
              </p>
            </div>

            {/* BLOC MILIEU : formulaire */}
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
              {/* EMAIL */}
              <div>
                <label className="font-medium">Adresse email</label>
                <div className="mt-2 flex items-center rounded-xl border px-4 py-4">
                  <Mail className="text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    className="ml-3 w-full outline-none"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="font-medium">Mot de passe</label>
                <div className="mt-2 flex items-center rounded-xl border px-4 py-4">
                  <Lock className="text-gray-400" size={18} />
                  <input
                    type="password"
                    name="password"
                    className="ml-3 w-full outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* BOUTON */}
              <button className="w-full rounded-xl bg-green-600 py-4 text-white font-semibold hover:bg-green-700 transition">
                Se connecter
              </button>
            </form>

            {/* BLOC BAS : lien créer un compte */}
            <p className="text-center text-gray-500">
              Pas encore de compte ?
              <Link to="/register" className="ml-2 font-semibold text-green-600 hover:underline">
                Créer un compte
              </Link>
            </p>

          </div>
        </div>
      </div>

    </div>
);
}
