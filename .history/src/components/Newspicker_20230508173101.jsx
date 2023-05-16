import React, { usest } from "react";
import subpage from "../css/subpage.module.css";


const Newspicker = () => {
  const newsButtons = ["All", "Events", "News", "Studies"];
  const [selectedButton, toggleSelectedButton] = useState(0);

  return (
    <div className={subpage.news}>
      <div
        className={subpage.newsTitle}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        News
      </div>
      <div className={subpage.newsButtons}>
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
