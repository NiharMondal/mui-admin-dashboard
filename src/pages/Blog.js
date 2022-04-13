import {
  Box,
  Button,
  Stack,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";
import React from "react";
import ComponentHeader from "../components/ComponentHeader";
import { BsSearch } from "react-icons/bs";
import BlogPostSorts from "../components/Dashboard/section/blog/BlogPostSorts";
import blogArray from "../mock/blog";
import BlogCard from "../components/Dashboard/section/blog/BlogCard";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

const Blog = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ComponentHeader variant="h5" title="Blog" />
        <Button variant="contained" color="success">
          Add Blog
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 3 }}
      >
        <OutlinedInput
          placeholder="Search here..."
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <BlogPostSorts options={sortOptions} />
      </Stack>
      <Grid container spacing={2}>
        {blogArray.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
