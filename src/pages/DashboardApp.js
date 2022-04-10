import { Box, Grid } from "@mui/material";
import React from "react";
import ComponentHeader from "../components/ComponentHeader";
import CurrentVisits from "../components/Dashboard/CurrentVisits";
import GridItem from "../components/Dashboard/GridItem";
import WebsiteVisits from "../components/Dashboard/WebsiteVisits";
const DashboardApp = () => {
  return (
    <Box >
      <ComponentHeader title="Hi, Welcome Back" variant="h5"/>
      <GridItem />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} md={8}>
          <WebsiteVisits/>
        </Grid>
        <Grid item xs={12} sm={7} md={4}>
          <CurrentVisits/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardApp;
