import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import ArticleForm from "../../components/forms/ArticleForm";

export default function CreateArticlePage() {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {

    try {

      await axios.post("/articles", data);

      alert("Article créé");

      navigate("/articles");

    } catch (err) {

      console.error(err);

      alert("Erreur");

    }

  };

  return (

    <div style={{ maxWidth: 800, margin: "40px auto" }}>

      <h1>Nouvel article</h1>

      <ArticleForm

        initialValues={{
          title: "",
          content: "",
          category: "",
          image: "",
        }}

        onSubmit={handleSubmit}

        submitLabel="Publier"

      />

    </div>

  );

}
