import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;

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
  gap: 12px;

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

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const TopBarContainer = styled.div`
  background: #49bbbd;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 20px 30px;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
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
  padding: 30px;

  @media (max-width: 1200px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ShareSection = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ShareTitle = styled.h2`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ShareText = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const CardTitle = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CardSubtitle = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardBody = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  padding: 30px;
  border-radius: 8px;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 0;
  margin-top: 15px;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #49bbbd;
  border: 1px solid #49bbbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #49bbbd;
    border: 1px solid #49bbbd;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    font-size: 12px;
  }
`;
