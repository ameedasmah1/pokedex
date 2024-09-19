import { QueryClient } from "@tanstack/react-query";
import { DefaultOptions } from "@tanstack/react-query";
import { cache } from "react";

export const queryClientOptions: {
  defaultOptions: DefaultOptions;
} = {
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
};

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: queryClientOptions.defaultOptions,
    })
);

export default getQueryClient;
