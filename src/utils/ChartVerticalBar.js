import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Your Sale',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#f19b6c',
        },
        {
            label: 'Others Sale',
            data: [6, 49, 90, 32, 59, 55, 70],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },

    ],
};

export function ChartVerticalBar() {
    return <Bar options={{ maintainAspectRatio: false } } data={data} />;
}
