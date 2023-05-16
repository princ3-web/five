import React, { useState } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];

  const [selectedBackground, toggleSelectedBackground] = useState(0);
  const [selectedButton, toggleSelectedButton] = useState(0);

  const backgrounds = [0, 1, 2];

  console.log(selectedBackground);

  return (
    <>
      <div className={app.section}>
        <div className={background.imageScroller}>
         {backgrounds.map(item =>
         <img
         className={[
           background.image,
           selectedBackground !== 0 ? background.imageFade : "",
         ].join(" ")}
         src={require("../assets/images/background0.webp")}
         alt=""
       />
         ) }
          <img
            className={[
              background.image,
              selectedBackground !== 1 ? background.imageFade : "",
            ].join(" ")}
            src={require("../assets/images/background1.webp")}
            alt=""
          />
          <img
            className={[
              background.image,
              selectedBackground !== 2 ? background.imageFade : "",
            ].join(" ")}
            src={require("../assets/images/background2.webp")}
            alt=""
          />

          <img
            className={background.arrow}
            onClick={() =>
              selectedBackground < 2
                ? toggleSelectedBackground((state) => state + 1)
                : toggleSelectedBackground(0)
            }
            style={{ right: "0", rotate: "0deg", translateY: "-50%" }}
            src={require("../assets/images/arrow.png")}
            alt=""
          />
          <img
            className={background.arrow}
            onClick={() =>
              selectedBackground > 0
                ? toggleSelectedBackground((state) => state - 1)
                : toggleSelectedBackground(2)
            }
            style={{ left: "0", rotate: "180deg", translateY: "-50%" }}
            src={require("../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className={background.gradient}></div>
      </div>

      <div className={app.section}>
        <div
          className={subpage.newsTitle}
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          News
        </div>
        <div className={subpage.newsButtons}>
          {newsButtons.map((item, n) => (
            <div
              className={[
                subpage.newsButton,
                n === selectedButton && subpage.newsButtonSelected,
              ].join(" ")}
              onClick={() => toggleSelectedButton(n)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={app.section}></div>
    </>
  );
};

export default Main;
