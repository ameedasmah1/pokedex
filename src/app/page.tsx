import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import PokemonGenerations from "../components/pokemon-generations";
import { getPokemonbyGenerationsQueryOptions } from "@/queryOptions/pockemon";
import { getPokemonByGenerations } from "@/services/api";

export default async function Home() {
  const queryClient = getQueryClient();

  const pockemon_generation = queryClient.prefetchQuery({
    queryKey: getPokemonbyGenerationsQueryOptions().queryKey,
    queryFn: () => getPokemonByGenerations(),
  });
  await Promise.all([pockemon_generation]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container max-w-7xl mx-auto my-16">
        <PokemonGenerations />
      </div>
    </HydrationBoundary>
  );
}
