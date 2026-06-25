import { useEffect, useState } from "react";

import { getProfessionals } from "../../api/professionals";
import ProfessionalCard from "../../components/ProfessionalCard";

export default function ProfessionalsPage() {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      const data = await getProfessionals();
      setProfessionals(response.data.data);
    };

    fetchProfessionals();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Nos professionnels
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional._id}
            professional={professional}
          />
        ))}
      </div>
    </div>
  );
}
