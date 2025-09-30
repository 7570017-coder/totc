import styled from "styled-components";

export const Section = styled.section<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 180px;
  gap: 60px;
  flex-wrap: wrap;
  background-image: url(${(p) => p.background});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 10px;
    gap: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  color: #2f327d;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  word-break: break-word;

  span {
    color: #49bbbd;
  }

  @media (max-width: 800px) {
    font-size: 26px;
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

  @media (max-width: 800px) {
    font-size: 16px;
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

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const MediaWrapper = styled.div`
  flex: 1;
  height: auto;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 3;

  img {
    width: auto;
    height: auto;
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
  }
`;
