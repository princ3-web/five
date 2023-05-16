import React, { useState } from "react";
import newspicker from "../css/newspicker.module.css";
import { Link } from "react-router-dom";
import News from "./News";
import Events from "./Events";
import Community from "./Community";


const Newspicker = () => {
  const newsButtons = ["News", "Events", "Community"];
  const [selectedButton, toggleSelectedButton] = useState(0);
  const [selectedNews, toggleSelectedNews] = useState(0);

  return (
    <div className={newspicker.newspicker}>
      <div
        className={newspicker.newsTitle}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        News
      </div>
      <div className={newspicker.newsButtons}>
        {newsButtons.map((item, n) => (
          <div
            className={[
              newspicker.newsButton,
              n === selectedButton && newspicker.newsButtonSelected,
            ].join(" ")}
            onClick={() => toggleSelectedButton(n)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={newspicker.newsContainer}>
        {(selectedButton === 0
          ? Events
          : selectedButton === 1
          ? Events
          : selectedButton === 2
          ? Community
          : News
        ).map(
          (item, n) =>
            n < 5 && (
              <Link
                className={newspicker.newsItem}
                to={{
                  pathname: "/news",
                }}
                state={{ newsCategory: selectedButton, newsID: n }}
              >
                <img
                  className={newspicker.newsItemImage}
                  src={require("../assets/images/news/" +
                    (selectedButton === 0
                      ? "news"
                      : selectedButton === 1
                      ? "events"
                      : selectedButton === 2
                      ? "community"
                      : "news") +
                    n +
                    ".webp")}
                  alt=""
                />
                <div style={{ width: "50%" }}>
                  <div className={newspicker.newsItemTitle}>{item.title}</div>
                  <div className={newspicker.newsItemText}>{item.text}</div>
                </div>
              </Link>
            )
        )}
        <div className={newspicker.newsItemAllButton}>Show all news →</div>
      </div>
    </div>
  );
};

export default Newspicker;
