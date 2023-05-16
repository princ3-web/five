import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";


  const { state } = useLocation()

  console.log(state.newsID);

  return (
    <>
      <div className={subpage.section}></div>
    </>
  );
};

export default News;
