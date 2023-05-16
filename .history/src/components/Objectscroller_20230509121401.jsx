import React, { useEffect, useState } from "react";
import objectscroller from "../css/objectscroller.module.css";

const Objectscroller = () => {
  const [scrollPos, setScrollPos] = useState(false);

  // useEffect for setting useState: scrollPos
  useEffect(() => {
    const handleMouseMove = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  console.log(scrollPos);

  return (
    <div>
      <div className={objectscroller.gradient}
      style={{
        translate: "0px " + (- scrollPos/3 + 400 + "px").toString(),
      }}
      >
        <div className={objectscroller.textContainer}>
          <div className={objectscroller.title}>Title</div>
          <div className={objectscroller.text}>text content</div>
        </div>
        <img
          className={objectscroller.image}
          
          src={require("../assets/images/object1.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Objectscroller;
