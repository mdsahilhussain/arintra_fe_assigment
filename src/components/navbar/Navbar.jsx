import React, { useContext } from "react";
import navbarIcon from "../../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ToogleContext } from "../../context/moviesContext";
import { MdOutlineFilterAlt, MdFilterAlt } from "react-icons/md";
function Navbar() {
  const { toggle, setToggle, navtoggle, setNavtoggle } =
    useContext(ToogleContext);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const navToggleHandler = () => {
    setNavtoggle(true);
  };

  return (
    <nav>
      <Link to="/" onClick={(e) => navToggleHandler()}>
        <h2 style={{ cursor: "pointer" }}>Home</h2>
      </Link>
      <img src={navbarIcon} alt="logo" />
      <h1
        style={{ cursor: "pointer" }}
        type="submit"
        onClick={(e) => toggleHandler()}
      >
        {navtoggle ? (
          !toggle ? (
            <MdOutlineFilterAlt />
          ) : (
            <MdFilterAlt />
          )
        ) : undefined}
      </h1>
    </nav>
  );
}

export default Navbar;
