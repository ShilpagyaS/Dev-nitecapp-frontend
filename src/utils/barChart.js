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

const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#2C2C2C';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};
export const options = {

    scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value) {
                    return '$' + value;
                },

            }
        }
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {

        legend: {
            display: false
        },
        customCanvasBackgroundColor: {
            color: '#2C2C2C',
        }

    },

};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const data = {
    labels,
    datasets: [

        {
            label: 'Your Sale',
            data: [6, 49, 90, 32, 59, 55, 70],
            backgroundColor: '#D9D9D9',
            display: false
        },

    ],
};

export function BarChart() {
    return (



        <div className="h-[306px] w-[545px] bg-[#2C2C2C] rounded-[12px] p-[11px]">
            <Bar options={options} plugins={[plugin]} data={data} />

        </div>


    );
}
