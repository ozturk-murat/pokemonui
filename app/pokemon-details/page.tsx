"use client";
import React, { useEffect } from "react";
import { styled } from "@mui/material";
import Details from "../components/Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  clearPokemonDetails,
  fetchPokemonDetails,
} from "../redux/features/apiSlice";
import { PokemonDetails } from "@/type";

const StyledMain = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "center !important",
  alignItems: "center",
  height: "auto",
  paddingBottom: "5rem",
  minHeight: "75vh",
  margin: "0 10vw",
}));

function PokemonList() {
  const dispatch: AppDispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemon.pokemonDetails
  ) as unknown as PokemonDetails;

  useEffect(() => {
    const url = new URL(window.location.href);
    const name = url.searchParams.get("name");
    if (name) {
      dispatch(fetchPokemonDetails(name));
    }
    return () => {
      dispatch(clearPokemonDetails());
    };
  }, []);

  return (
    <StyledMain>
      <Details pokemonDetails={pokemonDetails} />
    </StyledMain>
  );
}

export default PokemonList;
