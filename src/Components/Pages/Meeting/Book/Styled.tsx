import styled from "styled-components";

export const BookWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #252641;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
    text-align: left;
    margin-bottom: 25px;
  }

  @media (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
  padding: 15px;
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
    max-width: 200px;
    margin: 0 auto;
    display: block;
  }

  p {
    color: #252641;
    text-align: center;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0 5px;
  }

  span {
    color: #49bbbd;
    font-weight: 600;
    font-size: 14px;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
  }

  @media (min-width: 768px) {
    p {
      font-size: 15px;
    }
    span {
      font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    p {
      font-size: 16px;
    }
    span {
      font-size: 16px;
    }
  }
`;
