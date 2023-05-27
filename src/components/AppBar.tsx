import Toolbar from "@mui/material/Toolbar";
import CarIcon from "@mui/icons-material/CarCrash";
import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { FormControlLabel, Switch } from "@mui/material";

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
        <CarIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Проект - 42 тачки на ЗСУ
        </Typography>
        <FormControlLabel
          labelPlacement="end"
          label="Темна тема"
          control={<Switch checked={props.useDark} onChange={handleSwitch} />}
        />
      </Toolbar>
    </AppBar>
  );
};
