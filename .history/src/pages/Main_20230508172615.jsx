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
        <div>
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
      </div>
      <div className={app.section}>{/* <div className={subpage.gradient}></div> */}</div>
    </>
  );
};

export default Main;
