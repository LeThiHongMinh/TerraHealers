import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import disposedMedication from "./data.js";

import StyledDataGrid from "../../components/StyledDataGrid.jsx";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddItem from "./AddItem.jsx";

/*
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#f5f5f5",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "black",
}));
*/

const Disposed = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "medication_id",
      headerName: "Medication ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "production_emissions",
      headerName: "Production Emissions",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "disposal_emissions",
      headerName: "Disposal Emissions",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "disposal_type",
      headerName: "Disposal Type",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="Disposed Drugs Tracker"
        subtitle="List of all disposed drugs"
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
          + Add Item
        </Button>
        <AddItem open={open} setOpen={setOpen} />
      </Box>
      {/*
      <TableContainer component={Paper} sx={{ margin: 2 }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#203C44" }}>
              <TableCell>ID</TableCell>
              <TableCell>Production Emissions</TableCell>
              <TableCell>Disposal Emissions</TableCell>
              <TableCell>Disposal Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {disposedMedication.map((medication) => (
              <StyledTableRow key={medication.medication_id}>
                <StyledTableCell component="th" scope="row">
                  {medication.medication_id}
                </StyledTableCell>
                <StyledTableCell>
                  {medication.production_emissions}
                </StyledTableCell>
                <StyledTableCell>
                  {medication.disposal_emissions}
                </StyledTableCell>
                <StyledTableCell>{medication.disposal_type}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
*/}
      <StyledDataGrid data={disposedMedication} columnHeaders={columns} />
    </Box>
  );
};

export default Disposed;
