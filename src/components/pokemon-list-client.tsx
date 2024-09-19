"use client";

import { usePokemonsByGeneration } from "@/hooks/usePokemonByGeneration";
import { usePokemonGeneration } from "@/hooks/usePokemonGeneration";
import { useState } from "react";

const PokemonListClient = ({
  defaultGeneration,
}: {
  defaultGeneration: string;
}) => {
  const [generation, setGeneration] = useState(defaultGeneration);
  const { data: pokemons } = usePokemonsByGeneration({ generation });
  const { data: generations } = usePokemonGeneration();
  
  return (
    <div>
      <div className="mt-8">
        <label htmlFor="generation-select" className="text-lg font-bold">
          Filter by Generation:
        </label>
        <select
          id="generation-select"
          className="mt-2 border border-gray-300 rounded p-2"
          onChange={(e) => setGeneration(e.target.value)}
          defaultValue="generation-i"
        >
          {generations?.results.map((generation) => (
            <option key={generation.url} value={generation.name}>
              {generation.name}
            </option>
          ))}
        </select>
      </div>
      {JSON.stringify(pokemons)}
    </div>
  );
};

export default PokemonListClient;
