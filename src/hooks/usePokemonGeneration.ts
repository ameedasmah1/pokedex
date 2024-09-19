import { getPokemonGenerations } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const pokemonGenerationQueryKey = "pokemon-generation";

export const getQueryOptions = () => ({
  queryKey: [pokemonGenerationQueryKey],
  queryFn: () => getPokemonGenerations(),
});

export const usePokemonGeneration = () => useQuery(getQueryOptions());
