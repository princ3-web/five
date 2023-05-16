import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";
import newspicker from "../css/newspicker.module.css";
import NewsFile from "./News";


const News = (props) => {
  const subpageTitle = "News";

  const location = useLocation();
  const data = location.state;
  console.log(data);

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
          <div style={{ width: "50%" }}>
            <div className={newspicker.newsItemTitle}>{NewsFile[].title}</div>
            <div className={newspicker.newsItemText}>{item.text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
