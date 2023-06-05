"use client";
import React, { useEffect, useState } from "react";

//Material-UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import styled from "@mui/material/styles/styled";
import Card from "../components/Card";

//Utils
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/features/apiSlice";
import { AppDispatch, RootState } from "../redux/store";

//Components
import LoadingAnimation from "../components/Loading";

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
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPokemons({ limit, offset }));
  }, [limit, offset]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    setOffset((value - 1) * 10);
    setLimit(value * 10);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledMain>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        pt={10}
        rowSpacing={4}
        justifyContent={"center"}
      >
        {pokemons && pokemons.length !== 0 ? (
          pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemon={{ name: pokemon.name, url: pokemon.url }}
            />
          ))
        ) : (
          <LoadingAnimation />
        )}
        {pokemons && pokemons.length !== 0 && (
          <Grid item sm={12} display={"flex"} justifyContent={"center"}>
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={10}
                page={currentPage}
                color="secondary"
                onChange={handleChangePage}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </StyledMain>
  );
}

export default PokemonList;
