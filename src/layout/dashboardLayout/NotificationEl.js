import React from "react";
import {
  Box,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { newData, olderData } from "./NotificationData";
const Header = styled("header")(() => ({
  height: "70px",
}));

const ListItemIconStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const TypographyStyle = styled(Typography)(() => ({
  fontSize: "18px",
}));
const NotificationEl = () => {
  return (
    <Box sx={{ p: 2, width: 410 }}>
      <Header>
        <Typography variant="h5">Notificaton</Typography>
        <Typography variant="body2">
          You have two unread notifications
        </Typography>
      </Header>
      <Divider />
      <Box>
        <Typography variant="h6">NEW</Typography>
        {newData.map((item, index) => (
          <ListItemButton
            sx={{ bgcolor: "#F6F7F8", marginY: "4px",borderRadius:'8px' }}
            key={index}
          >
            <ListItemIconStyle>
              <ListItemIcon sx={{ fontSize: "35px", color:"purple" }}>{item.icon}</ListItemIcon>
              <div>
                <TypographyStyle variant="subtitle2">
                  {item.head}
                  <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                    {item.span}
                  </span>
                </TypographyStyle>

                <Typography variant="caption"> {item.time}</Typography>
              </div>
            </ListItemIconStyle>
          </ListItemButton>
        ))}
      </Box>

      <Box>
        <Typography variant="h6">BEFORE THAT</Typography>
        {olderData.map((item, index) => (
          <ListItemButton sx={{ marginY: "4px", borderRadius:"8px" }} key={index}>
            <ListItemIconStyle>
              <ListItemIcon sx={{ fontSize: "35px",color:"skyblue" }}>{item.icon}</ListItemIcon>
              <div>
                <TypographyStyle variant="h6">
                  {item.head}
                  <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                    {item.span}
                  </span>
                </TypographyStyle>

                <Typography variant="caption">{item.time} </Typography>
              </div>
            </ListItemIconStyle>
          </ListItemButton>
        ))}
      </Box>
    </Box>
  );
};

export default NotificationEl;
