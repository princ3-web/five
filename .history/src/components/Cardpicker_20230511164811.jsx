import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {
  const cards = [{ title: "Basic" }, { title: "A" }, { title: "ccc" }];
  return (
    <div className={cardpickerStyle.background}>
      <div className={cardpickerStyle.cards}>
        {cards.map((item) => (
          <div className={cardpickerStyle.card}>
            <div className={cardpickerStyle.title}></div>
            <div className={cardpickerStyle.text}></div>
            <img className={cardpickerStyle.image}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpicker;
