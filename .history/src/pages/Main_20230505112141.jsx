import React from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";
import openingInfo from "../css/openingInfo.module.css";
import card from "../css/card.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  const newsButtons = ["aaa", "bbb", "ccc", "ddd"];

  return (
    <>
      <img
        className={background.image}
        src={require("../assets/images/background0.jpg")}
        alt=""
      />
      <div className={background.gradient}></div>

      <div className={app.section}>
        <div className={subpage.newsTitle} style={{ textAlign: "center" }}>
          News
        </div>
        <div className={subpage.newsButtons}>
          {newsButtons.map((item) => (
            <div className={subpage.newsButton}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
