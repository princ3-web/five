import React from "react";
import subpage from "../css/subpage.module.css";

const Animals = () => {
  const subpageTitle = "Animals";

  const items = [
    "Animal shows: Watch the stars of the zoo perform amazing feats of agility and intelligence. From acrobatic lemurs to soaring birds of prey, our animal shows are sure to thrill and amaze visitors of all ages.",

    "Guided tours: Join one of our knowledgeable guides on a tour of the zoo and discover fascinating facts about our animal residents. Learn about their natural habitats, behaviors, and the conservation efforts underway to protect these incredible creatures.",

    "Keeper talks: Meet our dedicated zookeepers and hear firsthand about the daily care and feeding of our animals. These talks provide a behind-the-scenes look at the hard work and dedication that goes into maintaining a world-class zoo.",

    "Wildlife photography workshops: Whether you're a beginner or a seasoned pro, our photography workshops offer the opportunity to capture stunning images of our animal residents in a naturalistic setting. Learn tips and tricks from professional photographers and take your skills to the next level.",

    "Conservation events: Join us in supporting wildlife conservation efforts around the world. From fundraising events to hands-on volunteer opportunities, our conservation events offer a chance to make a real difference in the lives of endangered species.",

    "Animal encounters: Get up close and personal with some of our animal residents with our animal encounter experiences. From feeding giraffes to petting a kangaroo, these experiences provide a once-in-a-lifetime opportunity to interact with some of the world's most fascinating creatures.",

    "Nighttime events: Experience the zoo in a whole new light with our nighttime events. From nocturnal animal exhibits to after-hours tours, these events provide a unique opportunity to see the zoo in a completely different way.",

    "Family-friendly events: Bring the whole family for a day of fun and education at the zoo. From face painting and carnival games to educational exhibits and animal encounters, our family-friendly events offer something for visitors of all ages.",

    "Seasonal events: Celebrate the holidays and changing seasons at the zoo with our seasonal events. From Halloween-themed exhibits to holiday light shows, these events offer a chance to enjoy the zoo in a festive atmosphere.",

    "Animal enrichment events: Learn about the ways in which we keep our animal residents healthy and happy with our animal enrichment events. From puzzle feeders to sensory experiences, these events showcase the innovative ways in which we keep our animals engaged and stimulated.",
  ];

  return (
    <>
      <div className={subpage.section}>
        <div className={subpage.headerImageWrapper}>
          <img
            className={subpage.headerImage}
            src={require("../assets/images/headerImage" + Math.floor(Math.random() * 10 + 1) + ".jpg")}
            alt=""
          />
          <div className={subpage.gradient}></div>

        </div>
        <div className={subpage.textContainer}>
          <div className={subpage.title}>{subpageTitle}</div>
          {items.map((item) => (
            <div className={subpage.text}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animals;
