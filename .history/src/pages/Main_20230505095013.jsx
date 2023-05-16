import React from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import background from "../css/background.module.css";
import openingInfo from "../css/openingInfo.module.css";
import card from "../css/card.module.css";
import { Link } from "react-router-dom";

const Main = () => {

const newsButtons = [aaa, bbb, ccc, ddd]

  return (
    <>
      <div className={app.section}>
        <img
          className={background.image}
          src={require("../assets/images/background0.jpg")}
          alt=""
        />
        <div className={background.gradient}></div>
      </div>

      <div className={app.section}>
        <div className={subpage.title} style={{ textAlign: "center" }}>
          News
        </div>
        {n}
      </div>
    </>
  );
};

export default Main;
