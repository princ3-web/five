import React, { useState, useEffect } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];

  const [selectedBackground, toggleSelectedBackground] = useState(0);
  const [selectedButton, toggleSelectedButton] = useState(0);

  const backgrounds = [0, 1, 2];
  const backgroundsText = ["new processors", "new technologies", "new GPUs"];

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
    <>
      <div className={app.section}>
        <div className={background.imageScroller}>
          {backgrounds.map((item, n) => (
            <img
              className={[
                background.image,
                selectedBackground !== n ? background.imageFade : "",
              ].join(" ")}
              src={require("../assets/images/background" + n + ".webp")}
              alt=""
            />
          ))}

          <img
            className={background.arrow}
            onClick={() =>
              selectedBackground < backgrounds.length - 1
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
                : toggleSelectedBackground(backgrounds.length)
            }
            style={{ left: "0", rotate: "180deg", translateY: "-50%" }}
            src={require("../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className={background.gradient}></div>
        <div className={background.explore}>
          <div className={background.exploreText}>
            {Jeżeli jesteś tu nowy wkrótce poznasz jak roztrzepaną osobą jestem.}
          </div>
          <div className={background.exploreButton}>Explore</div>
        </div>
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
