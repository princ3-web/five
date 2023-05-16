import React, { useState, useEffect } from "react";
import app from "../css/app.module.css";
import Imagescroller from "../components/Imagescroller";
import Newspicker from "../components/Newspicker";
import Objectscroller from "../components/Objectscroller";

const Main = () => {
  return (
    <>
      <div className={app.section}>
        <Imagescroller />
      </div>

      <div className={app.section} style={{}}>
        <Newspicker />
      </div>
      <div className={app.section}>
        <Objectscroller />
      </div>
    </>
  );
};

export default Main;
