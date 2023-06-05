"use client";
import { Box, Button, styled } from "@mui/material";
import TypesRow from "./components/TypesRow";

const StyledMain = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "auto",
  paddingBottom: "5rem",
  minHeight: "75vh",
}));

const StyledBox = styled(Box)(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const ButtonDiscover = styled(Button)(({theme}) => ({
  width: "40rem",
  height: "82px",
  textAlign: "center",
  padding: "0 50px",
  margin: "0 20px",
  border: "1px solid white",
  borderRadius: "40px",
  fontSize: "1.75rem",
  fontWeight: "600",
  color: "white",
  "&:hover" :{
    color: "#24243e",
    background: "white"
  }
}));

export default function Home() {
  return (
    <StyledMain>
      <StyledBox>
        <ButtonDiscover href={"/pokemon-list"}>
          Discover Pokemons
        </ButtonDiscover>
      </StyledBox>
      <TypesRow />
    </StyledMain>
  );
}
