import React, { useState } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];

  const [selectedButton, toggleSelectedButton] = useState(0);

  return (
    <>
      <div className={app.section}>
        <div className={background}></div>
        <img
          className={background.image}
          src={require("../assets/images/background0.jpg")}
          alt=""
        />
        <img
          className={background.image}
          src={require("../assets/images/background1.jpg")}
          alt=""
        />
        <img
          className={background.image}
          src={require("../assets/images/background2.jpg")}
          alt=""
        />
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
