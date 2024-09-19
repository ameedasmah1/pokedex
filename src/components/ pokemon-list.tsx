"use client";

import { useQuery } from "@tanstack/react-query";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonListProps = {
  generation: string;
};

const PokemonList = ({ generation }: PokemonListProps) => {
  console.log({ generation });
  
  const { data, error, isLoading } = useQuery<Pokemon[], Error>({
    queryKey: ["pokemon", generation],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      return json.pokemon_species; 
    },
    enabled: !!generation, 
    staleTime: 1000 * 60 * 5, 
  });

  if (isLoading) return <div>Loading Pokémon...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <div>
      <h2 className="text-2xl font-bold">Pokémon List</h2>
      <ul>
        {(data ?? []).map((pokemon) => (
          <li key={pokemon.url}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
