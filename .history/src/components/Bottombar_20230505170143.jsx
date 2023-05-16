import React from "react";
import bottombar from "../css/bottombar.module.css";
import logobw from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";
import youtube from "../assets/images/youtube.png";
import navbar from "../css/navbar.module.css";
import { Link } from "react-router-dom";

const Bottombar = () => {
  const socials = [instagram, facebook, tiktok, youtube];
  const links = ["CONTACT", "ZOO", "TRUST", "SITEMAP", "CAREERS", "MEDIA"];

  return (
    <>
      <div className={bottombar.bottomBar}>
        <div className={bottombar.socials}>
          {socials.map((item, n) => (
            <img className={bottombar.socialButton} src={item} alt="" key={n} />
          ))}
        </div>
        <div className={bottombar.links}>
          {links.map((item, n) => (
            <div className={bottombar.link} key={n}>
              {item}
            </div>
          ))}
        </div>
        <Link className={navbar.link} to={"/"}>
        <img className={bottombar.logo} src={logobw} alt="" onClick={() => window.scrollTo(0, 0)} />
        </Link>
        <div className={bottombar.signature}>web design by princ3</div>
      </div>
    </>
  );
};

export default Bottombar;
