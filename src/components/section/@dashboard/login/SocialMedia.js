import { ListItemIcon, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const socialIcons = [
  {
    icon: <AiOutlineGoogle />,
    color: "#DF3E30",
  },
  {
    icon: <FaFacebookF />,
    color: "#1877F2",
  },
  {
    icon: <FaTwitter />,
    color: "#1877F2",
  },
];
const SocialMedia = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    
    >
      {socialIcons.map((item, index) => (
        <Box key={index}
          sx={{
            textAlign: "center",
            border: "1px solid gray",
            width: "150px",
            padding: "14px 0 8px 28px",
            cursor: "pointer",
            borderRadius: '5px',
          }}
        >
          <ListItemIcon
            sx={{
              fontSize: "20px",
              color: `${item.color}`
            }}
          >
            {item.icon}
          </ListItemIcon>
        </Box>
      ))}
    </Stack>
  );
};

export default SocialMedia;