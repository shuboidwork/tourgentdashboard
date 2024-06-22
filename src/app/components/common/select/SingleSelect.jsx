"use client";
import React from "react";
import clsx from "clsx";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import "./select.scss";

const SingleSelect = ({
  id,
  options = [],
  className,
  onChange,
  label,
  value
}) => {

  return (<FormControl>
    <InputLabel id={`lbl-id-${id}`}>{label}</InputLabel>
    <Select
      labelId={`lbl-id-${id}`}
      label={label}
      id={id}
      value={value}
      onChange={onChange}
      className={clsx("ss-drpdwn", className)}
    >
      {options.map((opt) => {
        return (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.text}
          </MenuItem>
        );
      })}
    </Select>

    </FormControl>
  );
};
export default SingleSelect;
