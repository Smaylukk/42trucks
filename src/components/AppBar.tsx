import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { FormControlLabel, Switch } from "@mui/material";
import Box from "@mui/material/Box";

interface IAppBarProps {
  useDark: boolean;
  themeChanger: (useDark?: boolean) => void;
}
export const CustomAppBar = (props: IAppBarProps) => {
  const handleSwitch = (_e: any, checked: boolean) => {
    props.themeChanger(checked);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          component={"img"}
          src="/assets/42.png"
          sx={{ mr: 2, height: 40 }}
        />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
        >
          Проект - 42 тачки на ЗСУ
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
        >
          42 тачки
        </Typography>
        <FormControlLabel
          labelPlacement="end"
          label={props.useDark ? <DarkModeIcon /> : <LightModeIcon />}
          control={<Switch checked={props.useDark} onChange={handleSwitch} />}
        />
      </Toolbar>
    </AppBar>
  );
};
