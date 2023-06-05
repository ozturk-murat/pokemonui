"use client";
import { Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#440b4f",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body:{
            background: "linear-gradient(to right, #0f0c29, #302b63, #24243e) !important"
        }
      },
    },
  },
  typography: {
    fontFamily: raleway.style.fontFamily,
  },
});

export default theme;
