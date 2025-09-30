import styled from "styled-components";

export const SuccessSection = styled.section`
  text-align: center;
  padding: 80px 180px;
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

export const SuccessTitle = styled.h2`
  color: var(--Dark-text-color, #010514);
  text-align: center;
  font-family: "Buenos Aires Trial", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

export const SuccessText = styled.p`
  max-width: 750px;
  margin: 0 auto 60px;
  color: var(--Half-dark-text-color, rgba(1, 5, 20, 0.8));
  text-align: center;
  font-family: "Buenos Aires Trial", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 40px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StatNumber = styled.div`
  font-family: "Buenos Aires Trial", sans-serif;
  font-size: 84px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  background: var(
    --Accent-gradient,
    linear-gradient(90deg, #136cb5 0%, #49bbbd 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 72px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
    margin-bottom: 12px;
  }
`;

export const StatLabel = styled.div`
  color: var(--Half-dark-text-color, rgba(1, 5, 20, 0.8));
  font-family: "Buenos Aires Trial", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
