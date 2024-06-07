'use client';
import React from "react";
import { Button, IconButton } from "@mui/material";
import {ButtonSizes, ButtonTypes, ButtonTypesVariantMap } from "./constants";
import PropTypes from "prop-types";
import Icon from "../icon";
import clsx from "clsx";
import './button.scss';

const MuiButton = ({
  id,
  type = ButtonTypes.PRIMARY,
  onClick,
  title,
  href,
  disabled,
  icon,
  className
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
            disabled={disabled}
            disableRipple
          >
            <Icon icon={icon} className={className}/>
          </IconButton>
        );
      case "Link":
        return (
          <Button
            variant={type}
            href={href}
            onClick={handleClick}
            disableElevation
            disabled={disabled}
            className={clsx('link', className)}
          >{title}</Button>
        );
      default:
        return (
          <Button
            variant={ButtonTypesVariantMap[type]}
            onClick={handleClick}
            disableElevation
            disabled={disabled}
            className={clsx('btn', type, className)}
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
};

export default MuiButton;