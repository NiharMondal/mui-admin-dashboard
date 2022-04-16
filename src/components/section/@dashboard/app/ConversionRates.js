import { CardHeader } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {conversionOptions,conversionSeries} from '../../../charts/conversionChart'
import {CustomBox} from '../../../CustomBox'
const ConversionRates = () => {
  return (
    <CustomBox sx={{ mt: 4 }}>
      <CardHeader title="Conversion Rates" subheader="(49+ than last year)"/>
      <ReactApexChart type='bar' height={360} series={conversionSeries} options={conversionOptions} />
    </CustomBox>
  );
};

export default ConversionRates;