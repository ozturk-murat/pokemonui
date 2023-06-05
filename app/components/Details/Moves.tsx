import React from "react";
import { Box, Typography } from "@mui/material";

interface Move {
  name: string;
}

interface DetailsMoveProps {
  move: Move;
}

function Moves({ move }: DetailsMoveProps) {
console.log("move", move);

  return (
    <Box display="flex" justifyContent="center" sx={{ cursor: "pointer" }}>
      <Box
        width={200}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
      </Box>
    </Box>
  );
}

export default Moves;
