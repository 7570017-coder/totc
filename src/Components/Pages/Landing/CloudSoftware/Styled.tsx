import styled from "styled-components";

export const FeaturesSection = styled.section`
  text-align: center;
  padding: 80px 140px;
  background: #ffffff;

  @media (max-width: 1200px) {
    padding: 60px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const FeaturesTitle = styled.h2`
  color: #2f327d;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
  margin: 0;
  margin-bottom: 20px;

  span {
    color: #00cbb8;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 140%;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const FeaturesText = styled.p`
  max-width: 837px;
  color: #696984;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  margin: 0 auto;
  margin-bottom: 105px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 80px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 60px;
    max-width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 40px;
    line-height: 160%;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 60px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`;

export const FeatureCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 60px 24px 30px;
  box-shadow: 0 10px 60px 0 rgba(38, 45, 118, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 80px 0 rgba(38, 45, 118, 0.15);
  }

  @media (max-width: 768px) {
    padding: 50px 20px 25px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px 20px;
  }
`;

export const FeatureIcon = styled.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;

    /* Different icon sizes for different screens */
    @media (max-width: 1200px) {
      width: 90px;
    }

    @media (max-width: 1024px) {
      width: 85px;
    }

    @media (max-width: 768px) {
      width: 80px;
    }

    @media (max-width: 480px) {
      width: 70px;
    }
  }

  /* Different icon positioning for different screens */
  @media (max-width: 1200px) {
    top: -40px;
  }

  @media (max-width: 1024px) {
    top: -38px;
  }

  @media (max-width: 768px) {
    top: -35px;
  }

  @media (max-width: 480px) {
    top: -30px;
  }
`;

export const FeatureHeading = styled.h3`
  color: #2f327d;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0 15px;
  transition: color 0.3s ease;

  ${FeatureCard}:hover & {
    color: #00cbb8;
  }

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 15px 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FeatureDescription = styled.p`
  color: #696984;
  text-align: center;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  transition: color 0.3s ease;

  ${FeatureCard}:hover & {
    color: #2f327d;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 160%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
