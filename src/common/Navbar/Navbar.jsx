import React, { useState } from "react";
import "./Navbar.css";
// import { GrLocation } from "react-icons/gr";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const HandleScroll = () => {
    window.scrollTo(0, 1300);
  };
  return (
    <>
      {/* <div className="nav-up">
        <div className="top_nav_text_wrapp justify-content-between">
          <div className="nav-up-location">
            <MdLocationOn className="nav-up-icon" />

            <p className="nav-up-text">
              101 Deep Complex Kotechanagar Main Road, Off. Aminmarg Rajkot
              India
            </p>
          </div>
          <div className="nav-up-location">
            <a href="#">
              <p className="nav-up-text">CARRER</p>
            </a>
            <a href="https://www.facebook.com/login/" target="_blank">
              {" "}
              <GrFacebookOption className="nav-up-icon" />
            </a>
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <AiOutlineTwitter className="nav-up-icon" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              <RiInstagramFill className="nav-up-icon" />
            </a>
          </div>
        </div>
      </div> */}
      <div className="nav-down">
        <div className="top_nav_text_wrapp padding-nav bg-nav">
          <div className="main-nav-logo">
            <Link to="/">
              <img src={images.kinglogoup} className="nav-logo" alt="logo" />
            </Link>
          </div>
          <ul className="main-nav-list">
            <li>
              <Link className="main-nav-link" to="/hotelpage">
                OUR HOTELS
              </Link>
            </li>
            {/* <li>
              <a className="main-nav-link" href="#">
                EXPERIENCES
              </a>
            </li> */}
            <li>
              <Link className="main-nav-link" to="/wedding">
                WEDDINGS & EVENTS
              </Link>
            </li>
            <li>

              <Link className="main-nav-link" to="/">
                SPECIAL OFFERS
              </Link>
            </li>
            <li>

              <Link className="main-nav-link" to="/">
                MEDIA
              </Link>
            </li>
            {/* <li>
              <a className="main-nav-link nav-cta" href="#">
                ABOUT
              </a>
            </li> */}
            <li>
              <Link className="main-nav-link nav-cta" to="/partnerwithus">
                PARTNER WITH US
              </Link>
            </li>
            {/* <li>
              <a className="main-nav-link nav-cta" href="#">
                BLOG
              </a>
            </li> */}
            <li>
              <Link className="main-nav-link" to="/contactus">
                CONTACT
              </Link>
            </li>
          </ul>
          {/* <button className="side_icon"> */}
          {toggleMenu === false ? (
            <GiHamburgerMenu
              className="side_icon"
              onClick={() => setToggleMenu(true)}
            />
          ) : (
            <RiCloseFill
              className="side_icon"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {/* </button> */}
        </div>
      </div>
      {toggleMenu && (
        <div className="sidebar_main_wrapp">
          <div className="sidebar_base_wrapp">
            <Link
              className="sidebar_link"
              to="/hotelpage"
              onClick={() => setToggleMenu(false)}
            >
              OUR HOTELS
            </Link>
            <Link
              className="sidebar_link"
              to="/wedding"
              onClick={() => setToggleMenu(false)}
            >
              WEDDINGS & EVENTS
            </Link>
            <Link
              className="sidebar_link"
              to=""
              onClick={() => setToggleMenu(false)}
            >
              SPECIAL OFFERS
            </Link>
            <Link
              className="sidebar_link"
              to=""
              onClick={() => setToggleMenu(false)}
            >
              MEDIA
            </Link>
            <Link
              className="sidebar_link"
              to="/partnerwithus"
              onClick={() => setToggleMenu(false)}
            >
              PARTNER WITH US
            </Link>
            <Link
              className="sidebar_link"
              to="/contactus"
              onClick={() => setToggleMenu(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
