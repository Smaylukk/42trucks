import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

export const Header = () => {
  return (
    <Box
      sx={{
        pt: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          42 тачки на ЗСУ
        </Typography>
        <Stack
          sx={{ pt: 1 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            href="https://t.me/martin_brest_pehota"
            target="_blank"
          >
            Мартин Брест
          </Button>
          <Button
            variant="contained"
            href="https://t.me/mouselab"
            target="_blank"
          >
            Антон Сененко
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
