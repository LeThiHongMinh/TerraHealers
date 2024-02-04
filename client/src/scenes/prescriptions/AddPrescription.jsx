import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import patients from "./patients";
import medications from "./medications";

const AddPrescription = ({ open, setOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClose = () => {
    setOpen(false);
  };
  const [patient, setPatient] = useState(patients[0]);
  const [medication, setMedication] = useState(medications[0]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          setOpen(false);
        },
      }}
    >
      <DialogTitle color={colors.primary[700]} fontSize="20px">
        Add Prescription
      </DialogTitle>
      <DialogContent>
        <DialogContentText color={colors.grey[800]} fontSize="15px">
          Please specify the patient and the prescribed medication.
        </DialogContentText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={patients}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="Patient" />}
          value={patient}
          onChange={(event, newValue) => {
            setPatient(newValue);
          }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={medications}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="Medication" />}
          value={medication}
          onChange={(event, newValue) => {
            setMedication(newValue);
          }}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="number"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ color: colors.grey[300], backgroundColor: colors.primary[300] }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          sx={{ color: colors.grey[300], backgroundColor: colors.primary[300] }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPrescription;
