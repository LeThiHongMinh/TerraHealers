// ExpiringMedicationSection.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, createTheme, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const initialMedications = [
  { id: 1, name: 'Panadol', daysLeft: 10, batchID: 1 },
  { id: 2, name: 'Paracetamol', daysLeft: 5, batchID: 1 },
];

const fullMedicationList = [
  { id: 1, name: 'Panadol', daysLeft: 10, batchID: 1 },
  { id: 2, name: 'Paracetamol', daysLeft: 5, batchID: 1 },
  { id: 3, name: 'Vitamin C', daysLeft: 8, batchID: 2 },
  { id: 4, name: 'Vitamin E', daysLeft: 15, batchID: 2 },
];

const MedicationCard = ({ medication }) => (
  <Card style={{ marginBottom: '10px', marginRight: '20px' }}>
    <CardContent>
      <Typography variant="h6">{medication.name}</Typography>
      <Typography variant="body2">Days Left: {medication.daysLeft}</Typography>
    </CardContent>
  </Card>
);

const theme = createTheme();

const ExpiringMedicationSection = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const displayedMedications = initialMedications.slice(0, 2); // Display only the first two medications

  return (
    <ThemeProvider theme={theme}>
      <div>
        {displayedMedications.map((medication) => (
          <MedicationCard key={medication.id} medication={medication} />
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDialogOpen}
          style={{
            display: 'block',
            margin: '0 auto',
            backgroundColor: '#589EAD', // Set the background color
            color: '#FFFFFF', // Set the text color
          }}
        >
          View More
        </Button>

        {/* Dialog for displaying the full table */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>
            Expiring Medication List
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              style={{ position: 'absolute', top: 0, right: 0, marginTop: '5px', marginRight: '5px'}}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Medication Name</TableCell>
                    <TableCell>Days Left</TableCell>
                    <TableCell>Batch ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fullMedicationList.map((medication) => (
                    <TableRow key={medication.id}>
                      <TableCell>{medication.name}</TableCell>
                      <TableCell>{medication.daysLeft}</TableCell>
                      <TableCell>{medication.batchID}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default ExpiringMedicationSection;
