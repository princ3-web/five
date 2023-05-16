import React from "react";
import objectscroller from "../css/objectscroller.module.css";

const Objectscroller = () => {
  return (
    <div>
      <div className={objectscroller.gradient}>
        <div className={objectscroller.textContainer}>
          <div className={objectscroller.title}>Title</div>
          <div className={objectscroller.text}>text content</div>
        </div>
        <img src={require("../assets")} alt="" />
      </div>
    </div>
  );
};

export default Objectscroller;
