import React from "react";
import { useAuth } from "../../contexts/AuthContext";
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
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const UserName = styled.span`
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  color: #333;
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const NavButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: #49bbbd;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #3aa8aa;
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

const LogoutButton = styled(NavButton)`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: #e74c3c;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 200px;
  }
`;

const HeaderLoggedIn: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo onClick={handleLogoClick}>TOTC</Logo>

      <NavSection>
        <NavButton onClick={() => handleNavigate("/")}>Home</NavButton>
        <NavButton onClick={() => handleNavigate("/course")}>Courses</NavButton>
        <NavButton onClick={() => handleNavigate("/blog")}>Blog</NavButton>
        <NavButton onClick={() => handleNavigate("/calendar")}>
          Calendar
        </NavButton>
      </NavSection>

      <UserInfo>
        <UserName>Welcome, {user?.username || user?.name}!</UserName>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserInfo>
    </HeaderWrapper>
  );
};

export default HeaderLoggedIn;
