import { useState } from "react";

// Formulaire réutilisable servant pour la création et l'édition d'un article
export default function ArticleForm({
  initialValues,
  onSubmit,
  submitLabel = "Enregistrer",
}) {
  const [preview, setPreview] = useState(initialValues.image || "");

  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    content: initialValues.content || "",
    category: initialValues.category || "",
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
    data.append("content", formData.content);
    data.append("category", formData.category);

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
          placeholder="Titre de l'article"
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
          placeholder="Ex : Nutrition"
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-green-600"
        />
      </div>

      {/* Contenu */}
      <div>
        <label className="mb-2 block font-semibold text-gray-700">
          Contenu
        </label>

        <textarea
          rows={16}
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Rédigez votre article..."
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
