import styled from "styled-components";

export const CtaOuter = styled.div`
  padding: 100px 180px 0 180px;
  display: flex;
  justify-content: center;
`;

export const CtaWrapper = styled.section`
  background-color: #252641;
  padding: 70px 212px;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
`;

export const CtaTitle = styled.h2`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;
`;

export const CtaText = styled.p`
  color: #fff;
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.48px;
  margin-bottom: 24px;
`;

export const CtaButton = styled.button`
  background: #23bdee;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1aa6ce;
  }
`;
