import { Outlet } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// components

// ----------------------------------------------------------------------

const AuthStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

// ----------------------------------------------------------------------

const LoginLayout = () => {
  return (
    <AuthStyle>
      <Outlet />
    </AuthStyle>
  );
};
export default LoginLayout;
