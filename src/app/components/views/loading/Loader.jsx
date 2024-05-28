'use client'
import { CircularProgress } from "@mui/material";
import { React, useEffect, useState } from "react";

const Loader = () => {
    // const [progress, setProgress] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);
    

    // return (<CircularProgress variant="determinate" value={progress} />);
    return (<CircularProgress />);
};
export default Loader;