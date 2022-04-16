import React from 'react';
import { Box, Grid } from '@mui/material';
import WebsiteVisits from './WebsiteVisits';
import CurrentVisits from './CurrentVisits';
const VisitsSection = () => {
  return (
    <Box sx={{mt: 4}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <WebsiteVisits />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CurrentVisits />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisitsSection;