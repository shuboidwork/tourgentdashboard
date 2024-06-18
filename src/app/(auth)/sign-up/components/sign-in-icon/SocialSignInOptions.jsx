"use client";
import React from "react";
import SignInIcon from "./SignInIcon";
import Box from "@mui/material/Box";
import { SignUpIconInfoMap, SignUpProviders } from "../sign-up-form/constants";

const SocialSignInOptions = ({ ...props }) => {
  return (
    <Box>
      {Object.values(SignUpProviders).map((signupProvider) => {
        const info = SignUpIconInfoMap[signupProvider];

        const { icon, disabled } = info;
        return (
          <SignInIcon
            key={signupProvider}
            provider={signupProvider}
            icon={icon}
            disabled={disabled}
            size="small"
            iconProps={{
              className: "sgnup-with-icon",
              fontSize: "large",
              // sx: { height: "40px", width: "40px" },
            }}
          />
        );
      })}
    </Box>
  );
};

export default SocialSignInOptions;
