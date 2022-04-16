import { Badge, styled } from '@mui/material';
import React from 'react';
import {BsCartPlusFill} from 'react-icons/bs'
const RootStyle = styled("div")(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: "flex",
  cursor: "pointer",
  position: "fixed",
  alignItems: "center",
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  backgroundColor: "#B8EDD2",
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
}));
const ProductWidget = () => {
  return (
    <RootStyle>
      <Badge showZero badgeContent={0} color="success" max={99}>
        <BsCartPlusFill size={25} color="#2F906A" />
      </Badge>
    </RootStyle>
  );
};

export default ProductWidget;