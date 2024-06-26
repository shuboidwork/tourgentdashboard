"use client";
import { CircularProgress } from "@mui/material";
import { React } from "react";
import "./loader.scss";
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
  return (
    <div className="loader-cont">
      <CircularProgress className="loader" />
    </div>
  );
};
export default Loader;
