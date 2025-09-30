import styled from "styled-components";

export const Wrapper = styled.section`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const SeeAll = styled.a`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    display: block;
  }

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 15px 20px;
  border-radius: 6px;

  @media (max-width: 1024px) {
    font-size: 35px;
    padding: 12px 16px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 10px 14px;
    top: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    padding: 8px 12px;
    top: 10px;
    left: 10px;
  }
`;

export const CardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 0;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardDesc = styled.p`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.4px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 140%;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
