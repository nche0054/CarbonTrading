import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins } from 'chart.js';
import {BiddingStatsTest, PastTradesTest } from "../Data/LineChartTestData";
import { body, label, main } from "framer-motion/client";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const BiddingStatsGraph = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 40,
                    boxHeight: 7,
                    textAlign: 'left',
                    font: {
                        size: 13,
                    },
                },
            }
        },
    };

    const data = {};

    return <Line options={options} data={BiddingStatsTest} />;
};

export const PastTradesGraph = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            y:{
                beginAtZero: false,
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 40,
                    boxHeight: 7,
                    font: {
                        size: 12,
                    },
                },
            }
        },
    };

    const data = {};

    return <Line options={options} data={PastTradesTest} />;
};