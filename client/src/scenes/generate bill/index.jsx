import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../../components/Header";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import FullFeaturedCrudGrid from "./CRUDDataGrid.jsx";

export default function GenerateBill() {
  const handlePrint = () => {
    window.print();
  };
  const download = () => {};
  const send = () => {};

  return (
    <Box m="20px">
      <Header title="Generate Bill" />
      <Box display="flex">
        <IconButton onClick={handlePrint}>
          <Tooltip id="button-print" title="Print">
            <PrintIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={download}>
          <Tooltip id="button-download" title="Download">
            <DownloadIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={send}>
          <Tooltip id="button-send" title="Send">
            <SendIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={send}>
          <Tooltip id="button-select-patient" title="Select Patient">
            <PersonIcon fontSize="medium" />
          </Tooltip>
        </IconButton>
      </Box>
      {/* patient details */}
      Patient Name: Patient ABC &nbsp; Patient address: Street 123 &nbsp;
      Today's date: 03/02/2024 &nbsp; Bill ID: 1234
      <Box>
        <FullFeaturedCrudGrid />
      </Box>
    </Box>
  );
}
