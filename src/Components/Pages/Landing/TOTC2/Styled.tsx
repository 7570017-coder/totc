import styled from "styled-components";

export const Section = styled.section<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 140px;
  gap: 80px;
  flex-wrap: wrap;
  background-image: url(${(p) => p.background});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    padding: 60px 80px;
    gap: 60px;
    background-image: none;
  }

  @media (max-width: 900px) {
    padding: 40px 50px;
    gap: 40px;
    flex-direction: column;
    text-align: center;
    background-image: none;
    align-items: center; /* Add this */
    justify-content: center; /* Add this */
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
    gap: 30px;
    background-image: none;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 25px;
    background-image: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Default to left align */

  @media (max-width: 900px) {
    max-width: 100%;
    align-items: center; /* Center everything on mobile */
    text-align: center;
  }

  @media (max-width: 900px) {
    /* Ensure all child elements are centered */
    > * {
      text-align: center;
    }
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
  width: 100%; /* Ensure full width for proper centering */

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
  width: 100%; /* Ensure full width for proper centering */

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

  @media (max-width: 900px) {
    align-self: center;
  }

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
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-width: 300px;

  @media (max-width: 900px) {
    width: 100%;
    min-width: auto;
    max-width: 600px;
    margin: 0 auto; /* Center the image container */
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
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
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
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #2f8c8e;
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
