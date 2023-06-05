// app/providers.tsx
"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
