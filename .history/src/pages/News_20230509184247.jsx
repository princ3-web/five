import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation, useParams } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";


  const location = useLocation();
  const { fromHome } = location.state;
  let data = fromHome.data;

  return (
    <>
      <div className={subpage.section}></div>
    </>
  );
};

export default News;
