import React from "react";
import Image from "next/image";
import { Box, Button, Grid, styled } from "@mui/material";

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

const StyledBox = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
}));

const StyledIconDiv = styled("div")`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-arround;
  align-items: center;
  cursor: pointer !important;
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.1);
  }
  `}
`;

function TypesRow() {
  return (
    <Grid container spacing={{xs:1, md:2}} pt={10} rowSpacing={5}>
      {icons.map((icon) => (
         <Grid item xs={4} sm={2} key={icon.id} display={"flex"} justifyContent={"center"}>
          <StyledIconDiv key={icon.id}>
            <Image
              src={`/icons/${icon.icon}`}
              className="rounded-sm object-cover md:rounded"
              quality={75}
              placeholder="empty"
              alt={icon.name}
              loading="lazy"
              width={100}
              height={100}
              priority={false}
              title={icon.name}
              color="red"
            />
            <h6 style={{marginTop: 5}}>{icon.name}</h6>
          </StyledIconDiv>
        </Grid>
      ))}
    </Grid>
  );
}

export default TypesRow;
