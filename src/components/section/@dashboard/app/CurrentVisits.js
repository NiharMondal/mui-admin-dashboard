import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, CardHeader } from "@mui/material";
import { CustomBox } from "../../../CustomBox";
import { pieChartOptions, pieChartSeries } from "../../../charts/pieCharts";


const CurrentVisits = () => {
  return (
    <CustomBox>
      <CardHeader title="Website Visits" />
      <Box sx={{ height: 280, mt: 7 }}>
        <ReactApexChart
          type="pie"
          series={pieChartSeries}
          options={pieChartOptions}
          height={280}
        />
      </Box>
    </CustomBox>
  );
};

export default CurrentVisits;
