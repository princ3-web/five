import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";
import newspicker from "../css/newspicker.module.css";
import NewsFile from "../components/News";


const News = (props) => {
  const subpageTitle = "News";

  const location = useLocation();
  const data = location.state;
  console.log(NewsFile);

  return (
    <>
      <div className={subpage.section}>
        <div className={newspicker.newsItem}>
          <img
            className={newspicker.newsItemImage}
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
          <div>
            <div className={newspicker.newsItemTitle}>{NewsFile[data.newsID].title}</div>
            <div className={newspicker.newsItemText}>{NewsFile[data.newsID].title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
