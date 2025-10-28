import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #49bbbd;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #49bbbd;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  cursor: pointer;
`;

const NavSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AuthButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 2px solid #49bbbd;
  background: transparent;
  color: #49bbbd;
  font-weight: 600;
  cursor: pointer;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #49bbbd;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(73, 187, 189, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const LoginButton = styled(AuthButton)`
  background: #49bbbd;
  color: white;
  border: 2px solid #49bbbd;

  &:hover {
    background: #3aa8aa;
    border-color: #3aa8aa;
  }
`;

const HeaderLoggedOut: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <Logo onClick={handleLogoClick}>TOTC</Logo>

      <NavSection>
        <AuthButton onClick={() => handleNavigate("/register")}>
          Sign Up
        </AuthButton>
        <LoginButton onClick={() => handleNavigate("/login")}>
          Login
        </LoginButton>
      </NavSection>
    </HeaderWrapper>
  );
};

export default HeaderLoggedOut;
