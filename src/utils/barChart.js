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
     
    scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value) {
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
           backgroundColor: {
            color: 'red',
          },
      
        title: {
            display: true,
            text: 'Total Sales  |  This Week ',
        },
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
            <div style={{backgroundColor:'#2C2C2C'}}>
             <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
              <div className="bg-white rounded-lg shadow-lg">
                 <div className="">
                   <div className="w-full">
                     <div  style={{ height: "306px", width:'545px' }}>
                      <Bar options={options} data={data} />
                     </div>
                   </div>
               </div>
              </div>
             </div>
           </div>
      );
}
