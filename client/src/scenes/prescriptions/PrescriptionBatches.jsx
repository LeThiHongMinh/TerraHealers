import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
import { GridRowModes, GridActionsCellItem } from "@mui/x-data-grid";
import prescriptionBatch from "./prescriptionBatch";

export default function PrescriptionBatch() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const data = location.state;
  const title = `Prescriptions > ${data.medication}`;
  const subtitle = `List of all dispensed batches for ${data.medication}  `;
  const [rowModesModel, setRowModesModel] = useState({});
  const [rows, setRows] = useState(prescriptionBatch);

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "batch_id",
      headerName: "Batch ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "prescription_id",
      headerName: "Prescription ID",
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
      field: "status",
      headerName: "Status",
      flex: 1,
      cellClassName: "name-column--cell",
      valueOptions: ["Dispensed", "Returned", "Recycled", "Reused", "Disposed"],
      editable: true,
      type: "singleSelect",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "carbon_emission",
      headerName: "Carbon Emission",
      flex: 1,
      cellClassName: "name-column--cell",
      type: "number",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      flex: 1,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    // TODO: HANDLE TABLE UPDATES HERE
    console.log(id);
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  return (
    <Box m="20px">
      <Header title={title} subtitle={subtitle} />
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
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[800],
            color: "#FFFFFF",
            borderBottom: "none",
            width: "100%",
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
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-row:nth-child(odd)": {
            backgroundColor: colors.grey[700],
          },
        }}
      >
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slotProps={{
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </div>
      </Box>
    </Box>
  );
}
