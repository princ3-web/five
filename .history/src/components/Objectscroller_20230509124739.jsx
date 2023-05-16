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

  const title = 

  const text =
    "This cutting-edge technology has been designed to deliver lightning-fast speed and uncompromising performance for even the most demanding applications. With its advanced architecture and innovative features, this processor unit can handle everything from intensive gaming to complex video editing with ease. And thanks to its advanced multi-core design, it can tackle multiple tasks simultaneously without breaking a sweat.";

  return (
    <div className={objectscroller.objectscroller}>
      <div className={objectscroller.gradient}></div>
      <div className={objectscroller.textContainer}>
        <div className={objectscroller.title}>Title</div>
        <div className={objectscroller.text}></div>
      </div>
      <img
        className={objectscroller.image}
        // style={{
        //   translate: "0px " + (-scrollPos/4 + 300 + "px").toString(),
        // }}
        src={require("../assets/images/object1.png")}
        alt=""
      />
    </div>
  );
};

export default Objectscroller;
