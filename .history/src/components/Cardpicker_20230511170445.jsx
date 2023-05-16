import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {
  const cards = [
    {
      title: "Basic",
      text: "This plan is designed for users who require basic cloud computing capabilities for their applications or projects. It utilizes powerful PCs in the cloud to provide reliable processing power and storage.",
    },
    {
      title: "Advanced",
      text: "This plan is designed for users with more demanding computing requirements. It offers advanced features and customization options for optimized performance and flexibility.",
    },
    {
      title: "Enterprise",
      text: "This plan is tailored for enterprises with complex computing needs and mission-critical applications. It provides a comprehensive suite of features and services to support large-scale operations.",
    },
  ];
  return (
    <div className={cardpickerStyle.background}>
      <div className={cardpickerStyle.cards}>
        {cards.map((item) => (
          <div className={cardpickerStyle.card}>
            <div className={cardpickerStyle.title}>{item.title}</div>
            <div className={cardpickerStyle.text}>{item.title}</div>
            <img className={cardpickerStyle.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpicker;
