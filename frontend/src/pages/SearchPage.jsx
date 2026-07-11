import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function SearchPage(){

    const [params] = useSearchParams();

    const q = params.get("q");

    const [results,setResults]=useState(null);

    useEffect(()=>{

        async function load(){

            const res = await axios.get(`/search?q=${q}`);

            setResults(res.data.data);

        }

        load();

    },[q]);

    if(!results) return <p>Chargement...</p>;

    return(

        <div className="mx-auto max-w-6xl p-10">

            <h1 className="mb-10 text-4xl font-bold">

                Résultats pour "{q}"

            </h1>

            <h2 className="mb-5 text-2xl font-semibold">

                Formations

            </h2>

            {results.courses.map(course=>(

                <div key={course._id}>

                    {course.title}

                </div>

            ))}

            <h2 className="mt-12 mb-5 text-2xl font-semibold">

                Articles

            </h2>

            {results.articles.map(article=>(

                <div key={article._id}>

                    {article.title}

                </div>

            ))}

        </div>

    );

}
