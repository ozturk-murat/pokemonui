import {
  clearPokemonDetails,
  fetchPokemonSpecies,
} from "@/app/redux/features/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { PokemonSpecies } from "@/type";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

interface PokemonNameProps {
  name: string;
}

function Description({ name }: PokemonNameProps) {
  const dispatch: AppDispatch = useDispatch();
  const pokemonSpecies = useSelector(
    (state: RootState) => state.pokemon.pokemonSpecies
  ) as unknown as PokemonSpecies;

  useEffect(() => {
    if (name) {
      dispatch(fetchPokemonSpecies(name));
      
    }
    return () => {
      dispatch(clearPokemonDetails());
    };
  }, []);

  const createSummary = () => {
    const entries = pokemonSpecies.flavor_text_entries;
    if (entries && Object.keys(entries).length > 0) {
      const filteredEntries = entries.filter(
        (entry) => entry.language.name === "en"
      );
      if (filteredEntries.length > 0) {
        return filteredEntries[0].flavor_text;
      }
    }
    return "";
  };

 const summary = createSummary();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="subtitle1" color={"#fff"}>{summary}</Typography>
    </Box>
  )
}

export default Description