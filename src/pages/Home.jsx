import React from "react";
import { useFetch } from "../hooks/useFetch";
import RecipiesList from "../components/RecipiesList";

function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return <>{recipies && <RecipiesList recipies={recipies} />}</>;
}

export default Home;
