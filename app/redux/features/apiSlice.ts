// apiSlice.ts

import { PokemonDetails, PokemonSpecies } from "@/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface ApiState {
  pokemons: Pokemon[];
  pokemonDetails: PokemonDetails[];
  pokemonSpecies: PokemonSpecies[];
}

const initialState: ApiState = {
  pokemons: [],
  pokemonDetails: [],
  pokemonSpecies: [],
};

const baseUrl = "https://pokeapi.co/api/v2/";

export const fetchPokemons = createAsyncThunk(
  "api/fetchPokemons",
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const response = await axios.get(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemons = response.data.results.map((pokemon: Pokemon) => ({
      ...pokemon,
    }));
    return pokemons;
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  "api/fetchPokemonDetails",
  async (name: string) => {
    const response = await axios.get(baseUrl + "pokemon/" + name);
    const pokemonDetails = response.data;

    return pokemonDetails;
  }
);

export const fetchPokemonSpecies = createAsyncThunk(
  "api/fetchPokemonSpecies",
  async (name: string) => {
    const response = await axios.get(baseUrl + "pokemon-species/" + name);
    const pokemonSpecies = response.data;
    
    return pokemonSpecies;
  }
);

export const clearPokemonDetails = createAsyncThunk(
  "api/clearPokemonDetails",
  async () => {
    return [];
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      //POKE API'de limit ve offsetlerin çalışmasında tutarsızlık olduğu için Array.prototype.slice() kullanılmıştır.
      state.pokemons = action.payload.slice(0, 10);
    });

    builder.addCase(fetchPokemonDetails.fulfilled, (state, action) => {
      state.pokemonDetails = action.payload;
    });

    builder.addCase(fetchPokemonSpecies.fulfilled, (state, action) => {
      state.pokemonSpecies = action.payload;
    });

    builder.addCase(clearPokemonDetails.fulfilled, (state, action) => {
      state.pokemonDetails = action.payload;
      state.pokemonSpecies = action.payload;
    });
  },
});

export default apiSlice.reducer;
