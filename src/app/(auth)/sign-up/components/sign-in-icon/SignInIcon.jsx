'use client'
import Button from "@/app/components/views/button";
import { ButtonTypes } from "@/app/components/views/button/constants";
import { signIn } from "next-auth/react";
import React from "react";

const SignInIcon = ({icon, displayIcon}) => {
    const onSignInIconClick = (icon) => {
        signIn(icon);
      };
      
    return <Button 
    onClick={() => onSignInIconClick(icon)}
    type={ButtonTypes.ICON} key={icon} className={"sgnup-with-icon"}
    icon={displayIcon}
    />

}

export default SignInIcon;