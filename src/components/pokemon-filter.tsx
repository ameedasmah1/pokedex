"use client";

import { usePokemonGeneration } from "@/hooks/usePokemonGeneration";

type PokemonFilterProps = {
  setGeneration: (gen: string) => void;
};

const PokemonFilter = ({ setGeneration }: PokemonFilterProps) => {
  const { data, error, isLoading } = usePokemonGeneration()

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
