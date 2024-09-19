export type GenerationResult = {
    name: string;
    url: string;
  };
  
  export type GenerationData = {
    results: GenerationResult[];
  };


  export type Pokemon = {
    url: string;
    name: string;
  }
  
  export type PokemonData = {
    moves: Pokemon[];
  }