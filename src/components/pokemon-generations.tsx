"use client";

import { useState } from "react";
import PokemonFilter from "./pokemon-filter";
import PokemonList from "./ pokemon-list";

const PokemonGenerations = () => {
  const [generation, setGeneration] = useState<string>("generation-i");

  return (
    <div>
      <PokemonFilter setGeneration={setGeneration} />
      <PokemonList generation={generation} />
    </div>
  );
};

export default PokemonGenerations;
