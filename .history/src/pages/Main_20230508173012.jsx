import React, { useState, useEffect } from "react";
import app from "../css/app.module.css";
import subpage from "../css/subpage.module.css";
import Imagescroller from "../components/Imagescroller";

const Main = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];
  const [selectedButton, toggleSelectedButton] = useState(0);

  return (
    <>
      <div className={app.section}>
        <Imagescroller />
      </div>

      <div className={app.section}>
        <
      </div>
      <div className={app.section}>{/* <div className={subpage.gradient}></div> */}</div>
    </>
  );
};

export default Main;
