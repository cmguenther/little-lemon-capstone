import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};

export default Header;
