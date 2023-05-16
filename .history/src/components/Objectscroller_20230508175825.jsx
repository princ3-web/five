import React from "react";
import objectscroller from "../css/objectscroller.module.css";

const Objectscroller = () => {
  return (
    <div>
      <div className={objectscroller.gradient}>
        <div className={objectscroller.gradient}></div>
        <div className={objectscroller.gradient}></div>
      </div>
    </div>
  );
};

export default Objectscroller;
