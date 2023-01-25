import React, { useContext } from "react";
import navbarIcon from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
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
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
      }}
    >
      <Link to="/" onClick={(e) => navToggleHandler()}>
        <h2 style={{ cursor: "pointer" }}>Home</h2>
      </Link>
      <img src={navbarIcon} alt="" style={{ width: "auto", height: "7rem" }} />
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
