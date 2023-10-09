import React from "react";
import { useFetch } from "../hooks/useFetch";
import RecipiesList from "../components/RecipiesList";

function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("https://spotless-understood-star.glitch.me/recipes");
  return <>{recipies && <RecipiesList recipies={recipies} />}</>;
}

export default Home;
