import React from "react";
import cardpickerStyle from "../css/cardpicker.module.css";
import processorIcon from "../assets/icons/processor.png";

const Cardpicker = () => {
  const cards = [
    {
      title: "Lite",
      price: "199",
      text: "Virtual Machine Instances: Access to virtual machines with predefined hardware configurations, such as CPU, RAM, and storage.",
    },
    {
      title: "Expanded",
      text: "High-Performance Virtual Machines: Access to powerful virtual machines with advanced hardware configurations.",
    },
    {
      title: "Enterprise",
      text: "Dedicated Infrastructure: Exclusive access to dedicated physical servers or server clusters, offering maximum performance and security.",
    },
  ];
  return (
    <div className={cardpickerStyle.background}>
      <div className={cardpickerStyle.cards}>
        {cards.map((item) => (
          <div className={cardpickerStyle.card}>
            <div className={cardpickerStyle.title}>
              <div className={cardpickerStyle.titleText}>{item.title}</div>
              <img className={cardpickerStyle.titleIcon} src={processorIcon} alt="" />
            </div>
            <div className={cardpickerStyle.price}>{item.price}</div>
            <div className={cardpickerStyle.text}>{item.text}</div>
            <img className={cardpickerStyle.image} />
            <div className={cardpickerStyle.button}>buy now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardpicker;
