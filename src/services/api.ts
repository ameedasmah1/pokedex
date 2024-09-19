import { GenerationData } from "./types";

export const getPokemonGenerations = async (): Promise<GenerationData> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/generation");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log({ err });
    throw err;
  }
};

export const getPokemonByGenerations = async ({
  generation,
}: {
  generation: string;
}) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/generation/${generation}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log({ err });
    throw err;
  }
};

export const getPokemonById = async (pokemonId: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log({ err });
    throw err;
  }
};
