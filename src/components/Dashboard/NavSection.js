import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import React from "react";
import { List, ListItemText } from "@mui/material";
const ListItemStyle = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent:'center',
  padding: theme.spacing(1, 2, 1, 4),
  textDecoration: "none",
  position: "relative",
  color: "inherit",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
  "&.active": {
    fontWeight: "bold",
    color: "#2F906A",
    backgroundColor: "#b8edd2",
    "&.active::after": {
      top: 0,
      right: 0,
      width: 3.5,
      bottom: 0,
      content: "''",
      position: "absolute",
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: "#2F906A",
    },
  },
}));
const ListItemIconStyle = styled('div')(() => ({
  height: 20,
  width: 20,
  margin: '0px 8px',

  
}))
const NavSection = ({ navConfig }) => {
  return (
    <List disablePadding>
      {navConfig.map((item, index) => (
        <ListItemStyle to={item.path} key={index}>
          <ListItemIconStyle >{item.icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={item.title} />
        </ListItemStyle>
      ))}
    </List>
  );
};

export default NavSection;
