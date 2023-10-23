import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Images/ordafastalogo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      {menuOpen && (
        <div className="modal-top">
          <div className="modal">
            <img src={logo} />
            <IoMdClose onClick={toggleMenu}/>
          </div>
          <div className="modal-pages">
          <p>About</p>
          <p>FAQ</p>
          <button>Get started</button>
          </div>
        </div>
      )}
      <div className="nav">
        <img src={logo} />
        <div className="nav-sub">
          <p>About</p>
          <p>FAQ</p>
        </div>
        <button>Get Started</button>
        <RxHamburgerMenu onClick={toggleMenu}/>
      </div>
    </div>
  );
}
