'use client';
import React from "react";
import { Button, IconButton } from "@mui/material";
import { ButtonColors, ButtonSizes, ButtonTypes, ButtonTypesVariantMap } from "./constants";
import PropTypes from "prop-types";

const MuiButton = ({
  id,
  type = ButtonTypes.PRIMARY,
  onClick,
  title,
  href,
  color = ButtonColors.PRIMARY,
  disabled,
  icon
}) => {
  const handleClick = () => {
    onClick && onClick(id);
  }
  const getButtonView = () => {
    switch (type) {
      case ButtonTypes.ICON:
        return (
          <IconButton
            onClick={handleClick}
            aria-label={title}
            color={color}
            disabled={disabled}
          >
            {icon}
          </IconButton>
        );
      case "Link":
        return (
          <Button
            variant={type}
            href={href}
            onClick={handleClick}
            color={color}
            disableElevation
            disabled={disabled}
          >{title}</Button>
        );
      default:
        return (
          <Button
            variant={ButtonTypesVariantMap[type]}
            onClick={handleClick}
            color={color}
            disableElevation
            disabled={disabled}
          >
            {title}
          </Button>
        );
    }
  };
  return getButtonView();
};

MuiButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
};

export default MuiButton;