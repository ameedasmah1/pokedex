"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonByGenerations } from "@/services/api";
import { GenerationData } from "@/services/types";
import { getPokemonbyGenerationsQueryOptions } from "@/queryOptions/pockemon";

type PokemonFilterProps = {
  setGeneration: (gen: string) => void;
};

const PokemonFilter = ({ setGeneration }: PokemonFilterProps) => {
  const { data, error, isLoading } = useQuery<GenerationData, Error>({
    ...getPokemonbyGenerationsQueryOptions(),
    queryFn: getPokemonByGenerations,
  });

  if (isLoading) return <div>Loading generations...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
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
        <option value="">Select a generation</option>
        {data?.results.map((generation) => (
          <option key={generation.url} value={generation.name}>
            {generation.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonFilter;
