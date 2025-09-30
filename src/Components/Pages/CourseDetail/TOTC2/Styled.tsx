import styled from "styled-components";

export const Section = styled.section<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 180px;
  gap: 80px;
  flex-wrap: wrap;
  background-image: url(${(p) => p.background});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    padding: 50px 100px;
    gap: 60px;
  }

  @media (max-width: 900px) {
    padding: 40px 50px;
    gap: 40px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 25px;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  color: #2f327d;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  word-break: break-word;
  margin-bottom: 20px;

  span {
    color: #49bbbd;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 140%;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  color: #696984;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.48px;
  word-break: break-word;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 160%;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const LearnMore = styled.a`
  font-size: 22px;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #696984;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MediaWrapper = styled.div`
  flex: 1;
  height: auto;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 3;

  img {
    width: 160px;
    height: 160px;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const IframeWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 2;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
