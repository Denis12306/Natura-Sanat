import { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("category", formData.category);

    if (formData.image) {
      data.append("image", formData.image);
    }

    onSubmit(data);
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

      <textarea
        rows={10}
        name="content"
        placeholder="Contenu"
        value={formData.content}
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

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <br /><br />

      {preview && (
        <img
          src={preview}
          width={250}
          alt=""
        />
      )}

      <br /><br />

      <button type="submit">
        {submitLabel}
      </button>

    </form>
  );
}
