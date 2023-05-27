import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { carList, configApp, ICar } from "./utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CardCar } from "./components/CardCar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CustomAppBar } from "./components/AppBar";
import useGoogleSheets from "use-google-sheets";
import { loadData } from "./googleSpreadsheet";

function App() {
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
  const [cars, setCars] = useState<ICar[]>(carList);
  useEffect(() => {
    loadData();
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar themeChanger={themeToggle} useDark={darkMode} />
      <main>
        {/* Hero unit */}
        <Header />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
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

export default App;
