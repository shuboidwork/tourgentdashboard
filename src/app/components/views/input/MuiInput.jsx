import React from "react";
import { TextField } from "@mui/material";
import "./input.scss"
import clsx from "clsx";

const MuiInput = ({id, type, className, label, size}) => {

    const getInputView = () => {
        switch(type){
            default: 
           return <TextField
            id={id}
            variant="outlined"
            size={size}
            inputProps={{className: clsx("inp", type, className)}}
            style={{
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#000000"
                    }
                }
            }}
            />
        }

    }

    return <div className="input-cont">
        <div className="input-label">{label}</div>
        {getInputView()}
    </div>

}
export default MuiInput;