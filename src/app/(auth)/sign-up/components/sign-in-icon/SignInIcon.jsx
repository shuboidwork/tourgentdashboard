"use client";
import Button from "@/app/components/views/button";
import { ButtonTypes } from "@/app/components/views/button/constants";
import { signIn } from "next-auth/react";
import React from "react";

const SignInIcon = ({ icon, displayIcon, ...props }) => {
  const onSignInIconClick = (icon) => {
    signIn(icon);
  };

  return (
    <Button
      onClick={() => onSignInIconClick(icon)}
      type={ButtonTypes.ICON}
      key={icon}
      sx={{ px: 2 }}
      icon={displayIcon}
      {...props}
    />
  );
};

export default SignInIcon;
