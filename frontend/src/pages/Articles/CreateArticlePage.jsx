import { useNavigate } from "react-router-dom";

import axios from "../../api/axios";
import ArticleForm from "../../components/ArticleForm";

export default function CreateArticlePage() {

  const navigate = useNavigate();

  const handleCreate = async (data) => {

    try {

      await axios.post("/articles", data);

      alert("Article créé");

      navigate("/dashboard/professional/articles");

    } catch (error) {

      console.error(error);

      alert("Erreur lors de la création de l'article");

    }

  };

  return (

    <div style={{ maxWidth: 900, margin: "40px auto" }}>

      <h1>Nouvel article</h1>

      <ArticleForm
        initialValues={{}}
        onSubmit={handleCreate}
        submitLabel="Créer"
      />

    </div>

  );

}
