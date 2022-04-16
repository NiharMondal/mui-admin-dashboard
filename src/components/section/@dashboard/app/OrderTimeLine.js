import { Box, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomBox } from '../../../CustomBox';
import { faker } from '@faker-js/faker';
import { formatDistance } from "date-fns";
const TIMELINES = [
  {
    title: "1983, orders, $4220",
    time: faker.date.past(),
    type: "order1",
  },
  {
    title: "12 Invoices have been paid",
    time: faker.date.past(),
    type: "order2",
  },
  {
    title: "Order #37745 from September",
    time: faker.date.past(),
    type: "order3",
  },
  {
    title: "New order placed #XF-2356",
    time: faker.date.past(),
    type: "order4",
  },
  {
    title: "New order placed #XF-2346",
    time: faker.date.past(),
    type: "order5",
  },
];

const OrderTimeLine = () => {
  return (
    <CustomBox sx={{mt:4}}>
      <CardHeader title="Order Timeline" />
      <Stack spacing={1}>
        {
          TIMELINES.map((item, index) => (
            <Box key={index} sx={{pl:2}}>
              <Typography variant='subtitle1'>{item.title} </Typography>
              <Typography variant='caption' >{formatDistance(item.time, new Date())}</Typography>
            </Box>
          ))
        }
      </Stack>
    </CustomBox>
  );
};

export default OrderTimeLine;