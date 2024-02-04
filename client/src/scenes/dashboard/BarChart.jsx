// BarChart.js
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Button } from '@mui/material';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const generateMonthlyData = () => {
  const currentMonthIndex = new Date().getMonth();

  // Filter months up to the current month
  const filteredMonths = months.slice(0, currentMonthIndex + 1);

  return filteredMonths.map((month) => ({
    month,
    production: Math.floor(Math.random() * 100) + 100,
    sales: Math.floor(Math.random() * 100) + 200,
    disposal: Math.floor(Math.random() * 50) + 50,
  }));
};

const generateWeeklyData = () => {
  // Generate sample data for weeks in the last month
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const lastMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1; // Adjust for January
  const lastMonthYear = currentMonthIndex === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();

  const lastMonthDays = new Date(lastMonthYear, lastMonthIndex + 1, 0).getDate(); // Number of days in the last month
  const weeksInLastMonth = Math.ceil(lastMonthDays / 7); // Calculate weeks in the last month

  const selectedMonthData = generateMonthlyData().find(entry => entry.month === months[lastMonthIndex]);
  const weeklyData = [];

  for (let week = 1; week <= weeksInLastMonth; week++) {
    const adjustedProduction = Math.floor(Math.random() * 20) + 100; // Adjusted value for illustration
    const adjustedSales = Math.floor(Math.random() * 20) + 200;
    const adjustedDisposal = Math.floor(Math.random() * 10) + 50;

    weeklyData.push({
      ...selectedMonthData,
      week: `W${week}`,
      production: adjustedProduction,
      sales: adjustedSales,
      disposal: adjustedDisposal,
    });
  }

  return weeklyData;
};

const BarChartComponent = () => {
  const [viewMode, setViewMode] = useState('monthly');
  const data = viewMode === 'monthly' ? generateMonthlyData() : generateWeeklyData(generateMonthlyData());

  const colors = ['#71003D', '#589EAD', '#FEC260'];

  return (
    <div>
      <Button
        onClick={() => setViewMode('monthly')}
        color="primary"
        variant="contained"
        style={{ backgroundColor: '#71003D', marginLeft: '25px', color: 'white', fontWeight: 'bold' }}
      >
        Monthly View
      </Button>
      <Button
        onClick={() => setViewMode('weekly')}
        color="secondary"
        variant="contained"
        style={{ backgroundColor: '#FEC260', marginLeft: '5px', color: 'black', fontWeight: 'bold' }}
      >
        Weekly View
      </Button>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={viewMode === 'monthly' ? 'month' : 'week'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />

          {Object.keys(data[0])
            .filter((key) => key !== 'month' && key !== 'week')
            .map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
                barSize={viewMode === 'monthly' ? 30 : 15}
              />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
