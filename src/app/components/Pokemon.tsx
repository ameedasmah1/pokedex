"use client";

import { useQuery } from "@tanstack/react-query";

const Pokemon = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Pokemon"], // Same queryKey used for prefetching
    queryFn: () => Promise.resolve({}), // Provide an empty function to avoid refetching
    // Note: The data will already be available due to hydration
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <div className="pokemon-container">
      <h1 className="text-2xl font-bold">x</h1>
    </div>
  );
};

export default Pokemon;
