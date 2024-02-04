import { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import AddMedication from "./AddMedication";
import StyledDataGrid from "../../components/StyledDataGrid";

export default function MedicationTyapes() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dosage",
      headerName: "Dosage",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "supplier",
      headerName: "Supplier",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "administered via",
      headerName: "Administered via",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="Inventory > Medication Types"
        subtitle="List of all medication types in inventory"
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
          + Add Medication
        </Button>
        <AddMedication open={open} setOpen={setOpen} />
      </Box>
      <StyledDataGrid data={mockDataTeam} columnHeaders={columns} />
    </Box>
  );
}
