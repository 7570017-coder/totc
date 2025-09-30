import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 74px;
  background-color: #3caaa8;
  padding: 0px 140px;
  overflow: hidden;
  border-bottom-left-radius: 80% 17%;
  border-bottom-right-radius: 80% 17%;

  .hero-img {
    width: auto;
    height: auto;
    flex-shrink: 0;
    z-index: 1;
    max-width: 50%;
  }

  @media (max-width: 1200px) {
    padding: 0 80px;
    gap: 50px;
    border-bottom-left-radius: 70% 15%;
    border-bottom-right-radius: 70% 15%;
  }

  @media (max-width: 900px) {
    padding: 40px 40px 0 40px;
    gap: 40px;
    flex-direction: column;
    text-align: center;
    border-bottom-left-radius: 60% 12%;
    border-bottom-right-radius: 60% 12%;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 30px;
    border-bottom-left-radius: 50% 10%;
    border-bottom-right-radius: 50% 10%;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 25px;
    border-bottom-left-radius: 40% 8%;
    border-bottom-right-radius: 40% 8%;
  }

  @media (max-width: 767px) {
    .hero-img {
      display: none;
    }
  }
`;

export const HeroImage = styled.img`
  position: relative;
  z-index: 2;
  height: auto;
  max-width: 100%;
`;

export const HeroContent = styled.div`
  color: white;
  max-width: 500px;
  z-index: 2;
  flex: 1;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  width: 681px;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  .highlight {
    color: orange;
  }

  @media (max-width: 1200px) {
    font-size: 48px;
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 900px) {
    font-size: 42px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroText = styled.p`
  width: 532px;
  color: #fff;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 20px 0;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 500px;
    font-size: 22px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 150%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 15px 0;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
    align-items: stretch;
  }

  .primary {
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 22px 38px;
    border-radius: 80px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    white-space: nowrap;

    &:hover {
      background-color: #49bbbd;
      border: 1px solid #fff;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
      padding: 18px 32px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 16px 28px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 14px 24px;
      white-space: normal;
    }
  }

  .secondary {
    display: flex;
    background: none;
    border: none;
    align-items: center;
    gap: 10px;
    color: #252641;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    svg {
      font-size: 28px;
      flex-shrink: 0;
    }

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
      padding: 18px 32px;

      svg {
        font-size: 24px;
      }
    }

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 16px 28px;

      svg {
        font-size: 22px;
      }
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 14px 24px;
      white-space: normal;
      justify-content: center;

      svg {
        font-size: 20px;
      }
    }
  }
`;
