"use client";

import { usePokemonsByGeneration } from "@/hooks/usePokemonByGeneration";
import { usePokemonGeneration } from "@/hooks/usePokemonGeneration";
import { Pokemon } from "@/services/types";
import Link from "next/link";
import { useState } from "react";

const PokemonListClient = ({
  defaultGeneration,
}: {
  defaultGeneration: string;
}) => {
  const [generation, setGeneration] = useState(defaultGeneration);
  const { data: pokemons } = usePokemonsByGeneration({ generation });
  const { data: generations } = usePokemonGeneration();

  console.log(pokemons);
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
      <div className=" flex flex-row gap-x-8">
        <div className="mt-4">
          <h2 className="text-xl font-bold">Pokémon List based by Moves:</h2>
          <ul className="list-disc list-inside mt-2">
            {pokemons?.moves?.length > 0 ? (
              pokemons.moves.map((pokemon: Pokemon) => (
                <li key={pokemon.url} className="text-lg">
                  <Link href={`/${pokemon.name}`}>
                    {pokemon.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No Pokémon found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonListClient;
