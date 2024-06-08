import React from "react";
import "./sign-up-form.scss";
import Tile from "@/app/components/views/tile";
import Button from "@/app/components/views/button";
import { ButtonTypes } from "@/app/components/views/button/constants";
import Input from "@/app/components/views/input";
import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import SocialSignInOptions from "../sign-in-icon/SocialSignInOptions";

const SignUp = () => {
  const getView = () => {
    return (
      <>
        <Paper variant="outlined" sx={{ px: 14, py: 8, textAlign: "center" }}>
          <Box sx={{ minWidth: "400px" }}>
            <Box className="sgnup-hdr" sx={{ fontSize: "h4.fontSize" }}>
              Create Your Account
            </Box>
            <Box sx={{ fontSize: "h7.fontSize", mt: 4 }}>Sign-up with</Box>
            <Box sx={{ mt: 2 }}>
              <SocialSignInOptions />
            </Box>
            <Box sx={{ my: 3 }}>OR</Box>
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
            <Box>
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
        <Paper variant="outlined" sx={{ px: 14, py: 8, textAlign: "center" }}>
          <Box sx={{ minWidth: "400px" }}>
            <Box className="sgnup-hdr" sx={{ fontSize: "h4.fontSize" }}>
              Create Your Account
            </Box>
            <Box sx={{ fontSize: "h7.fontSize", mt: 4 }}>Sign-up with</Box>
            <Box sx={{ mt: 2 }}>
              <SocialSignInOptions />
            </Box>
            <Box sx={{ my: 3 }}>OR</Box>
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
            <Box>
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
      </>
    );
  };
  return <Tile className="sgnup-form-cont" content={getView()} />;
};

export default SignUp;
