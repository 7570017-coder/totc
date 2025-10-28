import styled from "styled-components";

export const Section = styled.section`
  background: #9dccff33;
  border-radius: 12px;
  padding: 70px 180px;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }

  @media (max-width: 1200px) {
    padding: 50px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 20px;

  h2 {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.6px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      letter-spacing: 0.4px;
    }
  }

  a {
    color: #49bbbd;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(19, 40, 74, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const CardImg = styled.img`
  height: auto;
  object-fit: cover;

  &.main-course-img {
    padding: 20px 20px 0 20px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

export const Title = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
  }
`;

export const ProgressRow = styled.div`
  margin-top: auto;
`;

export const ProgressOuter = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 6px;
  background: #e5e7eb;
  overflow: hidden;
`;

export const ProgressInner = styled.div<{ w: string }>`
  height: 100%;
  background: #49bbbd;
  width: ${({ w }) => w};
  transition: width 0.3s ease;
`;

export const LessonText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  font-family: "avenir next lt pro bold", sans-serif;
  text-align: right;
  margin-top: 8px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 30px auto 0 auto;

  @media (max-width: 480px) {
    justify-content: center;
    margin: 20px auto 0 auto;
  }
`;

export const PageButton = styled.button`
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  border: none;
  border-radius: 6px;
  padding: 12px 15px;
  cursor: pointer;
  padding-top: 15px;
  font-size: 16px;
  transition: background 0.2s ease;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3aa3a5;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 35px;
  }
`;
