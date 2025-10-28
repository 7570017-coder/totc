import styled from "styled-components";

export const LessonWrapper = styled.section`
  padding: 80px 180px;
  margin: 0 auto;

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

export const LessonTitle = styled.h2`
  color: #2d3436;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 30px;
    line-height: 130%;
  }
`;

export const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const LessonItem = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
`;

export const LessonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--Black, #2d3436);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding: 15px 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 15px 10px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    padding: 12px 0;

    &:hover {
      padding: 12px 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 24px;
    padding: 10px 0;

    &:hover {
      padding: 10px 6px;
    }
  }
`;

export const LessonIcon = styled.span`
  width: 16px;
  height: 16px;
  background: #55efc4;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

export const LessonArrow = styled.span<{ isopen: boolean }>`
  margin-left: auto;
  color: #6b7280;
  font-size: 14px;
  min-width: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  transform: ${({ isopen }) => (isopen ? "rotate(180deg)" : "rotate(0deg)")};

  @media (max-width: 480px) {
    font-size: 12px;
    min-width: 16px;
  }
`;

export const LessonDesc = styled.div<{ isopen: boolean }>`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.28px;
  padding: 0 10px;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease;

  max-height: ${({ isopen }) => (isopen ? "1000px" : "0")};
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  margin-top: ${({ isopen }) => (isopen ? "12px" : "0")};

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 150%;
    margin-top: ${({ isopen }) => (isopen ? "10px" : "0")};
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 140%;
    padding: 0 5px;
    margin-top: ${({ isopen }) => (isopen ? "8px" : "0")};
  }
`;
