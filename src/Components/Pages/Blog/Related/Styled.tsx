import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 180px 80px 180px;
  background: #9dccff33;

  @media (max-width: 1200px) {
    padding: 60px 100px 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px 40px 50px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px 30px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const SeeAll = styled.a`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 100px;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }

  @media (min-width: 768px) {
    padding: 40px 28px;
  }

  @media (min-width: 1200px) {
    padding: 60px 34px;
  }

  .main-blog-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const BlogTitle = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
  }

  @media (min-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const Description = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.4px;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.4px;
  margin-top: 15px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ReadMore = styled.a`
  color: #696984;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 14px;
    height: 14px;
    color: #49bbbd;
  }

  @media (min-width: 768px) {
    gap: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 40px auto 0 auto;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 12px;
    margin: 30px auto 0 auto;
  }
`;

export const PageButton = styled.button`
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3aa3a5;
  }

  @media (min-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
