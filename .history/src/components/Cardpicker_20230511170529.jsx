import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {
  const cards = [
    {
      title: "Basic",
      text: "Virtual Machine Instances: Access to virtual machines with predefined hardware configurations, such as CPU, RAM, and storage.",
    },
    {
      title: "Advanced",
      text: "High-Performance Virtual Machines: Access to powerful virtual machines with advanced hardware configurations, including multiple CPUs, high RAM capacity, and fast storage options.",
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
            <div className={cardpickerStyle.text}>{item.text}</div>
            <img className={cardpickerStyle.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpicker;
