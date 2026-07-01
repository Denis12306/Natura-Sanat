import { useEffect, useState } from "react";

import {
  useParams,
} from "react-router-dom";

import axios from "../../api/axios";

export default function ProfessionalDetailPage() {

  const { id } = useParams();

  const [professional, setProfessional] =
    useState(null);

  useEffect(() => {

    loadProfessional();

  }, []);

  async function loadProfessional() {

    const response =
      await axios.get(`/professionals/${id}`);

    setProfessional(response.data.data);

  }

  if (!professional) return <p>Chargement...</p>;

  return (

    <div
      style={{
        maxWidth: 900,
        margin: "auto",
      }}
    >

      <img
        src={
          professional.profileImage ||
          "https://unsplash.com/fr/photos/medecin-tenant-un-stethoscope-rouge-hIgeoQjS_iE"
        }
        alt=""
        style={{
          width: "100%",
          borderRadius: 20,
          marginBottom: 30,
        }}
      />

      <h1>

        {professional.user.firstName}{" "}

        {professional.user.lastName}

      </h1>

      <h3>

        {professional.specialty}

      </h3>

      <p>

        📍 {professional.city}

      </p>

      <hr />

      <p>

        {professional.bio}

      </p>

      <h4>

        Contact

      </h4>

      <p>

        📞 {professional.phone}

      </p>

      <p>

        🌍 {professional.website}

      </p>

    </div>

  );

}
