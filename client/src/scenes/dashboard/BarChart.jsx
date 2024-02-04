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

const generateWeeklyData = (selectedMonth) => {
  // Generate sample data for weeks up to the current week
  const currentMonthIndex = new Date().getMonth();
  const currentWeek = Math.ceil(new Date().getDate() / 7); // Calculate current week

  const weeksInMonth = currentWeek;

  const selectedMonthData = generateMonthlyData().find(entry => entry.month === selectedMonth);
  const weeklyData = [];

  for (let week = 1; week <= weeksInMonth; week++) {
    if (week === currentWeek && selectedMonth === months[currentMonthIndex]) {
      // If it's the current week and month, consider only days passed in the current week
      const daysInCurrentWeek = new Date().getDate() % 7 || 7;
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
    } else {
      weeklyData.push({
        ...selectedMonthData,
        week: `W${week}`,
      });
    }
  }

  return weeklyData;
};

const BarChartComponent = () => {
  const [viewMode, setViewMode] = useState('monthly');
  const data = viewMode === 'monthly' ? generateMonthlyData() : generateWeeklyData(generateMonthlyData());

  const colors = ['#589EAD', '#71003D', '#FEC260'];

  return (
    <div>
      <button onClick={() => setViewMode('monthly')}>Monthly View</button>
      <button onClick={() => setViewMode('weekly')}>Weekly View</button>

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
