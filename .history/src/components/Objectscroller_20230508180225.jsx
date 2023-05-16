import React from "react";
import objectscroller from "../css/objectscroller.module.css";

const Objectscroller = () => {
  return (
    <div>
      <div className={objectscroller.gradient}>
        <div className={objectscroller.textContainer}>
          <div className={objectscroller.title}>Title</div>
          <div className={objectscroller.text}>text c</div>
        </div>
      </div>
    </div>
  );
};

export default Objectscroller;
