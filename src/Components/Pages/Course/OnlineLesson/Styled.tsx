import styled from "styled-components";

export const CtaOuter = styled.div`
  padding: 0 180px;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const CtaWrapper = styled.section`
  background-color: #252641;
  padding: 60px 100px;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 50px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`;

export const CtaTitle = styled.h2`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const CtaText = styled.p`
  color: #fff;
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.48px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 16px;
    letter-spacing: 0.3px;
  }
`;

export const CtaButton = styled.button`
  background: #23bdee;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #1aa6ce;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 14px;
    width: 100%;
  }
`;
