import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Box } from "@mui/material";
import { PokemonDetails } from "@/type";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface DetailsProps {
  pokemonDetails: PokemonDetails;
}

function PokemonChart({ pokemonDetails }: DetailsProps) {
  const [pokemonStats, setPokemonStats] = useState<number[]>([]);
  useEffect(() => {
    const statsArray = Object.values(pokemonDetails.stats);
    const extractedStats = statsArray.map((stat: any) => stat.base_stat);
    setPokemonStats(extractedStats);
  }, [pokemonDetails]);

  if (pokemonStats.length === 0) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: [
      "HP",
      "Attack",
      "Defense",
      "Special Attack",
      "Special Defense",
      "Speed",
    ],
    datasets: [
      {
        label: "Stats",
        data: pokemonStats,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 0.5)",
        pointBackgroundColor: "rgba(75, 192, 192, 0.1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Radar data={data} options={options} />
    </Box>
  );
}

export default PokemonChart;
