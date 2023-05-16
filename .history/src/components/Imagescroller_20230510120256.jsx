import React, { useEffect, useState } from "react";
import imagescroller from "../css/imagescroller.module.css";

const Imagescroller = () => {
  const [selectedBackground, toggleSelectedBackground] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      selectedBackground < 2
        ? toggleSelectedBackground((state) => state + 1)
        : toggleSelectedBackground(0);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedBackground]);



  return (
    <div>
      <div className={imagescroller.imageScroller}>
        {backgrounds.map((item, n) => (
          <img
            className={[
              imagescroller.image,
              selectedBackground !== n ? imagescroller.imageFade : "",
            ].join(" ")}
            src={require("../assets/images/background" + n + ".webp")}
            alt=""
          />
        ))}

        <img
          className={imagescroller.arrow}
          onClick={() =>
            selectedBackground > 0
              ? toggleSelectedBackground((state) => state - 1)
              : toggleSelectedBackground(backgrounds.length - 1)
          }
          style={{ left: "0", rotate: "180deg", translateY: "-50%" }}
          src={require("../assets/icons/arrow.png")}
          alt=""
        />
        <img
          className={imagescroller.arrow}
          onClick={() =>
            selectedBackground < backgrounds.length - 1
              ? toggleSelectedBackground((state) => state + 1)
              : toggleSelectedBackground(0)
          }
          style={{ right: "0", rotate: "0deg", translateY: "-50%" }}
          src={require("../assets/icons/arrow.png")}
          alt=""
        />
        <div className={imagescroller.gradient}></div>
      </div>
      <div className={imagescroller.explore}>
        <div className={imagescroller.exploreTitle}>
          {backgroundsText[selectedBackground].title}
        </div>
        <div className={imagescroller.exploreText}>
          {backgroundsText[selectedBackground].text}
        </div>
        <div className={imagescroller.exploreButton}>Explore</div>
      </div>
    </div>
  );
};

export default Imagescroller;
