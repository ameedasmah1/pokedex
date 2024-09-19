import { getQueryOptions } from "@/hooks/usePokemonByGeneration";
import getQueryClient from "@/lib/getQueryClient";
import { GenerationData } from "@/services/types";
import PokemonListClient from "./pokemon-list-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const PokemonListServer = async ({generations}:{generations: GenerationData}) => {
    const queryClient = getQueryClient();

    const defaultGeneration = generations.results[0].name

    const { queryFn, queryKey } = getQueryOptions({generation: defaultGeneration});

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>
    <PokemonListClient defaultGeneration={defaultGeneration} />
  </HydrationBoundary>
};

export default PokemonListServer;
