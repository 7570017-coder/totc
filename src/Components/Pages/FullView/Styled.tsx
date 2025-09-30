import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
  font-family: "avenir next lt pro bold", sans-serif;

  @media (max-width: 1200px) {
    grid-template-columns: 350px 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const Sidebar = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 1;
    padding: 15px;
  }
`;

export const BackButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #49bbbd;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 50px 0 10px;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin: 30px 0 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px 0 8px;
  }
`;

export const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LessonItem = styled.div<{ active?: boolean; lessonColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active, lessonColor }) =>
    active ? "#49bbbd" : lessonColor};

  &:hover {
    background: #49bbbd;
  }

  svg {
    color: black;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`;

export const LessonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const LessonIcon = styled.div`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LessonText = styled.span`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DurationBadge = styled.span`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const MainContent = styled.div`
  background: #9dccff4d;
  overflow-y: auto;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.section`
  background: #49bbbd;
`;

export const TopBarContainer = styled.div`
  padding: 26px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Timer = styled.div`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 25px 40px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    gap: 20px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 90px;

  @media (max-width: 1200px) {
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const SectionBlock = styled.div``;

export const SectionHeading = styled.h2`
  color: #252641;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "avenir next lt pro bold", sans-serif;
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const SectionText = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 0;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 30px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 1.5;
  }
`;

export const ReviewCard = styled.div`
  background: #f8e0c7;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 12px;
    flex-direction: column;
    text-align: center;
  }
`;

export const ReviewAvatar = styled.img`
  width: 70px;
  height: auto;

  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const ReviewName = styled.h4`
  color: #2d3436;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "avenir next lt pro bold", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ReviewStars = styled.div`
  display: flex;
  gap: 4px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const ReviewText = styled.p`
  margin-top: 15px;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.4;
  }
`;
