// ExpiringMedicationSection.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const medicationData = [
  { name: 'Panadol', daysLeft: 10 },
  { name: 'Paracetamol', daysLeft: 5 },
  // Add more medication entries as needed
];

const ExpiringMedicationSection = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      {medicationData.map((medication, index) => (
        <Card key={index} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6">{medication.name}</Typography>
            <Typography variant="body2">Days Left: {medication.daysLeft}</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
        View More
      </Button>

      {/* Dialog for displaying the full table */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Expiring Medication List</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Medication Name</TableCell>
                  <TableCell>Days Left</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medicationData.map((medication, index) => (
                  <TableRow key={index}>
                    <TableCell>{medication.name}</TableCell>
                    <TableCell>{medication.daysLeft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExpiringMedicationSection;
