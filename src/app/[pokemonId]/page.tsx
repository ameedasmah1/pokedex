import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getPokemonById } from "@/services/api"; 
import PokemonDetails from "@/components/pokemon-details";

export default async function PokemonPage({ params }: { params: { pokemonId: string } }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['pokemon', params.pokemonId], // Use the pokemonId from params
    queryFn: () => getPokemonById(params.pokemonId), // Fetch Pokémon by ID
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container max-w-7xl mx-auto my-16">
        <PokemonDetails pokemonId={params.pokemonId} />
      </div>
    </HydrationBoundary>
  );
}
