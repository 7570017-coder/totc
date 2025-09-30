import { useState, useEffect } from "react";
import {
  NavBar,
  LogoSection,
  NavLinks,
  Button,
  ButtonGroup,
  HamburgerButton,
  Overlay,
  MobileMenuContainer,
} from "./Styled";
import Logo from "/Logo.png";
import { useNavigate } from "react-router";

const Header = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isMenuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${window.scrollY}px`;
      body.style.width = "100%";
    } else {
      const scrollY = body.style.top;
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
    };
  }, [isMenuOpen]);

  const navigate = () => {
    nav("/login");
    setIsMenuOpen(false);
  };

  const handleSignIn = () => {
    nav("/register");
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    nav(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavBar>
        <LogoSection>
          <img onClick={() => handleNavClick("/")} src={Logo} alt="TOTC" />
        </LogoSection>

        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <NavLinks isOpen={isMenuOpen}>
          <li onClick={() => handleNavClick("/")}>Home</li>
          <li onClick={() => handleNavClick("/Course")}>Courses</li>
          <li onClick={() => handleNavClick("/MemberShip")}>Careers</li>
          <li onClick={() => handleNavClick("/Blog")}>Blog</li>
          <li onClick={() => handleNavClick("/CalendarsPage")}>Calendars</li>
        </NavLinks>

        <ButtonGroup isOpen={isMenuOpen}>
          <Button onClick={navigate} className="login">
            Login
          </Button>
          <Button onClick={handleSignIn} className="sign-up">
            Sign up
          </Button>
        </ButtonGroup>
      </NavBar>

      {/* Overlay for mobile menu */}
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />

      {/* Mobile menu container with touch prevention */}
      <MobileMenuContainer isOpen={isMenuOpen} />
    </>
  );
};

export default Header;
