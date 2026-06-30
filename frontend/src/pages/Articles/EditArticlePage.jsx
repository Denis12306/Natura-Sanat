import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "../../api/axios";
import ArticleForm from "../../components/forms/ArticleForm";

export default function EditArticlePage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [article, setArticle] = useState(null);

  useEffect(() => {

    const fetchArticle = async () => {

      try {

        const res = await axios.get(`/articles/${id}`);

        setArticle(res.data.data);

      } catch (err) {

        console.error(err);

      }

    };

    fetchArticle();

  }, [id]);

  const handleUpdate = async (data) => {

    try {

      await axios.put(`/article/${id}`, data);

      alert("Article modifié.");

      navigate("/dashboard/professional/article");

    } catch (err) {

      console.error(err);

      alert("Erreur.");

    }

  };

  if (!article) {
    return <p>Chargement...</p>;
  }

  return (

    <div style={{ maxWidth: 700, margin: "40px auto" }}>

      <h1>Modifier l'article</h1>

      <ArticleForm
        initialValues={article}
        onSubmit={handleUpdate}
        submitLabel="Enregistrer"
      />

    </div>

  );

}
