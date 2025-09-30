import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const TopImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  padding: 40px 180px;
  margin-top: 40px;
  margin-bottom: 80px;
  align-items: flex-start;

  @media (max-width: 1200px) {
    padding: 40px 100px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px 50px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    gap: 15px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9dccff4d;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const RightColumnWrapper = styled.div`
  position: sticky;
  top: 0;
  margin-top: -310px;

  @media (max-width: 1024px) {
    position: static;
    margin-top: 0;
  }
`;

export const RightColumn = styled.div`
  max-width: 320px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: auto;

  img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const Price = styled.h3`
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.9px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const OldPrice = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  text-decoration-line: line-through;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Discount = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Timer = styled.p`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BuyButton = styled.button`
  background: #49bbbd;
  border: 1px solid #49bbbd;
  padding: 15px;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px 0;

  &:hover {
    background: #fff;
    border: 1px solid #49bbbd;
    color: #49bbbd;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

export const Feature = styled.li`
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 8px 0;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 50%;
  color: #444;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #00bfa6;
    color: white;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    padding-bottom: 20px;
  }
`;

export const Tab = styled.button<{ active?: boolean }>`
  padding: 12px 30px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "#49bbbd" : "#0000001A")};
  color: ${({ active }) => (active ? "white" : "#00000066")};
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ active }) => (active ? "#49bbbd" : "#00000033")};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 12px;
    flex: 1;
    min-width: 0;
  }
`;

export const Reviews = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
`;

export const RatingBox = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: auto;
    padding: 15px;
  }
`;

export const RatingScore = styled.h3`
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Stars = styled.div`
  margin: 5px 0;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const RatingText = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ProgressBars = styled.div`
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 8px 0;

  span {
    color: rgba(0, 0, 0, 0.5);
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
    text-align: right;
    min-width: 70px;
  }

  @media (max-width: 480px) {
    gap: 15px;

    span {
      font-size: 14px;
      min-width: 60px;
    }
  }
`;

export const ProgressBar = styled.div<{ width: string }>`
  height: 8px;
  background: #49bbbd;
  border-radius: 5px;
  flex: 1;
  max-width: ${({ width }) => width};
  transition: width 0.3s ease;
`;

export const ReviewCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  margin-top: 15px;
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`;

export const ReviewContent = styled.div`
  flex: 1;

  h4 {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    margin: 0;
  }

  p {
    color: #696984;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.4px;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    h4 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      line-height: 140%;
    }
  }
`;

export const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin-top: -15px;
  gap: 5px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const SectionTitle = styled.h4`
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;
  margin: 20px 0 10px;
  border-top: 1px solid #696984;
  padding-top: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
    padding-top: 15px;
  }
`;

export const TrainingText = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.28px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 140%;
  }
`;

export const ShareWrapper = styled.div`
  margin-top: 15px;
`;
