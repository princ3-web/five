import React, { useState } from "react";
import newspicker from "../css/newspicker.module.css";

const Newspicker = () => {
  const newsButtons = ["News", "Events", "Community"];
  const [selectedButton, toggleSelectedButton] = useState(0);

  const News = [
    {
      image: require("../assets/images/background2.webp"),
      title: "New lineup of cutting-edge technologies for advanced computing",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "GPUs for next-generation gaming experiences",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Innovative technology startup reveals new AI chip",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "New GPU architecture promises to transform high-performance computing",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Tech firm announces breakthrough in quantum computing with new chip design",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "Leading-edge processor delivers game-changing performance for enterprise applications",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "New processor technology poised to disrupt the industry",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "Leading-edge processor delivers game-changing performance for enterprise applications",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "Next-gen GPUs and processors set to transform computing and accelerate AI development.",
      text: "",
    },
  ];

  const Events = [
    {
      image: require("../assets/images/background2.webp"),
      title: "Announcing our upcoming webinar series on the future of computing",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Save the date for our annual technology summit",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "Join us for a virtual tour of our state-of-the-art manufacturing facilities",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Our CEO to deliver keynote address at industry conference",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "New product demo and hands-on workshop for developers",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Networking event for tech professionals and enthusiasts",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Join us for a live Q&A with our team of engineers and developers",
      text: "",
    },
  ];

  const Community = [
    {
      image: require("../assets/images/background2.webp"),
      title: "Meet the faces behind our technology and join the conversation",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Discover new partnerships and collaborations within our user community",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "Find answers to your tech questions from our knowledgeable community members",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title: "Join our global network of tech enthusiasts and innovators",
      text: "",
    },
    {
      image: require("../assets/images/background2.webp"),
      title:
        "The power of community: How our users are driving innovation with our technology",
      text: "",
    },
  ];

  return (
    <div className={newspicker.newspicker}>
      <div
        className={newspicker.newsTitle}
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        News
      </div>
      <div className={newspicker.newsButtons}>
        {newsButtons.map((item, n) => (
          <div
            className={[
              newspicker.newsButton,
              n === selectedButton && newspicker.newsButtonSelected,
            ].join(" ")}
            onClick={() => toggleSelectedButton(n)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={newspicker.newsContainer}>
        {(selectedButton === 0 ? News : selectedButton === 1 ? Events : selectedButton === 2 ? Community : Al).map(
          (item, n) =>
            n < 5 && (
              <div className={newspicker.newsItem}>
                <img
                  className={newspicker.newsItemImage}
                  src={require("../assets/images/news/news" + n + ".webp")}
                  alt=""
                />
                <div style={{ width: "50%" }}>
                  <div className={newspicker.newsItemTitle}>{item.title}</div>
                  <div className={newspicker.newsItemText}>{item.text}</div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Newspicker;
