import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { ICar, StatusColor } from "../utils";

export const CardCar: FC<{ car: ICar }> = ({ car }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" src={car.picture} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {car.number} - {car.name}
          </Typography>
          <Typography className="CarInfo">
            Статус авто:{" "}
            <span
              style={{
                color: StatusColor.get(car.status),
                fontWeight: "bolder",
              }}
            >
              {car.status}
            </span>
          </Typography>
          <Typography className="CarInfo">
            Війсьова частина:
            <span
              style={{
                alignContent: "end",
              }}
            >
              {car.militaryBase}
            </span>
          </Typography>
          <Typography className="CarInfo">
            Ім'я машини:
            <span
              style={{
                alignContent: "end",
              }}
            >
              {car.carName}
            </span>
          </Typography>
          <Typography className="CarInfo">
            Ремонт:
            <span
              style={{
                alignContent: "end",
              }}
            >
              {car.amountRepair || "0"} грн.
            </span>
          </Typography>
          <Typography className="CarInfo">
            Шини:
            <span
              style={{
                alignContent: "end",
              }}
            >
              {car.amountTires || "0"} грн.
            </span>
          </Typography>
          <Typography className="CarInfo">
            Фарбування:
            <span
              style={{
                alignContent: "end",
              }}
            >
              {car.amountDyeing || "0"} грн.
            </span>
          </Typography>
          <Typography>Додаткове обладнання:</Typography>
          <Typography>{car.addEquip}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
