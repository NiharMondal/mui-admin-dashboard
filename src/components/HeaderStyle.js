import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const HeaderStyle = ({title, link, to}) => {
  return (
    <Box
      sx={{
        top: 0,
        right: 0,
        position: "absolute",
        height: 50,
      }}
    >
      <Typography
        variant="body2"
        sx={{display: {xs: 'none', md:'block'}}}
      >
       {title}
        <Box component="span" sx={{ ml: 1, fontWeight: "bold" }}>
          <Link to={to} style={{ color: "#2AC56A" }}>
            {link}
          </Link>
        </Box>
      </Typography>
    </Box>
  );
};

export default HeaderStyle;