import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import disposedMedication from "./data.js";
import { styled } from "@mui/system";

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

const Disposed = () => {
  return (
    <Box display="flex">
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
    </Box>
  );
};

export default Disposed;
