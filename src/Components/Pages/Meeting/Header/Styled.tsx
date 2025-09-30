import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #49bbbd;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
    margin-right: 20px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderWrapper = styled.div`
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  flex: 1;

  @media (min-width: 768px) {
    padding: 25px 30px;
  }

  @media (min-width: 1200px) {
    padding: 35px 50px 35px 35px;
  }
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
    font-size: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Info = styled.p`
  margin: 10px 0 0 0;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: 0.32px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    letter-spacing: 0.36px;
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #25264180;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: auto;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }
`;
