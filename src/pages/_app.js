// pages/_app.js
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css"; // Global styles for Tailwind and custom CSS
import { Container } from "@mui/material";
import CustomTheme from "../shared-theme/AppTheme";
// import AppTheme from "@shared-theme/AppTheme.js";
// Create your custom theme for MUI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#9c27b0", // Custom secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CustomTheme {...pageProps}>
        <CssBaseline enableColorScheme />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </CustomTheme>
    </ThemeProvider>
  );
}
