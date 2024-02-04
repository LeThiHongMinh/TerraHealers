// MedicationSection.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const MedicationSection = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  };

  const cardStyles = {
    width: '250px',
    backgroundColor: '#589EAD', // Color for Returned Medication card
    color: '#fff',
  };

  return (
    <div style={containerStyles}>
      {/* Returned Medication Card */}
      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h6">Returned Medication</Typography>
          <Typography variant="h4">45%</Typography>
        </CardContent>
      </Card>

      {/* Unused Medication Card */}
      <Card style={{ ...cardStyles, backgroundColor: '#A10035' }}>
        <CardContent>
          <Typography variant="h6">Unused Medication</Typography>
          <Typography variant="h4">60%</Typography>
        </CardContent>
      </Card>

      {/* Medicine Stock Card */}
      <Card style={{ ...cardStyles, backgroundColor: '#71003D' }}>
        <CardContent>
          <Typography variant="h6">Medicine Stock</Typography>
          <Typography variant="h4">70%</Typography>
        </CardContent>
      </Card>

      {/* Total Carbon Emissions Card */}
      <Card style={{ ...cardStyles, backgroundColor: '#FEC260' }}>
        <CardContent>
          <Typography variant="h6">Total Carbon Emissions</Typography>
          <Typography variant="h4">2400</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationSection;
