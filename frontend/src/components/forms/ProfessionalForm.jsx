import { useState } from "react";
import axios from "../../api/axios";

export default function ProfessionalForm({
  initialValues = {},
  onSubmit,
  submitLabel = "Enregistrer",
}) {
  const [preview, setPreview] = useState(initialValues.profileImage || "");

  const [formData, setFormData] = useState({
    specialty: initialValues.specialty || "",
    city: initialValues.city || "",
    bio: initialValues.bio || "",
    phone: initialValues.phone || "",
    website: initialValues.website || "",
    image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("specialty", formData.specialty);
    data.append("city", formData.city);
    data.append("bio", formData.bio);
    data.append("phone", formData.phone);
    data.append("website", formData.website);

    if (formData.image) {
      data.append("image", formData.image);
    }

    onSubmit(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl space-y-8 rounded-3xl bg-white p-10 shadow-xl"
    >
      {/* Spécialité */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Spécialité
        </label>
        <input
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Ex : Naturopathe, Phytothérapeute..."
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
        />
      </div>

      {/* Ville */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Ville
        </label>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Ex : Lyon"
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
        />
      </div>

      {/* Téléphone + Site web côte à côte */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Téléphone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Site web
          </label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Présentation
        </label>
        <textarea
          rows={10}
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          maxLength={10000}
          placeholder="Présentez votre parcours, votre approche..."
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg leading-8 outline-none transition focus:border-green-600"
        />
      </div>

      {/* Photo de profil */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Photo de profil
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="block w-full rounded-xl border border-gray-300 p-3"
        />
      </div>

      {preview && (
        <div>
          <img
            src={preview}
            alt="Aperçu"
            className="max-h-80 rounded-2xl shadow-lg"
          />
        </div>
      )}

      <button
        type="submit"
        className="rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
      >
        {submitLabel}
      </button>
    </form>
  );
}
