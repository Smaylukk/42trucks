import React, { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ICar } from "../utils/utils";
import CssBaseline from "@mui/material/CssBaseline";
import { CustomAppBar } from "../components/AppBar";
import { Header } from "../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CardCar } from "../components/CardCar";
import { Footer } from "../components/Footer";

export default function Home() {
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
      <CssBaseline />
      <CustomAppBar themeChanger={themeToggle} useDark={darkMode} />
      <main>
        {/* Hero unit */}
        <Header />
        <Container sx={{ py: 2 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cars.map((car) => (
              <CardCar key={car.number} car={car} />
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
