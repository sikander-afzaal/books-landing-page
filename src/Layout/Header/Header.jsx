import "./Header.css";
import { useState, useEffect, useRef } from "react";
//ICON LIBRARY -----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
//React router dom-----------------------------
import { Link } from "react-router-dom";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const addScrollClass = () => {
      if (window.scrollY > 100) {
        header.current.classList.add("header-move");
      } else {
        header.current.classList.remove("header-move");
      }
    };
    window.addEventListener("scroll", addScrollClass);
    return () => window.removeEventListener("scroll", addScrollClass);
  }, []);

  return (
    <div className="container header-wrapp">
      {openHeader && (
        <div
          onClick={() => {
            setOpenHeader(false);
          }}
          className="overlay"
        ></div>
      )}
      <header ref={header}>
        <img src="/assets/logo.png" alt="" />
        <nav className={`${openHeader ? "open-header" : ""}`}>
          <Link to={"/"} className="nav-links">
            CLASS班級
          </Link>
          <Link to={"/tutor"} className="nav-links">
            CLASS家教
          </Link>
          <Link to={"/bookstore"} className="nav-links">
            CLASS書店
          </Link>
          <Link to={"/"} className="nav-links">
            關於我們
          </Link>
          <Link to={"/"} className="nav-links">
            服務與願景
          </Link>
          <Link to={"/"} className="nav-links">
            聯絡我們
          </Link>
        </nav>
        <FontAwesomeIcon
          icon={openHeader ? faXmark : faBars}
          onClick={() => {
            setOpenHeader((prev) => !prev);
          }}
        />
      </header>
    </div>
  );
};

export default Header;
