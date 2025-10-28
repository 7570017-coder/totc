import styled from "styled-components";

export const Section = styled.section`
  background: #eaf6fb;
  padding: 80px 180px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const Heading = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

export const Viewport = styled.div`
  overflow: visible;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 -10px;

  @media (max-width: 768px) {
    margin: 0 -5px;
  }
`;

export const Track = styled.div<{ duration?: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 400px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 25px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px 15px 30px 15px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 15px 12px 25px 12px;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 50%;
  border: 3px solid #49bbbd;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
  }
`;

export const Name = styled.h3`
  color: #2d3436;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 15px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.4px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 140%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 130%;
  }
`;

export const ArrowButton = styled.button.attrs<{ side: "left" | "right" }>(
  (props) => ({
    as: "button",
  })
)<{ side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.side === "left" ? "left: -60px;" : "right: -60px;")}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #49bbbd;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(33, 192, 190, 0.18);
  transition: transform 0.15s, background 0.15s;
  z-index: 4;

  &:hover {
    background: #21c0be;
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.97);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    ${(p) => (p.side === "left" ? "left: -50px;" : "right: -50px;")}

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const AppSection = styled.div`
  background: #1e2139;
  margin-top: 80px;
  padding: 50px 40px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 40px 30px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 30px 20px;
    gap: 15px;
  }
`;

export const AppText = styled.h3`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const AppButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
    width: 100%;
    justify-content: stretch;
  }
`;

export const AppButton = styled.a<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 25px;
  border-radius: 10px;
  background: ${(p) => p.color};
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease;
  min-width: 160px;

  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 15px;
    min-width: 140px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 14px;
    min-width: 0;
    flex: 1;

    svg {
      font-size: 18px;
    }
  }
`;
