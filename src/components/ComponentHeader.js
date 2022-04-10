import { Typography } from '@mui/material';
import React from 'react';

const ComponentHeader = ({title,variant}) => {
  return (
    <Typography variant={variant} sx={{
      fontWeight: 'bold', marginBottom:"30px "}}>{title}</Typography>
  );
};

export default ComponentHeader;