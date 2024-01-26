import React from "react";
import footerImg from "../../Images/footer.png";
import logo from "../../Images/ordafastalogo.svg";
import "../Footer/Footer.scss";
import facebook from "../../Images/face book.svg";
import twitter from "../../Images/twitter.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import waves from "../../Images/waves.svg";
import footerWaves from "../../Images/foooterwaves.svg";
import leaf from "../../Images/Mask group.svg";
// import {IoIosArrowForward} from "react-icons/io"

export default function Footer() {
  return (
    <div className="footer">
      <img src={footerImg} alt="" />
      <div className="footer-content">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="quick-link">
          <h6>Quick Link</h6>
          <img src={waves} alt="" />
          <div className="icon">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <p>Home</p>
          </div>
          <div className="icon">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <p>About</p>
          </div>
          <div className="icon">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <p>FAQ</p>
          </div>
        </div>

        <div className="contact">
          <h6>Contact</h6>
          <img src={waves} alt="" />
          {/* <div className="icon"> */}
          <a href="mailto:odafastaa@gmail.com" className="icon">
              {" "}
              <IoIosMail color="#FF6347" />
              <p>hello@odafata.com</p>
            </a>
          {/* </div> */}

          <div className="soc">
            <h6>Follow us on Social Media</h6>
            <img src={waves} alt="" />
            <div className="socials">
              <a>
                <img src={facebook} alt="" />
              </a>
              <a>
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-content-mobile">
          <div className="quick-link-mobile">
            <h6>Quick Link</h6>
            <img src={waves} alt="" />

            <div className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <p>Home</p>
            </div>

            <div className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <p>About</p>
            </div>
            <div className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <p>FAQ</p>
            </div>
          </div>

          <div className="contact-mobile">
            <h6>Contact</h6>
            <img src={waves} alt="" />
            {/* <div className="icon"> */}
            <a href="mailto:odafastaa@gmail.com" className="icon">
              {" "}
              <IoIosMail color="#FF6347" />
              <p>hello@odafata.com</p>
            </a>
            {/* </div> */}
          </div>
        </div>

        <div className="socials-mobile">
          <h6>Follow us on Social Media</h6>
          <img src={waves} alt="" />
          <div className="socials-icons">
            <a>
              <img src={facebook} alt="" />
            </a>
            <a>
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-logo-mobile">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="footer-img">
        <img src={footerWaves} alt="" />
        <img src={leaf} alt="" />
        <a href="/">Terms &#38; Conditions</a>
    </footer>
  );
}
