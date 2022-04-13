import {
  Grid,
  Link,
  Avatar,
  Card,
  CardContent,
  Typography,
  ListItemIcon,
  Box,
  Stack,
} from "@mui/material";
import { formatDistance } from "date-fns";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AiFillMessage, AiFillEye, AiOutlineShareAlt } from "react-icons/ai";
const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const BlogCard = ({ blog, index }) => {
  const { cover, title, view, comment, share, author, createdAt } = blog;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  const postInfo = [
    { number: comment, icon: <AiFillMessage/> },
    { number: view, icon: <AiFillEye/> },
    { number: share, icon: <AiOutlineShareAlt/> },
  ];
  return (
    <Grid
      item
      xs={12}
      sm={latestPostLarge ? 12 : 6}
      md={latestPostLarge ? 6 : 3}
    >
      <Card sx={{ position: "relative" }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: "calc(100% * 4 / 3)",
              "&:after": {
                top: 0,
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: "calc(100% * 4 / 3)",
                sm: "calc(100% * 3 / 4.66)",
              },
            }),
          }}
        >
          <div
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              ...((latestPostLarge || latestPost) && { display: "none" }),
            }}
          />
          <AvatarStyle
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />

          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: "100%",
              position: "absolute",
            }),
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: "text.disabled", display: "block" }}
          >
            {formatDistance(createdAt, new Date())}
          </Typography>

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...(latestPostLarge && { typography: "h5", height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: "common.white",
              }),
            }}
          >
            {title}
          </TitleStyle>
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              ml: index === 0 ? 0 : .75,
              ...((latestPostLarge || latestPost) && {
                color: "gray.500",
              }),
              mt: 2,
            }}
          >
            <Stack direction="row" spacing={3}>
              {postInfo.map((info, index) => (
                <ListItemIcon key={index}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  {info.icon}{" "}
                  <Typography component="span" sx={{pl:.5}}>{info.number}</Typography>
                </ListItemIcon>
              ))}
            </Stack>
          </Box>
          <InfoStyle></InfoStyle>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogCard;
