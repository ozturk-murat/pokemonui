export interface PokemonDetails {
  id: number;
  moves: {
    move: {
      name: string;
    };
  };
  name: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonSpecies {
  name: string;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
}
