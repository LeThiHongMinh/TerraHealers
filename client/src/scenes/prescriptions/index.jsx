import { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StyledDataGrid from "../../components/StyledDataGrid";
import AddPrescription from "./AddPrescription";
import prescriptions from "./prescriptions";

export default function Prescriptions() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "group_id",
      headerName: "Group ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "patient_id",
      headerName: "Patient ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "medication",
      headerName: "Medication",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "net_carbon_emissions",
      headerName: "Net Carbon Emissions",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="Prescriptions"
        subtitle="List of all prescribed medications."
      />
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        backgroundColor={colors.redAccent[600]}
        borderRadius="3px"
        width={180}
        height={50}
        ml={"75%"}
      >
        <Button variant="text" onClick={handleClickOpen}>
          + Add Prescription
        </Button>
        <AddPrescription open={open} setOpen={setOpen} />
      </Box>
      <StyledDataGrid
        data={prescriptions}
        columnHeaders={columns}
        redirectLink="batch-id"
      />
    </Box>
  );
}
