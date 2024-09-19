import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getQueryOptions } from "@/hooks/usePokemonGeneration";
import PokemonListServer from "@/components/pokemon-list-server";

export default async function Home() {
  const queryClient = getQueryClient();
  const { queryFn, queryKey } = getQueryOptions();

  const generations = await queryClient.fetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container max-w-7xl mx-auto my-16">
        <PokemonListServer generations={generations} />
      </div>
    </HydrationBoundary>
  );
}
