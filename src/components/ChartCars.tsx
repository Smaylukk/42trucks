import React, { FC, useEffect, useState } from "react";
import { CarStatus, ICar } from "../utils/utils";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import Box from "@mui/material/Container";

Chart.register(ArcElement, Tooltip, Legend);

export const ChartCars: FC<{ cars: ICar[]; darkMode: boolean }> = ({
  cars,
  darkMode,
}) => {
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
              display: true,
              labels: {
                generateLabels: (chart) => {
                  const datasets = chart.data.datasets;
                  return datasets[0].data.map((data, i) => ({
                    text: `${
                      (chart.data.labels && chart.data.labels[i]) ?? ""
                    } ${data}`,
                    fillStyle:
                      (Array.isArray(datasets) &&
                        Array.isArray(datasets[0].backgroundColor) &&
                        datasets[0].backgroundColor[i]) ||
                      null,
                    fontColor: darkMode ? "rgb(255,255,255)" : "rgb(0,0,0)",
                    index: i,
                  }));
                },
              },
            },
          },
        }}
        height={350}
        width={450}
      />
    </Box>
  );
};
