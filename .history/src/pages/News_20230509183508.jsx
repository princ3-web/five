import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";

  const location = useLocation()
  const { from } = location.state


  const { newsCategory, newsID } = location.state;

  console.log(newsID);

  return (
    <>
      <div className={subpage.section}></div>
    </>
  );
};

export default News;