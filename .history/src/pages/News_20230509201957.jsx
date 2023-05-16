import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";
import newspicker from "../css/newspicker.module.css";
import NewsFile from "../components/News";

const News = (props) => {
  const subpageTitle = "News";

  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className={subpage.section}>
        <div
          className={newspicker.newsItem}
          style={{
            width: "100%",
            paddingBlock: "15rem",
            paddingInline: "7rem",
            boxSizing: "border-box",
          }}
        >
          <img
            className={newspicker.newsItemImage}
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
              className={newspicker.newsItemTitle}
              style={{ fontSize: 30, marginBottom: "2rem" }}
            >
              {NewsFile[data.newsID].title}
            </div>
            <div className={newspicker.newsItemText}>{NewsFile[data.newsID].text}</div>
          </div>
        </div>
        <div className="">backbutton</div>
      </div>
    </>
  );
};

export default News;
