import React from 'react';
import cardpickerStyle from "../css/cardpicker.module.css";

const Cardpicker = () => {

    const cards = [
        {title: "aaa"},
        {title: "bbb"},
        {title: "ccc"},
    ]
  return (
    <div className={cardpickerStyle.background}>

        {cards.map }

    </div>
  )
}

export default Cardpicker;