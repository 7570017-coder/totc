import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 180px 80px 180px;

  @media (max-width: 1200px) {
    padding: 60px 100px 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px 30px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    margin-bottom: 80px;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 26px;
    text-align: left;
    margin-bottom: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const SeeAll = styled.a`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  justify-items: center;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 80px 40px;
    max-width: none;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 120px 60px;
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  padding: 60px 20px 20px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  @media (min-width: 768px) {
    padding: 80px 25px 25px;
    max-width: none;
  }

  @media (min-width: 1200px) {
    padding: 80px 30px 30px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
    top: -70px;
  }

  @media (min-width: 1200px) {
    width: 160px;
    height: 160px;
    top: -80px;
  }
`;

export const Name = styled.h3`
  margin-top: 15px;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.28px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.32px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    letter-spacing: 0.36px;
  }
`;
