"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Box, Button, Grid, styled } from "@mui/material";
import TypesRow from "./components/TypesRow";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const StyledBox = styled(Box)(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center"
}));

const ButtonDiscover = styled(Button)(({}) => ({
  width: "40rem",
  height: "82px",
  padding: "0 50px",
  margin: "0 20px",
  border: "1px solid white",
  borderRadius: "40px",
  fontSize: "1.75rem",
  color: "white",
}));

export default function Home() {
  return (
    <div className={styles.main}>
      <StyledBox>
        <Link href={"/pokemon-list"}>
        <ButtonDiscover>Discover Pokemons</ButtonDiscover>
        </Link>
      </StyledBox>
      <TypesRow/>
    </div>
  );
}
