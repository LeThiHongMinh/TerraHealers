import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Alert from "@mui/material/Alert";

const roles = ["Market", "Finance", "Development"];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: "TWYNSTA TABLET 40MG/10MG",
    dosage: 25,
    supplier: "ABC supplier",
    mrp_per_unit: 30,
    quantity: 10,
    selling_price: 300,
  },
];

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [alertOpen, setAlertOpen] = React.useState(false);

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [
        ...oldRows,
        { id, name: "", age: "", isNew: true },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button
          sx={{ color: colors.primary[800] }}
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

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
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "medication_id",
      headerName: "Medication ID",
      editable: false,
      type: "number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      type: "singleSelect",
      valueOptions: [
        "ADIMET XR TABLET 1000MG (METFORMIN)",
        "ADIMET XR TABLET 750MG (METFORMIN)",
        "GLUCIENT XR EXTENDED-RELEASE TABLET 1000MG (METFORMIN)",
        "GLUCIENT XR EXTENDED-RELEASE TABLET 750MG (METFORMIN)",
        "DYMISTA NASAL SPRAY",
        "BECLOMET EASYHALER 200 MCG/INHALATION DOSE",
        "PULMICORT TURBUHALER 100 MCG/DOSE",
        "ZYRTEC ORAL SOLUTION 1 MG/ML (CETRIZINE)",
        "ZYRTEC TABLET 10 MG (CETRIZINE)",
        "TELFAST TABLET 180 MG (FEXOFENADINE)",
        "TELFAST ORAL SUSPENSION 6 MG/ML (FEXOFENADINE)",
        "EXFORGE TABLET 5MG/160MG",
        "TWYNSTA TABLET 40MG/10MG",
        "METFORMIN",
      ],
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dosage",
      headerName: "Dosage",
      editable: true,
      type: "text",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "supplier",
      headerName: "Supplier",
      type: "text",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "mrp_per_unit",
      headerName: "MRP per unit (SGD)",
      type: "text",
      editable: false,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      editable: true,
      type: "number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "selling_price",
      headerName: "Selling price (SGD)",
      editable: false,
      type: "text",
      flex: 1,
      cellClassName: "name-column--cell",
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
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
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
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

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
      <Alert severity="info">
        Adimet and Glucient are both different brands of Metformin for treating
        diabetes, Please consider choosing the medication with lower carbon
        emission rating during billing.
      </Alert>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </div>
    </Box>
  );
}
