// pages/_app.js
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css"; // Global styles for Tailwind and custom CSS
import { Container } from "@mui/material";
import CustomTheme from "../shared-theme/AppTheme";
import Head from "next/head"; // Importing Head from next/head

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
        {/* Metadata in the <Head> component */}
        <Head>
          <title>Lancer Planet</title>
          <meta name="description" content="A Web3 Freelance Platform" />
          <meta name="keywords" content="web3, freelance, web3 freelance, seo, blockchain, blockchain freelance platform" />
          <meta name="author" content="Cybill Nerd" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* For Apple devices and iOS */}
          <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>

        <CssBaseline enableColorScheme />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </CustomTheme>
    </ThemeProvider>
  );
}
