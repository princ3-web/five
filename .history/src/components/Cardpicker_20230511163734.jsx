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

        {cards.map(item => 
            <div className={cardpickerStyle.background}></div>
            )}

    </div>
  )
}

export default Cardpicker;