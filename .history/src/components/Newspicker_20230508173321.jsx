import React, { useState } from "react";
import newspicker from "../css/newspicker.module.css";


const Newspicker = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];
  const [selectedButton, toggleSelectedButton] = useState(0);

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
              subpage.newsButton,
              n === selectedButton && subpage.newsButtonSelected,
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
