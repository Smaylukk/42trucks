import React, { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ICar } from "../utils/utils";
import CssBaseline from "@mui/material/CssBaseline";
import { CustomAppBar } from "../components/AppBar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CarAlbum } from "../components/CarAlbum";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const themeToggle = () => {
    setDarkMode((prev) => !prev);
  };
  const themeString = (b: boolean) => (b ? "dark" : "light");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeString(darkMode),
        },
      }),
    [darkMode]
  );
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    fetch("/api/loadData")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        response.json().then((data) => {
          setLoading(false);
          setCars(data);
        });
        // setResponse(data);}
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>42 тачки на ЗСУ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CssBaseline />
      <CustomAppBar themeChanger={themeToggle} useDark={darkMode} />
      <main>
        <Header />
        <CarAlbum loading={loading} cars={cars} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
