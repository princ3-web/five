import React from "react";
import subpage from "../css/subpage.module.css";
import { useLocation } from "react-router-dom";

const News = (props) => {
  const subpageTitle = "News";

  const {location} = useLocation()

  console.log(location.state)

  return (
    <>
      <div className={subpage.section}>
      
      
      </div>
    </>
  );
};

export default News;
