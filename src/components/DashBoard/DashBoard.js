import React from 'react';
import './DashBoard.css'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const chart = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 510000,
        }
    ];

    const dataTwo = [
        {
          "name": "Group A",
          value: 400
        },
        {
          "name": "Group B",
          value: 300
        },
        {
          "name": "Group C",
          value: 300
        },
        {
          "name": "Group D",
          value: 200
        },
        {
          "name": "Group E",
          value: 278
        },
        {
          "name": "Group F",
          value: 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          value: 2400
        },
        {
          "name": "Group B",
          value: 4567
        },
        {
          "name": "Group C",
          value: 1398
        },
        {
          "name": "Group D",
          value: 9800
        },
        {
          "name": "Group E",
          value: 3908
        },
        {
          "name": "Group F",
          value: 4800
        }
      ];
    return (
       <div className="dashboard-container">
           
            <div className='dashBoard'>
            <h2>This is Blogs DashBoard Page</h2>
            <LineChart width={400} height={300} data={chart}>
            <Line dataKey={'revenue'} stroke="#ff7300"></Line>
            <Line dataKey={'investment'} stroke="#82ca9d"></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip />
            </LineChart>
        
           </div>
           <div>
           <PieChart width={530} height={250}>
  <Pie data={dataTwo} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Tooltip></Tooltip>
</PieChart>
           </div>
       </div>
    );
};

export default DashBoard;