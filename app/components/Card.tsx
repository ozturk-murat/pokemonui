import React, { useEffect, useState } from "react";

//Material-UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import { capitalize } from "@mui/material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Components
import Link from "next/link";
import Image from "next/image";
import { PokemonDetails } from "@/type";

interface CardProps {
  pokemon: PokemonDetails;
}

const icons = [
  { id: 1, name: "bug", icon: "bug.svg" },
  { id: 2, name: "dark", icon: "dark.svg" },
  { id: 3, name: "dragon", icon: "dragon.svg" },
  { id: 4, name: "electric", icon: "electric.svg" },
  { id: 5, name: "fairy", icon: "fairy.svg" },
  { id: 6, name: "fighting", icon: "fighting.svg" },
  { id: 7, name: "fire", icon: "fire.svg" },
  { id: 8, name: "flying", icon: "flying.svg" },
  { id: 9, name: "ghost", icon: "ghost.svg" },
  { id: 10, name: "grass", icon: "grass.svg" },
  { id: 11, name: "ground", icon: "ground.svg" },
  { id: 12, name: "ice", icon: "ice.svg" },
  { id: 13, name: "normal", icon: "normal.svg" },
  { id: 14, name: "poison", icon: "poison.svg" },
  { id: 15, name: "psychic", icon: "psychic.svg" },
  { id: 16, name: "rock", icon: "rock.svg" },
  { id: 17, name: "steel", icon: "steel.svg" },
  { id: 18, name: "water", icon: "water.svg" },
];

const StyledImageDiv = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "200px",
}));

const StyledImage = styled(Image)(({}) => ({}));

const StyledCard = styled(Card)(({}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "312px",
  backgroundColor: "hsla(0,0%,100%,.100)",
  boxShadow: "0 5px 15px rgba(0,0,0,.35)",
  height: "auto",
  borderRadius: "0.725rem",
  cursor: "pointer",
}));

function PokeCard({ pokemon }: CardProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const [queryParam, setQueryParam] = useState("pikachu");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setPokemonDetails(data);
        setQueryParam(data.name);
      } catch (error) {
        console.log("Error fetching Pokemon details:", error);
      }
    };
    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <Grid item display={"flex"} justifyContent={"center"}>
      <Link href={`/pokemon-details?name=${queryParam}`}>
        <Box width={312}>
          <StyledCard>
            {pokemonDetails ? (
              <CardContent>
                <Typography
                  variant="h5"
                  textAlign="center"
                  fontWeight={600}
                  color={"white"}
                >
                  {capitalize(pokemon.name)}
                </Typography>
                <StyledImageDiv>
                  <StyledImage
                    src={pokemonDetails.sprites.other.dream_world.front_default}
                    width={182}
                    height={138}
                    alt="Card Image"
                  />
                </StyledImageDiv>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ cursor: "pointer" }}
                >
                  <Box
                    borderRadius={16}
                    width={75}
                    border={1}
                    borderColor={"white"}
                    p={1}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                  >
                    {pokemonDetails?.types?.map(
                      (type: PokemonDetails["types"][0]) => (
                        <Image
                          key={type.slot}
                          src={`/icons/${type.type.name}.svg`}
                          className="rounded-sm object-cover md:rounded"
                          quality={75}
                          placeholder="empty"
                          alt={type.type.name}
                          loading="lazy"
                          width={15}
                          height={15}
                          priority={false}
                          title={type.type.name}
                        />
                      )
                    )}
                  </Box>
                </Box>
              </CardContent>
            ) : (
              <Skeleton
                sx={{ bgcolor: "darkpurple" }}
                variant="rectangular"
                width={312}
                height={312}
              />
            )}
          </StyledCard>
        </Box>
      </Link>
    </Grid>
  );
}

export default PokeCard;
