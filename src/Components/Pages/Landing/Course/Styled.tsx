import styled, { keyframes } from "styled-components";

const rotateIn = keyframes`
  from {
    transform: rotate(90deg) translateZ(0px);
    opacity: 0;
  }
  to {
    transform: rotate(-12deg) translateZ(0px);
    opacity: 1;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 80px 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 83%;
    height: 100%;
    background: #9dccff33;
    border-bottom-right-radius: 5rem;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    padding: 60px 80px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    &::before {
      width: 100%;
      border-bottom-right-radius: 3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const StickCard = styled.div<{ delay?: number }>`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  transform: rotate(-12deg) translateZ(0px);

  animation: ${rotateIn} 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay || 0}ms;
  opacity: 0;

  @media (max-width: 1500px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const StickOuter = styled.div`
  background: #ccfabc;
  border-radius: 12px;
  padding: 1rem 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.8rem 0.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.2rem;
  }
`;

export const StickInner = styled.div<{ bg: string }>`
  background: ${(props) => props.bg};
  border-radius: 8px;
  width: fit-content;
  min-width: 40px;
  height: 280px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 180px;
    min-width: 35px;
  }

  @media (max-width: 480px) {
    height: 150px;
    min-width: 30px;
    margin: 2px;
  }
`;

export const StickText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  writing-mode: vertical-lr;
  letter-spacing: 1px;
  white-space: nowrap;
  padding: 1rem 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    padding: 0.8rem 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.6rem 0.3rem;
    letter-spacing: 0.5px;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  margin-bottom: 20px;
  margin-top: 100px;
  align-self: flex-start;
  width: 100%;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 60px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-bottom: 100px;
  align-self: flex-start;
  width: 100%;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

export const CategoryRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  margin-bottom: 24px;
  padding: 32px 0 8px 0;
  justify-content: center;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
    gap: 8px;
    padding: 20px 0 4px 0;
  }

  @media (max-width: 768px) {
    gap: 6px;
    padding: 15px 0 2px 0;
  }
`;

export const LayerFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1023px) {
    justify-content: center;
    gap: 20px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const Card = styled.div`
  width: 640px;
  min-width: 320px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    min-width: unset;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 90%;
    height: auto;
    border-radius: 16px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 95%;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

export const Bar = styled.div`
  border-radius: 29.5px;
  opacity: 0.05;
  background: #000;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  margin: 0 auto;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const LayerContainer = styled.div`
  margin-bottom: 48px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const LayerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const LayerTitle = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, Arial, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SeeAllLink = styled.span`
  color: #00bcd4;
  font-family: Roboto, Arial, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0097a7;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    align-self: flex-end;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const LayerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  z-index: 1;
  position: relative;

  @media (max-width: 1023px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;
