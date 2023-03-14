import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon Logo" />
      <div className="doormat-nav">
        <h4>Doormat Navigation</h4>
        <Nav />
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <p>
          123 Fake St <br></br> Chicago, Illinois 12345
        </p>
        <p>(555) 555-5555</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div className="social-media-links">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="http://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="http://www.facebook.com">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
