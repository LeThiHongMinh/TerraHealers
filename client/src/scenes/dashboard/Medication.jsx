import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { name: 'Prescribed', value: 30 },
  { name: 'Unprescribed', value: 70 },
];

const COLORS = ['#589EAD', '#A10035'];

const MedicationComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h2>Prescriptions Chart</h2>
      </div>
    </div>
  );
};

export default MedicationComponent;
