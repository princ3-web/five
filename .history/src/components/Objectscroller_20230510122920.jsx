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

  const title = "Presenting newest processor unit on the market"

  const text =
    "This cutting-edge technology has been designed to deliver lightning-fast speed and uncompromising performance for even the most demanding applications. With its advanced architecture and innovative features, this processor unit can handle everything from intensive gaming to complex video editing with ease. And thanks to its advanced multi-core design, it can tackle multiple tasks simultaneously without breaking a sweat.";

  return (
    <div className={objectscroller.objectscroller}>
      <div className={objectscroller.gradient}></div>
      <div className={objectscroller.textContainer}>
        <div className={objectscroller.title}>{title}</div>
        <div className={objectscroller.text}>{text}</div>
        <div className={objectscroller.button}>compare pl</div>
      </div>
      <img
        className={objectscroller.image}
        src={require("../assets/images/object1.png")}
        alt=""
      />
    </div>
  );
};

export default Objectscroller;
