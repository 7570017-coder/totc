import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 180px;
  background: #ffffff;

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

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18.83px 47.08px 0 rgba(47, 50, 125, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease;
  margin-bottom: 0;

  &:hover {
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.4px;
  margin: 0 0 30px 0;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 150%;
    margin-bottom: 20px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 12px 25px;
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease;
  align-self: flex-start;

  &:hover {
    background: #1ba7a5;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
