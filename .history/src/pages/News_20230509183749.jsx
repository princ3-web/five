import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";

  const location = useParams()
  const { state } = location.state;

  console.log(newsID);

  return (
    <>
      <div className={subpage.section}></div>
    </>
  );
};

export default News;
