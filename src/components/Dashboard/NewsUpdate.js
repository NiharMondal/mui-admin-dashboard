import React from "react";
import { mockImgCover } from "../../utils/mockImages";
import { faker } from '@faker-js/faker'
import { Box, Stack,Link, Typography ,CardHeader,Divider,Button} from "@mui/material";
import { formatDistance } from "date-fns";
import { CustomBox } from "../CustomBox";
const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon(),
  };
});

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}

      />
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" >
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        {formatDistance(postedAt, new Date())}
      </Typography>
    </Stack>
  );
}
const NewsUpdate = () => {
  return (
    <CustomBox sx={{ mt: 4 }}>
      <CardHeader title="News Update" />
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
      </Stack>
      
      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          endIcon=""
        >
          View all
        </Button>
      </Box>
    </CustomBox>
  );
};

export default NewsUpdate;
