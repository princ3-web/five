import React, { useState } from "react";
import navbar from "../css/navbar.module.css";
import logo from "../assets/icons/logo_sub.png";
import hamburger from "../assets/icons/hamburger.png";
import cross from "../assets/icons/cross.png";
import { Link } from "react-router-dom";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import tiktok from "../assets/icons/tiktok.png";
import youtube from "../assets/icons/youtube.png";

const Navbar = () => {
  const navbarButtons = [
    {
      name: "Home",
      menu: false,
      items: [],
      link: "/",
    },
    {
      name: "News",
      menu: true,
      items: [
        "Plan Your Day",
        "What's On",
        "Membership",
        "Vet Hospital",
        "Education",
        "Zoo Map",
      ],
      link: "/News",
    },
    {
      name: "Tech",
      menu: true,
      items: [
        "Read for Adventure",
        "Educational Field Trips",
        "Self-Guided Field Trips",
        "Nature Explorers Preschool",
        "Schools Out Day Camps",
        "Spring Break Camp",
        "Summer Camps",
        "After Hours",
        "Conservation Club",
      ],
      link: "/Education",
    },
    {
      name: "Community",
      menu: true,
      items: [
        "What We Do",
        "What You Can Do",
        "Work at the Zoo",
        "Volunteer",
        "Sponsorship",
        "Conservation",
      ],
      link: "/Membership",
    },
    {
      name: "Join us",
      menu: false,
      items: [],
      link: "/Animals",
    },
    {
      name: "News",
      menu: false,
      items: [],
      link: "/News",
    },
  ];

  const socials = [instagram, facebook, tiktok, youtube];

  const [mobileMenu, toggleMobileMenu] = useState(false);

  return (
    <>
      <div className={navbar.navbar}>
        <Link className={navbar.link} to={"/"} >
          <img className={navbar.logo} src={logo} alt="" />
        </Link>
        <div className={navbar.navbarContent}>
          <div className={navbar.navbarTopIcons}>
            {socials.map((item, n) => (
              <img className={navbar.navbarTopIcon} src={item} alt="" key={n} />
            ))}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map((item, n) => (
              <div
                style={{
                  display: "block",
                  overflow: "visible",
                }}
                key={n}
              >
                <div className={navbar.navbarButton}>
                  <Link
                    to={item.link}
                    state={{ newsCategory: 0, newsID: 0 }}
                    style={{
                      textDecoration: "none",
                      color: "unset",
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
                
                {item.items.length > 0 && (
                  <>
                    <div className={navbar.navbarButtonDropdown}>
                      {item.items.map((i, n) => (
                        <Link
                          className={navbar.navbarButtonDropdownItem}
                          key={n}
                          to={item.link}
                        >
                          {i}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <img
          className={navbar.mobileButton}
          src={mobileMenu === true ? cross : hamburger}
          onClick={() =>
            mobileMenu === true ? toggleMobileMenu(false) : toggleMobileMenu(true)
          }
          alt=""
        />
        <div
          className={[navbar.mobileMenu, mobileMenu ? navbar.mobileMenuShow : ""].join(
            " "
          )}
        >
          {navbarButtons.map((item) => (
            <Link to={item.link} className={navbar.mobileMenuItem}>
              <div onClick={() => toggleMobileMenu(false)}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
