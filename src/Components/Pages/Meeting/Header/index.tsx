import React from "react";
import { useNavigate } from "react-router";
import {
  HeaderContainer,
  HeaderWrapper,
  BackButton,
  Title,
  Info,
  SettingsButton,
} from "./Styled";

import { FiArrowLeft } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CalendarsPage");

  return (
    <HeaderContainer>
      <BackButton onClick={handleCheckout}>
        <FiArrowLeft />
      </BackButton>
      <HeaderWrapper>
        <div>
          <Title>
            UX/UI Design Conference Meeting
            <SettingsButton>
              <CiSettings />
            </SettingsButton>
          </Title>
          <Info>9 Lessons · 6h 30min</Info>
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
