import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import Dashboard from "@mui/icons-material/Dashboard";
import Inventory from "@mui/icons-material/Inventory";
import {
  Medication as Prescriptions,
  Receipt as GenerateBill,
  DeleteForever as Disposed,
} from "@mui/icons-material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[200],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[800]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.primary[100]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.primary[100]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.blueAccent[500]}>
                  <b>NHGP</b>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Overview
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<Dashboard />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Processing
            </Typography>
            <Item
              title="Prescriptions"
              to="/prescriptions"
              icon={<Inventory />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Inventory"
              icon={<Prescriptions />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Medication Types"
              to="/medication-types"
              icon={<></>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medication Batches"
              to="/medication-batches"
              icon={<></>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Generate Bill"
              to="/generate-bill"
              icon={<GenerateBill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[200]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Disposal
            </Typography>
            <Item
              title="Disposed"
              to="/disposed"
              icon={<Disposed />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
