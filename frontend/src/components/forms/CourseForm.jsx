import { useState } from "react";

// Formulaire réutilisable servant à la fois pour la création et l'édition d'un cours.
export default function CourseForm({
  initialValues = {},
  onSubmit,
  submitLabel = "Enregistrer",
}) {
  const [preview, setPreview] = useState(initialValues.image || "");

  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    description: initialValues.description || "",
    category: initialValues.category || "",
    duration: initialValues.duration || "",
    level: initialValues.level || "",
    price: initialValues.price || "",
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
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("duration", formData.duration);
    data.append("level", formData.level);
    data.append("price", formData.price);

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
      {/* Titre */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Titre
        </label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder=""
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
        />
      </div>

      {/* Catégorie */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Catégorie
        </label>
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder=""
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
        />
      </div>

      {/* Durée + Niveau côte à côte */}
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Durée (en heures)
          </label>
          <input
            type="number"
            name="duration"
            min="0"
            value={formData.duration}
            onChange={handleChange}
            placeholder=""
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Niveau
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600 bg-white"
          >
            <option value="" disabled hidden>
            </option>
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Tarif (€)
          </label>

          <input
            type="number"
            min="0"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder=""
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Description
        </label>
        <textarea
          rows={10}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Décrivez le contenu du cours..."
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg leading-8 outline-none transition focus:border-green-600"
        />
      </div>

      {/* Image */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Image de couverture
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
