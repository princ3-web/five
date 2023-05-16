import React, { useState, useEffect } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import imagescroller from "../css/imagescroller.module.css";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];

  const [selectedBackground, toggleSelectedBackground] = useState(0);
  const [selectedButton, toggleSelectedButton] = useState(0);

  const backgrounds = [0, 1, 2];
  const backgroundsText = [
    {
      title: "Processors",
      text: "Introducing the revolutionary new processors, delivering lightning-fast speeds and unparalleled performance to power your business into the future.",
    },
    {
      title: "New Techs",
      text: "Unlock the full potential of your industry with cutting-edge technologies designed to increase efficiency, productivity, and profitability.",
    },
    {
      title: "GPUs",
      text: "Experience unprecedented gaming performance and immerse yourself in stunningly realistic graphics with our new ground-breaking graphics cards.",
    },
  ];

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
        <div className=""></div>
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
                : toggleSelectedBackground(backgrounds.length)
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
      <div className={app.section}>{/* <div className={subpage.gradient}></div> */}</div>
    </>
  );
};

export default Main;
