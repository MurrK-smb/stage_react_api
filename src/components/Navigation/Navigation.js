import "./Navigation.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../images/NewsExplorer-White.svg";
import logout from "../../images/logout-white.svg";
import blackLogo from "../../images/NewsExplorer-Black.svg";
import blackLogout from "../../images/logout-black.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Navigation = ({
  onSigninPopupClick,
  loggedIn,
  blackNavigator,
  handleLogout,
  toggleMenu,
  toggleNav,
}) => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();

  const colorRuleDefiner =
    (blackNavigator && !toggleMenu) || (screenWidth > 700 && blackNavigator);

  const buttonColor = colorRuleDefiner
    ? { color: "black", borderColor: "black" }
    : { color: "white", borderColor: "white" };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <section
      className={`navigation ${
        toggleMenu && screenWidth < 700 ? "navigation_type_mobile" : ""
      }`}
    >
      <nav
        className={`navigation__bar ${
          navbarColor ? "navigation__bar_type_scroll" : ""
        }`}
        style={
          toggleMenu && screenWidth < 700 ? { backgroundColor: "#1A1B22" } : {}
        }
      >
        <Link to={"/"} className="logo">
          <img
            src={colorRuleDefiner ? blackLogo : logo}
            alt="NewsExplorer logo"
          ></img>
        </Link>
        {(toggleMenu || screenWidth > 700) && (
          <ul className="navigation__links-wrapper">
            <Link
              to={"/"}
              className={`navigation__link               ${
                location.pathname === "/" ? "navigation__link_type_focus" : ""
              }`}
              style={buttonColor}
            >
              Home
            </Link>
            <Link
              to={"/saved-news"}
              className={`navigation__link navigation__link_type_saved ${
                !loggedIn ? "navigation__disabled" : ""
              }
              ${
                location.pathname === "/saved-news"
                  ? "navigation__link_type_focus"
                  : ""
              }
              `}
              style={buttonColor}
            >
              Saved articles
            </Link>
            <button
              aria-label="signin"
              type="button"
              className={`navigation__button navigation__button_type_signin ${
                loggedIn ? "navigation__disabled" : ""
              }`}
              onClick={onSigninPopupClick}
              style={buttonColor}
            >
              Sign in
            </button>
            <button
              aria-label="signout"
              type="button"
              className={`navigation__button navigation__button_type_logout ${
                !loggedIn ? "navigation__disabled" : ""
              }`}
              onClick={handleLogout}
              style={buttonColor}
            >
              {currentUser.name}
              <img
                src={blackNavigator && !toggleMenu ? blackLogout : logout}
                alt="Logout logo"
                className="navigation__logout-icon"
              ></img>
            </button>
          </ul>
        )}
        <button
          onClick={toggleNav}
          className={`burgher-button
          ${blackNavigator && !toggleMenu && "burgher-button_type_black"}
          ${
            toggleMenu
              ? "burgher-button_type_open"
              : "burgher-button_type_white"
          }`}
        ></button>
      </nav>
    </section>
  );
};

export default Navigation;
