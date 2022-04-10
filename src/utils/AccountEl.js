import {
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemIcon,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
const Header = styled("header")(() => ({
  height: "70px",
}));

const AccountEl = () => {
  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Header>
        <Typography variant="h6">Jaydon Frankie</Typography>
        <Typography variant="subtitle1">jaydon@gmail.com</Typography>
      </Header>
      <Divider />
      <Box sx={{ pt: 1 }}>
        <ListItemButton>
          <ListItemIcon>
            <AiFillHome />
          </ListItemIcon>
          Home
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <IoIosPerson />
          </ListItemIcon>
          Profile
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AiFillSetting />
          </ListItemIcon>
          Settings
        </ListItemButton>
        <Button fullWidth variant="outlined">Logout </Button>
      </Box>
    </Box>
  );
};

export default AccountEl;
