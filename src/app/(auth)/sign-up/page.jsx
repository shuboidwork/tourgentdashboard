import { Airlines } from "@mui/icons-material";
import React from "react";
import "./page.scss";
import SignUp from "./components/sign-up-form";


export default function Page() {
    // const iconStyles = {
    //     width: "38px",
    //     height: "38px",
    //     filter: "drop-shadow(#939393 2px 3px 2px)",
    //   };

    return <div className="sgnup-cont">
        {/* <div className="sgnup-lgo">
          <Airlines color="secondary" style={iconStyles}></Airlines>
          <div className="sgnup-lgo-txt">Tourgent</div>
        </div> */}
        <SignUp/>
    </div>
}