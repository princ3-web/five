import React from "react";
import subpage from "../css/subpage.module.css";

const News = () => {

  const subpageTitle = "News"

  return (
    <>
      <div className={subpage.section}>
        <div className={subpage.headerImageWrapper}>
      
          <div className={subpage.gradient}></div>
        </div>
        <div className={subpage.textContainer}>
          <div className={subpage.title}>{subpageTitle}</div>
       
        </div>
      </div>
    </>
  );
};

export default News;
