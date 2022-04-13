import { Card, Grid,Box, Stack, Typography, Badge, Link } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ borderRadius: 5 }}>
            <Box sx={{ pt: "100%", position: "relative" }}>
              {product.status && (
                <Badge
                  variant="filled"
                  sx={{
                    p: 1,
                    borderRadius: 5,
                    bgcolor: `${
                      product.status === "sale" ? "#FFC0CB" : "#FFC107"
                    }`,
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: "absolute",
                    textTransform: "uppercase",
                  }}
                >
                  {product.status}
                </Badge>
              )}
              <ProductImgStyle alt={product.name} src={product.cover} />
            </Box>

            <Stack spacing={2} sx={{ p: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Link href='#' sx={{cursor: "pointer"}}>
                  <Typography variant="subtitle2" noWrap>
                    {product.name}
                  </Typography>
                </Link>
                <Typography variant="body2">${product.price}</Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;