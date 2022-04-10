import { Avatar, IconButton } from '@mui/material';
import React,{useState} from 'react';
import {GiUsaFlag} from 'react-icons/gi'
const MenuPopOver = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <IconButton>
      <Avatar>
        <GiUsaFlag/>
      </Avatar>
    </IconButton>
  );
};

export default MenuPopOver;