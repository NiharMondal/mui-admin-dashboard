import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import TopAppbar from "./TopAppbar";

const drawerWidth = 270;

const DashboardLayout = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopAppbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: {xs: 2, md: 4},
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
