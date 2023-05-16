import React, { useState } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];

  const [selectedBackground, toggleSelectedBackground] = useState(0);
  const [selectedButton, toggleSelectedButton] = useState(0);

  console.log(selectedBackground)

  return (
    <>
      <div className={app.section}>
        <div className={background.imageScroller}>
          <img
            className={background.image}
            src={require("../assets/images/background" + selectedBackground + ".jpg")}
            alt=""
          />
          <img
            className={background.arrow}
            onClick={() => toggleSelectedBackground(state => state + 1)}
            style={{ right: "0", rotate: "0deg", translateY: "-50%"}}
            src={require("../assets/images/arrow.png")}
            alt=""
          />
          <img
            className={background.arrow}
            onClick={() => selectedBackground > toggleSelectedBackground(state => state - 1)}
            style={{ left: "0", rotate: "180deg", translateY: "-50%"}}
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
