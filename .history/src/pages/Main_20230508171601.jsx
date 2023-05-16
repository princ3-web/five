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
     <Image>
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
