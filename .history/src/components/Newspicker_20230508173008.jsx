import React from "react";

const Newspicker = () => {
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
