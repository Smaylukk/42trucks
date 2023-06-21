import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { ICar, StatusColor } from "../utils/utils";

export const CardCar: FC<{ car: ICar }> = ({ car }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" src={car.picture || "/assets/truck.jpg"} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {car.number} - {car.name}
          </Typography>
          <Typography className="CarInfoAmount">
            Статус авто:{" "}
            <span
              style={{
                color: StatusColor.get(car.status!),
                fontWeight: "bolder",
                textAlign: "right",
              }}
            >
              {car.status}
            </span>
          </Typography>
          <Typography className={"CarInfoAmount"}>
            В/ч:
            <Typography className={"Amount"} align={"right"}>
              {car.militaryBase}
            </Typography>
          </Typography>
          <Typography className={"CarInfoAmount"}>
            Марка:
            <Typography className={"Amount"} align={"right"}>
              {car.name}
            </Typography>
          </Typography>
          <Typography className={"CarInfoAmount"}>
            Ім'я:
            <Typography className={"Amount"} align={"right"}>
              {car.carName}
            </Typography>
          </Typography>
          <Typography className={"CarInfoAmount"}>
            Ремонт:
            <Typography className={"Amount"} align={"right"}>
              {car.amountRepair || "0"} грн.
            </Typography>
          </Typography>
          <Typography className="CarInfoAmount">
            Шини:
            <span className={"Amount"}>{car.amountTires || "0"} грн.</span>
          </Typography>
          <Typography className="CarInfoAmount">
            Фарбування:
            <span className={"Amount"}>{car.amountDyeing || "0"} грн.</span>
          </Typography>
          <Typography>Додаткове обладнання:</Typography>
          <Typography className={"CarInfoValue"} align={"right"}>
            {car.addEquip}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
