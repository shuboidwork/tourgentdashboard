"use client";
import Button from "@/app/components/common/button";
import { ButtonTypes } from "@/app/components/common/button/constants";
import { signIn } from "next-auth/react";
import React from "react";

const SignInIcon = ({ icon, disabled, provider, ...props }) => {
  const onSignInIconClick = () => {
    signIn(provider);
  };

  return (
    <Button
      onClick={onSignInIconClick}
      type={ButtonTypes.ICON}
      key={icon}
      sx={{ px: 2 }}
      icon={icon}
      disabled={disabled}
      {...props}
    />
  );
};

export default SignInIcon;
