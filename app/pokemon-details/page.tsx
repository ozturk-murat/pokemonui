"use client";
import React, { useEffect, useState } from "react";

//Material-UI
import styled from "@mui/material/styles/styled";
import Details from "../components/Details/Details";

//Utils
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  clearPokemonDetails,
  fetchPokemonDetails,
} from "../redux/features/apiSlice";
import { PokemonDetails } from "@/type";

//Components
import BackButton from "../components/Details/Back";
import Link from "next/link";

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
  const [pokemonName, setPokemonName] = useState<string | null>(null);

  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemon.pokemonDetails
  ) as unknown as PokemonDetails;

  useEffect(() => {
    const url = new URL(window.location.href);
    const pokemonName = url.searchParams.get("name");
    if (pokemonName) {
      dispatch(fetchPokemonDetails(pokemonName));
    }
    return () => {
      dispatch(clearPokemonDetails());
    };
  }, [dispatch, pokemonName]);

  return (
    <StyledMain>
      <Link href={"/pokemon-list"}>
      <BackButton/>
      </Link>
      <Details pokemonDetails={pokemonDetails} />
    </StyledMain>
  );
}

export default PokemonList;
