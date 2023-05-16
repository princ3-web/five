import React, { useState, useEffect } from "react";
import app from "../css/app.module.css";
import Imagescroller from "../components/Imagescroller";
import Newspicker from "../components/Newspicker";

const Main = () => {


  return (
    <>
      <div className={app.section}>
        <Imagescroller />
      </div>

      <div className={app.section}>
        <Newspicker />
      </div>
      <div className={app.section}>{/* <div className={subpage.gradient}></div> */}</div>
    </>
  );
};

export default Main;
