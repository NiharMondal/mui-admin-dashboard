import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const Logo = ({ logoIllustration }) => {
  return (
    <Link to="/">
      <Box
        component="img"
        src={logoIllustration}
        sx={{ height: 40, width: 40, mx: 3 }}
      />
    </Link>
  );
};

export default Logo;