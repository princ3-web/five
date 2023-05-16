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

      <div className={app.section}>
        <Newspicker />
      </div>
      <div className={app.section}>
        <Objectscroller />
      </div>
      <div className={app.section}>
        <Cardpicker />
      </div>
    </>
  );
};

export default Main;
