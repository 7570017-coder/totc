import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 180px;

  @media (max-width: 1200px) {
    padding: 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 25px 15px;
  box-shadow: 0 4px 12px rgba(19, 40, 74, 0.06);
  transition: transform 0.2s ease;
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const IconWrap = styled.div<{ bg: string; iconcolor?: string }>`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: ${({ iconcolor }) => iconcolor || "#fff"};
  margin: 0 auto 16px;

  svg {
    color: ${({ iconcolor }) => iconcolor || "#fff"};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
  }
`;

export const CardTitle = styled.h3`
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Desc = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.4px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 150%;
  }
`;
