import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";


  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <>
      <div className={subpage.section}>

      <div
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


      </div>
    </>
  );
};

export default News;
