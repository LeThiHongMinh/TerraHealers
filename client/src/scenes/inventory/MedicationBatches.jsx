import { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import AddBatch from "./AddBatch";
import StyledDataGrid from "../../components/StyledDataGrid";

export default function MedicationBatches() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "medication",
      headerName: "Medication",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "manufacturer",
      headerName: "Manufacturer",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "expirations",
      headerName: "Expirations Dates",
      type: "dates",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "left",
      align: "left",
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="Inventory > Medication Batches"
        subtitle="List of all medication batches in inventory"
      />
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        backgroundColor={colors.redAccent[600]}
        borderRadius="3px"
        width={125}
        height={50}
        ml={"75%"}
      >
        <Button variant="text" onClick={handleClickOpen}>
          + Add Batch
        </Button>
        <AddBatch open={open} setOpen={setOpen} />
      </Box>
      <StyledDataGrid data={mockDataTeam} columnHeaders={columns} />
    </Box>
  );
}
