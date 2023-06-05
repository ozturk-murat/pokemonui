import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DetailsImage from "./DetailsImage";
import { PokemonDetails } from "@/type";
import Types from "./Types";
import LoadingAnimation from "../Loading";
import Description from "./Description";
import Moves from "./Moves";
import PokemonChart from "./Chart";

interface DetailsProps {
  pokemonDetails: PokemonDetails;
}

const GridContainer = styled(Grid)(({}) => ({
  backgroundColor: "hsla(0,0%,100%,.100)",
  boxShadow: "0 5px 15px rgba(0,0,0,.35)",
  borderRadius: "0.725rem",
}));

const StyledItemImage = styled(Grid)(({}) => ({
  display: "flex",
  alignItems: "center",
  height: "45vh",
  fontStyle: "bold",
  fontWeight: 600,
}));

const StyleGridItem = styled(Grid)(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 20
}));

function Details({ pokemonDetails }: DetailsProps) {
  return (
    <>
      {Object.keys(pokemonDetails).length !== 0 ? (
        <Container maxWidth="lg">
          <GridContainer container>
            <StyledItemImage
              p={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-evenly"
              textAlign="center"
              sm={12}
              item
            >
              <DetailsImage
                imageUrl={
                  pokemonDetails.sprites?.other?.dream_world?.front_default
                }
              />
              <Typography variant="h4">{pokemonDetails.name}</Typography>
              <Types types={pokemonDetails.types} />
            </StyledItemImage>
            <StyleGridItem
              sm={12}
              md={4}
              item
            >
              <Description name={pokemonDetails.name} />
            </StyleGridItem>
            <StyleGridItem
              sm={12}
              md={4}
              item
            >
              <PokemonChart pokemonDetails={pokemonDetails} />
            </StyleGridItem>
            <StyleGridItem
              sm={12}
              md={4}
              item
            ></StyleGridItem>
          </GridContainer>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}

export default Details;
