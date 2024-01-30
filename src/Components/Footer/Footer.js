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
    <footer className="footer">
      <img src={footerImg} alt="" />
      <div className="footer-content">
        <div data-aos="fade-right">
          <img src={logo} alt="" className="logo" />
        </div>
        <div data-aos="fade-up" className="quick-link">
          <h6 data-aos="fade-up">Quick Link</h6>
          <img data-aos="fade-up" src={waves} alt="" />
          <div className="icon" data-aos="fade-up">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <a href='#top'>Home</a>
          </div>
          <div className="icon" data-aos="fade-up">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <a href='#about'>About</a>
          </div>
          <div className="icon" data-aos="fade-up">
            <MdOutlineKeyboardArrowRight color="#FF6347" />
            <a href='#faq'>FAQ</a>
          </div>
        </div>

        <div className="contact" data-aos="fade-left">
          <h6 data-aos="fade-up">Contact</h6>
          <img data-aos="fade-up" src={waves} alt="" />
          {/* <div className="icon"> */}
          <a data-aos="fade-up" href="mailto:odafastaa@gmail.com" className="icon">
              {" "}
              <IoIosMail color="#FF6347" />
              <p>hello@odafata.com</p>
            </a>
          {/* </div> */}

          <div className="soc" data-aos="fade-left">
            <h6>Follow us on Social Media</h6>
            <img src={waves} alt="" />
            <div className="socials" data-aos="fade-up">
              <a href="/" data-aos="fade-up">
                <img src={facebook} alt="" />
              </a>
              <a href="/" data-aos="fade-up">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-content-mobile">
          <div data-aos="fade-right" className="quick-link-mobile">
            <h6>Quick Link</h6>
            <img src={waves} alt="" />
            <div data-aos="fade-up" className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <a href='#top'>Home</a>
            </div>
            <div data-aos="fade-up" className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <a href='#about'>About</a>
            </div>
            <div data-aos="fade-up" className="icon">
              <MdOutlineKeyboardArrowRight color="#FF6347" />
              <a href='#faq'>FAQ</a>
            </div>
          </div>
          <div data-aos="fade-up" className="contact-mobile">
            <h6 data-aos="fade-up">Contact</h6>
            <img data-aos="fade-up" src={waves} alt="" />
            {/* <div className="icon"> */}
            <a data-aos="fade-up" href="mailto:odafastaa@gmail.com" className="icon">
              {" "}
              <IoIosMail color="#FF6347" />
              <p data-aos="fade-up">hello@odafata.com</p>
            </a>
            {/* </div> */}
          </div>
        </div>
        <div data-aos="fade-up" className="socials-mobile">
          <h6 data-aos="fade-up">Follow us on Social Media</h6>
          <img src={waves} alt="" />
          <div data-aos="fade-up" className="socials-icons">
            <a href="/" data-aos="fade-up">
              <img src={facebook} alt="" />
            </a>
            <a href="/" data-aos="fade-up">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="footer-logo-mobile">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="footer-img">
        <img src={footerWaves} alt="" />
        <img src={leaf} alt="" />
        <a href="/">Terms &#38; Conditions</a>
      </div>
    </footer>
  );
}
