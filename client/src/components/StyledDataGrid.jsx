import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StyledDataGrid = ({ data, columnHeaders }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
          backgroundColor: colors.grey[100],
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: colors.primary[800],
          color: "#FFFFFF",
          borderBottom: "none",
        },
        "& .MuiDataGrid-sortIcon": {
          opacity: 1,
          color: "white",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.grey[100],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.redAccent[600],
        },
        "& .MuiDataGrid-row:nth-child(odd)": {
          backgroundColor: colors.grey[700],
        },
      }}
    >
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={data} columns={columnHeaders} />
      </div>
    </Box>
  );
};

export default StyledDataGrid;
