"use client";
import SignInIcon from "./SignInIcon";
import Box from "@mui/material/Box";
import { SignUpIconTypeMap } from "../sign-up-form/constants";

const SocialSignInOptions = ({ ...props }) => {
  const getSocialIcon = (iconName) => {
    return SignUpIconTypeMap[iconName];
  };

  return (
    <Box>
      {Object.keys(SignUpIconTypeMap).map((icon) => {
        const displayIcon = getSocialIcon(icon);
        return (
          <SignInIcon
            key={icon}
            displayIcon={displayIcon}
            icon={icon}
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
