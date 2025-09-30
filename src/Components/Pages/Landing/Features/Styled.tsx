import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 60px 80px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  color: #2f327d;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
  margin: 0 auto;

  span {
    color: #00cbb8;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 140%;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  color: #696984;
  text-align: center;
  font-family: "Avenir Next LT Pro Regular", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  margin: 0 auto;
  margin-top: -20px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin-top: -15px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: -10px;
    line-height: 160%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FeatureRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
  gap: 120px;
  margin-bottom: 80px;

  @media (max-width: 1200px) {
    gap: 80px;
    margin-bottom: 60px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    gap: 30px;
    margin-bottom: 40px;
  }
`;

export const FeatureImage = styled.img<{ reverse?: boolean }>`
  width: 45%;
  max-width: 900px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 500px;
    transform: none;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const FeatureContent = styled.div`
  flex: 1;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const FeatureTitle = styled.h3`
  color: #2f327d;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;

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
  }
`;

export const FeatureText = styled.p`
  color: #696984;
  font-family: "Avenir Next LT Pro Regular", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.44px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 160%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    letter-spacing: 0.32px;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: #696984;
  font-family: "Avenir Next LT Pro Regular", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.44px;
  gap: 15px;
  margin-top: -30px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -10px;
    flex-shrink: 0;

    @media (max-width: 1024px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
      margin-top: 0;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SeeMore = styled.button`
  padding: 18px 38px;
  border-radius: 80px;
  border: 1px solid #49bbbd;
  background: none;
  color: #49bbbd;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #49bbbd;
    color: white;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 16px 32px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 14px 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
