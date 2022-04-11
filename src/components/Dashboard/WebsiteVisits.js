import React from 'react';
import { CustomBox } from '../CustomBox';
import ReactApexChart from "react-apexcharts";
import { chartSeries, chartOptions } from '../charts/comboCharts';
import { CardHeader } from '@mui/material';

const WebsiteVisits = () => {
  return (
    <CustomBox>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      
      <ReactApexChart
        type="line"
        series={chartSeries}
        options={chartOptions}
        height="350"
      />
    </CustomBox>
  );
};

export default WebsiteVisits;