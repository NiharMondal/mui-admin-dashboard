import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
  margin: theme.spacing(4,0),
  borderRadius: theme.spacing(2)
}));