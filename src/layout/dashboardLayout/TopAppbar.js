import React from "react";
import {
  AppBar,
  IconButton,
  Box,
  Stack,
  Typography,
  Toolbar,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { HiMenuAlt1 } from "react-icons/hi";
import Searchbar from "./Searchbar";
const drawerWidth = 270;


const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${drawerWidth + 1}px)`,
  },
}));

const TopAppbar = ({ handleDrawerToggle }) => {
  return (
    <RootStyle
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <HiMenuAlt1 color="gray" />
        </IconButton>
        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body2">hi</Typography>
          <Typography variant="body2">hi</Typography>
          <Typography variant="body2">hi</Typography>
        </Stack>
      </Toolbar>
    </RootStyle>
  );
};

export default TopAppbar;
