import { Grid,Box, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { dashboradData } from '../../utils/dashboardData';

const GridItem = () => {
  
  return (
    <Grid container spacing={4}>
      {dashboradData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              textAlign: "center",
              paddingY: "40px",
              bgcolor: `${item.bgColor}`,
              borderRadius: "20px",
            }}
          >
            <ListItemIcon
              sx={{
                fontSize: "27px",
                padding: "24px",
                color: `${item.color}`,
                bgcolor: `${item.bgColor}`,
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
                borderRadius:'50%'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <Typography sx={{paddingTop:'20px'}} variant="h5">{item.total} </Typography>
            <Typography variant="subtitle2">{item.head} </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridItem;