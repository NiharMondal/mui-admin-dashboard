import {
  Divider,
  Box,
  Drawer,
  Typography,
  Toolbar,
} from "@mui/material";

import React from "react";
import sidebarConfig from "./sidebarConfig";
import NavSection from "../../components/Dashboard/NavSection";
import Logo from "../../components/Logo";

const drawerWidth = 270;


const drawer = (
  <div>
    <Toolbar sx={{}}>
      <Logo
        logoIllustration="/mock-images/logo.svg"
        sx={{ paddingLeft: "20px" }}
      />
    </Toolbar>
    <Divider />
    <Box
      sx={{
        backgroundColor: "#EDEFF1",
        margin: "20px auto",
        width: "80%",
        height: "80px",
        padding: "18 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
      }}
    >
      <Typography variant="h5">Nihar Mondal</Typography>
    </Box>
    <NavSection navConfig={sidebarConfig} />
  </div>
);

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
