import { Box, Grid } from "@mui/material";
import React from "react";
import ComponentHeader from "../components/ComponentHeader";
import ConversionRates from "../components/Dashboard/ConversionRates";
import CurrentSubject from "../components/Dashboard/CurrentSubject";
import GridItem from "../components/Dashboard/GridItem";
import NewsUpdate from "../components/Dashboard/NewsUpdate";
import VisitsSection from "../components/Dashboard/VisitsSection";

const DashboardApp = () => {
  return (
    <Box>
      <ComponentHeader title="Hi, Welcome Back" variant="h5" />
      <GridItem />
      <VisitsSection />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          <ConversionRates />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CurrentSubject/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          <NewsUpdate />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CurrentSubject/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardApp;
