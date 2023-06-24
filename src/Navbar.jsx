import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-logo">
            <h1 className="logo-text">softer</h1>
          </div>

          <ul className={isOpen ? "nav-list-items" : !isOpen}>
            <li>WHO WE ARE?</li>
            <li>OUR TEAM</li>
            <li>OUR VALUE</li>
            <li>WHAT WE DO?</li>
            <li>CONTACT US</li>

            <button className="join-button">JOIN US</button>
          </ul>
          <div className="burger-menu">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
