import { TextField ,MenuItem} from '@mui/material';
import React from 'react';

const BlogPostSorts = ({options}) => {
  return (
    <TextField select={true} size="small" value="latest" >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BlogPostSorts;