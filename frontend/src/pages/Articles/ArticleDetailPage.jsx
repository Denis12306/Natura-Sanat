import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "../../api/axios";

export default function ArticleDetailPage() {

  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {

    loadArticle();

  }, []);

  async function loadArticle() {

    const response =
      await axios.get(`/articles/${id}`);

    setArticle(response.data.data);

  }

  if (!article) return <p>Chargement...</p>;

  return (

    <div
      style={{
        maxWidth: 900,
        margin: "auto",
      }}
    >

      <h1>{article.title}</h1>

      <p>

        {article.category}

      </p>

      <hr />

      <p
        style={{
          whiteSpace: "pre-line",
          lineHeight: 1.8,
        }}
      >
        {article.content}
      </p>

    </div>

  );

}
