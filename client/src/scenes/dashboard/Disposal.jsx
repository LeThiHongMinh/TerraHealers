// DisposalTrackerSection.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';

const data = [
  { name: 'Returned', value: 20 },
  { name: 'Disposed', value: 30 },
  { name: 'Recycle', value: 50 },
];

const COLORS = ['#589EAD', '#71003D', '#FEC260'];

const DisposalTrackerSection = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Medication Disposal Information
      </Typography>
      <ResponsiveContainer width="80%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            startAngle={90}
            endAngle={450}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: 'inline-block', margin: 'px' }}>
            <span style={{ backgroundColor: COLORS[index], width: '20px', height: '20px', display: 'inline-block' }}></span>
            <Typography variant="body2" style={{ marginLeft: '5px' }}>
              {entry.name}: {entry.value}%
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisposalTrackerSection;
