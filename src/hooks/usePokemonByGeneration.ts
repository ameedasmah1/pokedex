import { getPokemonByGenerations } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const getQueryOptions = ({ generation }: { generation: string }) => ({
  queryKey: ["pokemons-by-generation", generation],
  queryFn: () => getPokemonByGenerations({ generation: generation }),
});

export const usePokemonsByGeneration = ({ generation }: { generation: string }) =>
  useQuery(getQueryOptions({ generation }));
