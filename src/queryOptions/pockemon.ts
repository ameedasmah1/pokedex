import { getPokemonGenerations } from "@/services/api";

export const pokemonGenerationQueryKey = "pokemon-generation";

export const getPokemonGenerationsQueryOptions = () => ({
  queryKey: [pokemonGenerationQueryKey],
  queryFn: () => getPokemonGenerations(),
});
