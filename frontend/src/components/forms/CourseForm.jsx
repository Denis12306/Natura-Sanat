import { useState } from "react";

export default function CourseForm({
  initialValues,
  onSubmit,
  submitLabel = "Enregistrer",
}) {
  const [preview, setPreview] = useState(initialValues.image || "");

  const [formData, setFormData] = useState({
    title: initialValues.title || "",
    description: initialValues.description || "",
    category: initialValues.category || "",
    duration: initialValues.duration || "",
    level: initialValues.level || "beginner",
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
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("duration", formData.duration);
    data.append("level", formData.level);

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
        name="description"
        placeholder="Description"
        value={formData.description}
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
        type="number"
        name="duration"
        placeholder="Durée"
        value={formData.duration}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="level"
        value={formData.level}
        onChange={handleChange}
      >
        <option value="beginner">Débutant</option>
        <option value="intermediate">Intermédiaire</option>
        <option value="advanced">Avancé</option>
      </select>

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
          alt=""
          width={250}
          style={{
            borderRadius: 12,
            marginBottom: 20,
          }}
        />
      )}

      <br />

      <button type="submit">
        {submitLabel}
      </button>

    </form>
  );
}
