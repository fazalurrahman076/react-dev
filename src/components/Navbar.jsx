import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#1B8EC2",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    position: "sticky",
    top: 0,
    zIndex: 20,
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    maxWidth: 1500,
  },
  navLogo: {
    color: "#FFFFFF",
    alignItems: "center",
    marginLeft: 20,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    flexGrow: 1,
  },
  navMenu: {
    display: "flex",
    listStyle: "none",
    textAlign: "center",
    marginRight: "2rem",
  },
  navLinks: {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    height: "100%",
    borderBottom: "3px solid transparent",
  },
  faCode: {
    marginLeft: "1rem",
  },
  navItem: {
    lineHeight: 40,
    marginRight: "1rem",
  },
  navItemAfter: {
    content: "",
    display: "block",
    height: 3,
    width: 0,
    background: "transparent",
    transition: "width 0.7s ease, background-color 0.5s ease",
  },
  navIcon: {
    display: "none",
  },
}));

function NavBar() {
  const [click, setClick] = useState(false);
  const classes = useStyles();

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navContainer}>
          <NavLink exact to="/" className={classes.navLogo}>
            Buffer
            <i className={`${classes.faCode} fas fa-code`}></i>
          </NavLink>

          <ul className={click ? `${classes.navMenu} active` : classes.navMenu}>
            <li className={classes.navItem}>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={classes.navLinks}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className={classes.navLinks}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className={classes.navLinks}
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink
                exact
                to="/review"
                activeClassName="active"
                className={classes.navLinks}
                onClick={handleClick}
              >
                Review
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className={classes.navLinks}
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className={classes.navIcon} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
