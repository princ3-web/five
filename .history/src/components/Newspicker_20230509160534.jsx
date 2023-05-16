import React, { useState } from "react";
import newspicker from "../css/newspicker.module.css";

const Newspicker = () => {
  const newsButtons = ["All", "Events", "News", "Community"];
  const [selectedButton, toggleSelectedButton] = useState(0);

  const news = [
    {
      image: "",
      title:
        "Unity Electronics releases new lineup of cutting-edge technologies for advanced computing",
      text: "",
    },
    { image: "", title: "GPUs for next-generation gaming experiences", text: "" },
    {
      image: "",
      title:
        "Innovative technology startup reveals new AI chip, poised to revolutionize machine learning",
      text: "",
    },
    {
      image: "",
      title: "New GPU architecture promises to transform high-performance computing",
      text: "",
    },
    {
      image: "",
      title: "Tech firm announces breakthrough in quantum computing with new chip design",
      text: "",
    },
    {
      image: "",
      title:
        "Leading-edge processor delivers game-changing performance for enterprise applications",
      text: "",
    },
    {
      image: "",
      title:
        "Innovative startup introduces revolutionary new processor technology, poised to disrupt the industry",
      text: "",
    },
    {
      image: "",
      title:
        "Leading-edge processor delivers game-changing performance for enterprise applications",
      text: "",
    },
    {
      image: "",
      title:
        "Next-gen GPUs and processors set to transform computing and accelerate AI development.",
      text: "",
    },
  ];

  const events = [
    {
      image: "",
      title: "Announcing our upcoming webinar series on the future of computing",
      text: "",
    },
    { image: "", title: "Save the date for our annual technology summit", text: "" },
    {
      image: "",
      title:
        "Join us for a virtual tour of our state-of-the-art manufacturing facilities",
      text: "",
    },
    {
      image: "",
      title: "Our CEO to deliver keynote address at industry conference",
      text: "",
    },
    {
      image: "",
      title: "New product demo and hands-on workshop for developers",
      text: "",
    },
    {
      image: "",
      title: "Networking event for tech professionals and enthusiasts",
      text: "",
    },
    {
      image: "",
      title: "Join us for a live Q&A with our team of engineers and developers",
      text: "",
    },
  ];

  const community = [
    {
      image: "",
      title: "Meet the faces behind our technology and join the conversation",
      text: "",
    },
    {
      image: "",
      title: "Discover new partnerships and collaborations within our user community",
      text: "",
    },
    {
      image: "",
      title:
        "Find answers to your tech questions from our knowledgeable community members",
      text: "",
    },
    {
      image: "",
      title: "Join our global network of tech enthusiasts and innovators",
      text: "",
    },
    {
      image: "",
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
        {
          <div className={newspicker.newsItem}>
            <i className={newspicker.newsItemImage}></div>
            <div className={newspicker.newsItemTitle}></div>
            <div className={newspicker.newsItemText}></div>
          </div>
        }
      </div>
    </div>
  );
};

export default Newspicker;
