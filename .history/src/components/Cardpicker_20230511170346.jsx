import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {
  const cards = [
    { title: "Basic", text: "This plan is designed for users who require basic cloud computing capabilities for their applications or projects. It utilizes powerful PCs in the cloud to provide reliable processing power and storage." },
    { title: "Advanced" },
    { title: "Enterprise" },
  ];
  return (
    <div className={cardpickerStyle.background}>
      <div className={cardpickerStyle.cards}>
        {cards.map((item) => (
          <div className={cardpickerStyle.card}>
            <div className={cardpickerStyle.title}>{item.title}</div>
            <div className={cardpickerStyle.text}></div>
            <img className={cardpickerStyle.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpicker;
