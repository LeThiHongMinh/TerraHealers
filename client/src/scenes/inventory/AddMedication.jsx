import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const AddMedication = ({ open, setOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClose = () => {
    setOpen(false);
  };

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
        Add Medication
      </DialogTitle>
      <DialogContent>
        <DialogContentText color={colors.grey[800]} fontSize="15px">
          Please indicate the following information for the new medication type
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="category"
          name="category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="dosage"
          name="dosage"
          label="Dosage"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="supplier"
          name="supplier"
          label="Supplier"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="administered via"
          name="administered via"
          label="Administered Via"
          type="text"
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

export default AddMedication;
