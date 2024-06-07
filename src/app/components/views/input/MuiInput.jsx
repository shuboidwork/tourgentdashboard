"use client";
import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import "./input.scss";
import clsx from "clsx";
import { InputTypes } from "./constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MuiInput = ({
  id,
  type,
  className,
  label,
  size,
  validate,
  errorText,
  row,
}) => {
  const [inputType, setInputType] = useState(type);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const switchPassword = () => {
    if (inputType === InputTypes.TEXT) {
      setInputType(InputTypes.PASSWORD);
    } else {
      setInputType(InputTypes.TEXT);
    }
  };

  const handleValidation = (value) => {
    if (validate) {
      const isValid = validate(value);
      setError(!isValid);
      setErrorMessage(!isValid ? errorText : "");
    }
  };

  const getInputView = () => {
    let inputProps = { className: clsx("inp", type, className) };
    let extraProps = {};
    switch (type) {
      case InputTypes.PASSWORD:
        inputProps = {
          ...inputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={switchPassword}
                //   onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {inputType === InputTypes.PASSWORD ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          ),
        };
        break;
      case InputTypes.EMAIL:
        inputProps = {
          ...inputProps,
        };
        break;
      case InputTypes.MULTILINE:
        extraProps = {
          multiline: true,
          row: row,
        };
        break;

      default:
    }

    return (
      <TextField
        id={id}
        variant="outlined"
        size={size}
        type={inputType}
        InputProps={inputProps}
        {...extraProps}
        error={error}
        helperText={error ? errorMessage : ""}
        onBlur={(e) => handleValidation(e.target.value)}
        style={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
            },
          },
        }}
      />
    );
  };

  return (
    <div className="input-cont">
      <div className="input-label">{label}</div>
      {getInputView()}
    </div>
  );
};
export default MuiInput;
