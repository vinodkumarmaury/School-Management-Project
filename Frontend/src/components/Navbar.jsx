import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
} from "../styles/styles";
import bg1 from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/choose-user");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar>
        <NavLink style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
          {" "}
          <Logo src={bg1} alt="Logo" />
        </NavLink>
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
    </>
  );
};

export default Nav;
