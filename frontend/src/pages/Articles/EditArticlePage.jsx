import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../../api/axios";
import ArticleForm from "../../components/ArticleForm";

export default function EditArticlePage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [id]);

  async function loadArticle() {

    try {

      const response = await axios.get(`/articles/${id}`);

      setArticle(response.data.data);

    } catch (error) {

      console.error(error);

    }

  }

  async function handleUpdate(data) {

    try {

      await axios.put(`/articles/${id}`, data);

      alert("Article modifié");

      navigate("/dashboard/professional/articles");

    } catch (error) {

      console.error(error);

      alert("Erreur lors de la modification");

    }

  }

  if (!article) {
    return <p>Chargement...</p>;
  }

  return (

    <div style={{ maxWidth: 900, margin: "40px auto" }}>

      <h1>Modifier un article</h1>

      <ArticleForm
        initialValues={article}
        onSubmit={handleUpdate}
        submitLabel="Modifier"
      />

    </div>

  );

}