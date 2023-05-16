import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";
import newspage from "../css/newspage.module.css";
import NewsFile from "../components/Newsfolder";

const News = (props) => {

  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className={subpage.section}>
        <div
          className={newspage.newsItem}
          style={{
        
          }}
        >
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
            <div
              className={newspage.newsItemTitle}
              style={{ fontSize: 30, marginBottom: "2rem" }}
            >
              {NewsFile[data.newsID].title}
            </div>
            <div className={newspage.newsItemText}>{NewsFile[data.newsID].text}</div>
          </div>
        </div>
        <div className="">backbutton</div>
        <div className="">other news</div>
        
      </div>
    </>
  );
};

export default News;
