import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnreadSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../Assets/bio-logo.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-address-section">
        <h2>BioBhumi Green Solutions</h2>

        <div>
          <FaLocationDot className="footer-icon" />
          <p>
            Meethodist colony,kundanbagh Begumpet,Hyderabad Telangana-500016
          </p>
        </div>

        <div>
          <BiSolidPhoneCall className="footer-icon" />
          <p>7989498962, 9392626203</p>
        </div>
        <div>
          <IoMailUnreadSharp className="footer-icon" />
          <p>
            <a href="mailto:biobhumigreen@gmail.com">
              {" "}
              biobhumigreen@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-links-section">
        <h2>Quick Links</h2>
        <div className="footer-ul-links-section">
          <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Faq s</li>
          </ul>
        </div>
      </div>

      <div className="follow-us-section">
        <h2>Follow US</h2>
        <div className="follow-us-section-mini-container">
          <div className="follow-icons-container">
            <IoLogoWhatsapp className="follow-icon" />
            <FaFacebook className="follow-icon" />
            <FaLinkedin className="follow-icon" />
            <FaInstagram className="follow-icon" />
            <FaPinterest className="follow-icon" />
            <FaXTwitter className="follow-icon" />
            <FaYoutube className="follow-icon" />
          </div>
          <hr />
          <div>
            <img src={logo} alt="logo" className="footer-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
