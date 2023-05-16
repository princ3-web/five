import React, { useState } from "react";
import newspicker from "../css/newspicker.module.css";

const Newspicker = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];
  const [selectedButton, toggleSelectedButton] = useState(0);

  const news = [
    {image: "", title: "Unity Electronics releases new lineup of cutting-edge technologies for advanced computing", text: ""},
    {image: "", title: "GPUs for next-generation gaming experiences", text: ""},
    {image: "", title: "", text: ""},
    {image: "", title: "", text: ""},
    {image: "", title: "", text: ""},
    {image: "", title: "", text: ""},
  ]

  return (
    <div className={newspicker.news}>
      <div
        className={newspicker.newsTitle}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        News
      </div>
      <div className={newspicker.newsButtons}>
        {newsButtons.map((item, n) => (
          <div
            className={[
              newspicker.newsButton,
              n === selectedButton && newspicker.newsButtonSelected,
            ].join(" ")}
            onClick={() => toggleSelectedButton(n)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newspicker;
