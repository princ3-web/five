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
      text: "Dedicated Infrastructure: Exclusive access to dedicated physical servers or server clusters, offering maximum performance and security.
",
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
