import { useState } from "react";

export default function ArticleForm({
  initialValues,
  onSubmit,
  submitLabel = "Enregistrer",
}) {
  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    content: initialValues.content || "",
    category: initialValues.category || "",
    published: initialValues.published || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="title"
        placeholder="Titre"
        value={formData.title}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="category"
        placeholder="Catégorie"
        value={formData.category}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        rows={12}
        name="content"
        placeholder="Contenu"
        value={formData.content}
        onChange={handleChange}
      />

      <br /><br />

      <label>

        <input
          type="checkbox"
          name="published"
          checked={formData.published}
          onChange={handleChange}
        />

        Publier immédiatement

      </label>

      <br /><br />

      <button type="submit">
        {submitLabel}
      </button>

    </form>
  );
}
