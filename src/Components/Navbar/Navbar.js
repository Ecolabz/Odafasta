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
            <img src={logo} alt="" />
            <IoMdClose onClick={toggleMenu} />
          </div>
          <div className="modal-pages">
            <a href="#about">
              <p>About</p>
            </a>
            <a href="#faq">
              <p>FAQ</p>
            </a>
            <a href='http://odafasta.tookan.in' target=''><button>Get Started</button></a>
          </div>
        </div>
      )}
      <div className="nav">
        <img src={logo} alt="" />
        <div className="nav-sub">
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#faq">
            <p>FAQ</p>
          </a>
        </div>
        <a href='http://odafasta.tookan.in' target=''><button>Get Started</button></a>
        <RxHamburgerMenu onClick={toggleMenu} />
      </div>
    </div>
  );
}
