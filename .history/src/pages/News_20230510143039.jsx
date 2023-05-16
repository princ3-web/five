import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";
import newspage from "../css/newspage.module.css";
import NewsFile from "../components/Newsfolder";
import { Link } from "react-router-dom";

const News = (props) => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className={subpage.section}>
        <div className={newspage.newsItem}>
          <img
            className={newspage.newsItemImage}
            style={{ marginRight: "2rem" }}
            src={require("../assets/images/news/" +
              (data.newsCategory === 0
                ? "news"
                : data.newsCategory === 1
                ? "events"
                : data.newsCategory === 2
                ? "community"
                : "news") +
              data.newsID +
              ".webp")}
            alt=""
          />
          <div style={{ width: "50%" }}>
            <div className={newspage.newsItemTitle}>{NewsFile[data.newsID].title}</div>
            <div className={newspage.newsItemText}>{NewsFile[data.newsID].text}</div>
          </div>
          <Link to={"/"} className={newspage.backButton}>
            ← return
          </Link>
        </div>
          <div className={newspage.newsItemSmall}>
            <img
              className={newspage.newsItemImage}
              style={{ marginRight: "2rem" }}
              src={require("../assets/images/news/" +
                (data.newsCategory === 0
                  ? "news"
                  : data.newsCategory === 1
                  ? "events"
                  : data.newsCategory === 2
                  ? "community"
                  : "news") +
                (data.newsID + 1) +
                ".webp")}
              alt=""
            />
            <div style={{ width: "50%" }}>
              <div className={newspage.newsItemTitleSmall}>
                {NewsFile[data.newsID + 1].title}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default News;
