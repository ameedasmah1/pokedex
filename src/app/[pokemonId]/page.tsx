import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getPokemonById } from "@/services/api";
import PokemonDetails from "@/components/pokemon-details";

export default async function PokemonPage({ params }: { params: { pokemonId: string } }) {
  const queryClient = getQueryClient();
  const { pokemonId } = params;

  await queryClient.prefetchQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemonById(pokemonId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container max-w-7xl mx-auto my-16">
        <PokemonDetails/>
      </div>
    </HydrationBoundary>
  );
}
