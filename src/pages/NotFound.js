import { Box,Container, Button, Typography } from '@mui/material';
import React from 'react';
import Logo from '../components/Logo';
import ComponentHeader from '../components/ComponentHeader'
import {Link as RouterLink} from 'react-router-dom'
const NotFound = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Logo logoIllustration="/mock-images/logo.svg" />
      <Container>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <ComponentHeader
            variant="h5"
            title=" Sorry, page not found!"
          />
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>

          <Box
            component="img"
            src="/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;