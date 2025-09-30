import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 80px 140px;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 60px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const Title = styled.h2`
  color: #2f327d;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;

  span {
    color: #00cbb8;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 160%;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  max-width: 1101px;
  margin: 0 auto;
  margin-bottom: 75px;
  color: #696984;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.48px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 60px;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 50px;
    max-width: 100%;
    padding: 0 20px;
    line-height: 160%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 40px;
    padding: 0 15px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 100px;

  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  @media (max-width: 768px) {
    gap: 60px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    gap: 40px;
    max-width: 100%;
  }
`;

export const Card = styled.div<{ background: string }>`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 15px;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(23, 27, 65, 0.5);
  border-radius: 20px;

  @media (max-width: 480px) {
    border-radius: 15px;
  }
`;

export const CardHeading = styled.h3`
  position: relative;
  color: #fff;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const CardButton = styled.button<{ variant?: string }>`
  position: relative;
  z-index: 1;
  padding: 24px 38px;
  border-radius: 80px;
  color: #fff;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "light" &&
    `
    background: transparent;
    border: 1px solid #fff;

    &:hover {
      background: rgba(255,255,255,0.2);
    }
  `}

  ${(props) =>
    props.variant === "teal" &&
    `
    background: rgba(35, 189, 238, 0.90);
    color: #fff;
    border: 1px solid rgba(35, 189, 238, 0.90);

    &:hover {
      background: rgba(255,255,255,0.2);
      border: 1px solid #fff;
    }
  `}

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 20px 32px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 18px 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 16px 24px;
  }
`;
