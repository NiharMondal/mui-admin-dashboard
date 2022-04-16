import { Typography } from '@mui/material';
import React from 'react';

const ComponentHeader = ({title,variant}) => {
  return (
    <Typography variant={variant} sx={{
      fontWeight: 'bold', marginBottom:"30px ", lineHeight: 0}}>{title}</Typography>
  );
};

export default ComponentHeader;