import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, plugins, Filler } from 'chart.js';
import {WeeklyBiddingStatsTest, MonthlyBiddingStatsTest, SixMonthBiddingStatsTest, YearlyBiddingStatsTest, 
    YearlyPastTradesTest, WeeklyPastTradesTest, MonthlyPastTradesTest,
    WeekSalesOverTimeTest, MonthSalesOverTimeTest, YearSalesOverTimeTest } from "../Data/LineChartTestData";
import { WeeklyBiddingStats } from "../Data/WeeklyChartData";
import { body, label, main } from "framer-motion/client";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const BiddingStatsGraph = ({timeRange}) => {
    let graphData = WeeklyBiddingStatsTest;
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
    if (timeRange==1){graphData=WeeklyBiddingStatsTest;}
    else if (timeRange==2){graphData=MonthlyBiddingStatsTest;}
    else if (timeRange==3){graphData=SixMonthBiddingStatsTest;}
    else if (timeRange==4){graphData=YearlyBiddingStatsTest;}

    return <Line options={options} data={graphData} />;
};

export const PastTradesGraph = ({timeRange}) => {
    let graphData = YearlyPastTradesTest;
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
    if (timeRange==1){graphData=WeeklyPastTradesTest;}
    else if (timeRange==2){graphData=MonthlyPastTradesTest;}
    else if (timeRange==3){graphData=YearlyPastTradesTest;}

    return <Line options={options} data={graphData} />;
};

export const SalesOverTimeGraph = ({timeRange}) => {
    let graphData = WeekSalesOverTimeTest;
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
                    textAlign: 'left',
                    font: {
                        size: 13,
                    },
                },
            }
        },
    };

    const data = {};
    if (timeRange==1){graphData=WeekSalesOverTimeTest;}
    else if (timeRange==2){graphData=MonthSalesOverTimeTest;}
    else if (timeRange==3){graphData=YearSalesOverTimeTest;}

    return <Line options={options} data={graphData} />;
};