import { Box } from '@mui/material';
import React from 'react';
import ComponentHeader from '../components/ComponentHeader';

import ProductList from '../components/section/@dashboard/product/ProductList';
import ProductWidget from '../components/section/@dashboard/product/ProductWidget';
import products from '../mock/products';
const Product = () => {
  return (
    <Box >
      <ComponentHeader variant="h5" title="Products" />
      <ProductList products={products} />
      <ProductWidget/>
    </Box>
  );
};

export default Product;