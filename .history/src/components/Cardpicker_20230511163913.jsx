import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {
  const cards = [{ title: "aaa" }, { title: "bbb" }, { title: "ccc" }];
  return (
    <div className={cardpickerStyle.background}>
        <div className={cardpickerStyle.card}></div>
      {cards.map((item) => (
        <div className={cardpickerStyle.card}>{item.title}</div>
      ))}
    </div>
  );
};

export default Cardpicker;
