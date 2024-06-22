import React from "react";
import PropTypes from "prop-types";
import "./avatar.scss";
import { Avatar } from "@mui/material";


const MuiAvatar = ({alt, icon}) => {
return (
    <Avatar color="secondary" alt={alt} sx={{ width: "inherit", height: "inherit" }}>
        {icon}
    </Avatar>

)
}
MuiAvatar.propTypes = {
    alt: PropTypes.string,
    icon: PropTypes.shape({})
}
export default MuiAvatar;