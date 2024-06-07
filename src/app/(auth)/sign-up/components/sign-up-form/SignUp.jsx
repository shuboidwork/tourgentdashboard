import React from "react";
import "./sign-up-form.scss";
import Tile from "@/app/components/views/tile";
import { SignUpIconTypeMap } from "./constants";
import Button from "@/app/components/views/button";
import { ButtonTypes } from "@/app/components/views/button/constants";
import SignInIcon from "../sign-in-icon";
import Input from "@/app/components/views/input";

const SignUp = () => {
  const getView = () => {
    return (
      <>
        <div className="sgnup-hdr">Create Your Account</div>
        <div className="sgnup-sub-hdr">Sign-up with</div>
        <div className="sgnup-with">
          {Object.keys(SignUpIconTypeMap).map((icon) => {
            const displayIcon = SignUpIconTypeMap[icon];
            return (
              <SignInIcon key={icon} displayIcon={displayIcon} icon={icon} />
            );
          })}
        </div>
        <div className="sgnup-sub-hdr">or</div>
        <Input label={"Hello"}/>
        <div className="sgnup-buttons">
          <Button type={ButtonTypes.SECONDARY} title="Login" />
          <Button type={ButtonTypes.PRIMARY} title="Sign In" />
        </div>
      </>
    );
  };
  return <Tile className="sgnup-form-cont" content={getView()} />;
};

export default SignUp;
