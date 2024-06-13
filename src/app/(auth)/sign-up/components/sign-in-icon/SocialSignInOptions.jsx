"use client";
import React from "react";
import SignInIcon from "./SignInIcon";
import Box from "@mui/material/Box";
import {
  SignUpIconInfoMap,
  SignUpIcons,
} from "../sign-up-form/constants";

const SocialSignInOptions = ({ ...props }) => {
  return (
    <Box>
      {Object.values(SignUpIcons).map((i) => {
        const info = SignUpIconInfoMap[i];

        const { icon, disabled } = info;
        return (
          <SignInIcon
            key={icon}
            icon={icon}
            disabled={disabled}
            size="small"
            iconProps={{
              fontSize: "large",
              sx: { height: "40px", width: "40px" },
            }}
          />
        );
      })}
    </Box>
  );
};

export default SocialSignInOptions;
