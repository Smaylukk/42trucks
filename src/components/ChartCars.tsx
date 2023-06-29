import React, { FC, useEffect, useState } from "react";
import { CarStatus, ICar } from "../utils/utils";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import Box from "@mui/material/Container";

Chart.register(ArcElement, Tooltip, Legend);

export const ChartCars: FC<{ cars: ICar[] }> = ({ cars }) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const m = new Map();
    for (let car of cars) {
      if (m.has(car.status)) {
        m.set(car.status, m.get(car.status) + 1);
      } else {
        m.set(car.status, 1);
      }
    }
    const dataset: number[] = [];
    dataset.push(m.get(CarStatus.find) ?? 0);
    dataset.push(m.get(CarStatus.buy) ?? 0);
    dataset.push(m.get(CarStatus.transport) ?? 0);
    dataset.push(m.get(CarStatus.repair) ?? 0);
    dataset.push(m.get(CarStatus.done) ?? 0);
    setChartData(dataset);
  }, [cars]);
  return (
    <Box
      sx={{ py: 2, height: 350, display: "flex", justifyContent: "center" }}
      maxWidth="lg"
    >
      <Pie
        data={{
          labels: [
            CarStatus.find,
            CarStatus.buy,
            CarStatus.transport,
            CarStatus.repair,
            CarStatus.done,
          ],
          datasets: [
            {
              label: "Кількість авто",
              data: chartData,
              backgroundColor: [
                "rgb(174,179,178)",
                "rgba(167,40,51)",
                "rgb(54,175,230)",
                "rgb(237,191,1)",
                "rgba(8,171,41,0.85)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "left",
            },
          },
        }}
        height={350}
        width={450}
      />
    </Box>
  );
};
