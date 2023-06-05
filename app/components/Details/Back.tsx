import React from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from "@mui/material";

const BackButton = () => (
  <Box
  sx={{
    position: "absolute",
    top: "16px",
    left: "16px",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
  >
    <ArrowBackIosNewRoundedIcon/>
    <Typography>Back</Typography>
  </Box>
);

export default BackButton;
