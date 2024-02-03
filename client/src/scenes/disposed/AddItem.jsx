import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import top100Films from "./top100Films";
import disposalTypes from "./disposalTypes";

const AddItem = ({ open, setOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClose = () => {
    setOpen(false);
  };
  const [prescriptionID, setPrescriptionID] = useState(top100Films[0]);
  const [disposalType, setDisposalType] = useState(disposalTypes[0]);

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
        Add Item
      </DialogTitle>
      <DialogContent>
        <DialogContentText color={colors.grey[800]} fontSize="15px">
          Please select the prescribed item you would like to move to disposed.
        </DialogContentText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => (
            <TextField {...params} label="Prescription ID" />
          )}
          value={prescriptionID}
          onChange={(event, newValue) => {
            setPrescriptionID(newValue);
          }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={disposalTypes}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => (
            <TextField {...params} label="Disposal Type" />
          )}
          value={disposalType}
          onChange={(event, newValue) => {
            setDisposalType(newValue);
          }}
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

export default AddItem;
