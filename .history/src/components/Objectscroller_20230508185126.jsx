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
        <img className={objectscroller.image} src={require("../assets/images/object1.png")} alt="" />
      </div>
    </div>
  );
};

export default Objectscroller;
