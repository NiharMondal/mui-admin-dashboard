import {
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const OrStyle = styled("p")(() => ({
  color: "gray",
  display: "flex",
  justifyContent: "center",
}));
const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = () => {
    setShowPass((show) => !show);
  };

  return (
    <>
      <OrStyle>Or</OrStyle>
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <TextField label="First name"/>
          <TextField label="Last name"/>
        </Stack>
        <TextField label="Email Address" type="email" />
        <TextField
          label="Password"
          type={showPass ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox checked={true} />}
            label="Remember me"
          />
          <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
            <MuiLink href="#">Forgot password?</MuiLink>
          </Typography>
        </Stack>
        <Button fullWidth variant="contained">
          Register
        </Button>
        <Typography
          variant="body2"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          Already have an account?
          <Link
            to="/login"
            style={{ color: "#2AC56A", fontWeight: "bold", marginLeft: "8px" }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default RegisterForm;
