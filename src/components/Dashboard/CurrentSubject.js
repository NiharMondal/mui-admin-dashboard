import { Box, CardHeader } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { radarOptions, radarSeries } from "../charts/radarChart";
import { CustomBox } from "../CustomBox";

const CurrentSubject = () => {
  return (
    <CustomBox sx={{ mt: 4 }}>
      <CardHeader title="Current Subject" />
      <Box sx={{ mt: 3, }}>
        <ReactApexChart
          type="radar"
          series={radarSeries}
          options={radarOptions}
          height={340}
        />
      </Box>
    </CustomBox>
  );
};

export default CurrentSubject;
