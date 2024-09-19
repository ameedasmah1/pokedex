import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import Pokemon from "./components/Pokemon";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["Pokemon"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Pokemon />
    </HydrationBoundary>
  );
}
