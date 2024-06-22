import React from "react";
import "./sign-up-form.scss";
import Button from "@/app/components/common/button";
import { ButtonTypes } from "@/app/components/common/button/constants";
import Input from "@/app/components/common/input";
import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import SocialSignInOptions from "../sign-in-icon/SocialSignInOptions";

const SignUp = () => {
  const getView = () => {
    return (
      <Paper className="sgnup-form-cont" variant="outlined" sx={{ px: 14, py: 8, textAlign: "center" }}>
        <Box sx={{ minWidth: "400px" }}>
          <Box className="sgnup-hdr" sx={{ fontSize: "h4.fontSize" }}> 
            Create Your Account
          </Box>
          <Box  className="sgnup-sub-hdr">Sign-up with</Box>
          <Box className="sgnup-with">
            <SocialSignInOptions />
          </Box>
          <Box className="sgnup-sub-hdr">or</Box>
          <Box sx={{ mb: 6 }}>
            <Stack direction="row" spacing={2} sx={{ my: 3 }}>
              <Input label="First Name" />
              <Input label="Last Name" />
            </Stack>

            <Stack direction="row" spacing={2} sx={{ my: 3 }}>
              <Input label="Email Address" />
            </Stack>

            <Stack direction="row" spacing={2} sx={{ my: 3 }}>
              <Input label="Password" type="password" />
            </Stack>
          </Box>
          <Box className="sgnup-buttons">
            <Stack direction="row" spacing={4}>
              <Button
                type={ButtonTypes.SECONDARY}
                sx={{ px: 2 }}
                title="Login"
              />
              <Button
                type={ButtonTypes.PRIMARY}
                sx={{ px: 2 }}
                title="Sign In"
              />
            </Stack>
          </Box>
        </Box>
      </Paper>
    );
  };
  return getView();
};

export default SignUp;
