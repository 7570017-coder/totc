import styled from "styled-components";

export const Section = styled.section`
  background: #9dccff33;
  padding: 70px 160px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;

export const SeeAll = styled.a`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 100px;
`;

export const Card = styled.div`
  background: #fff;
  padding: 60px 34px 60px 34px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18.83px 47.08px 0 rgba(47, 50, 125, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }

  .main-blog-img {
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
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 16px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  img {
    width: 34px;
    height: 34px;
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

export const Description = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.4px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  letter-spacing: 0.4px;
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
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
    color: #49bbbd;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 30px auto 0 auto;
`;

export const PageButton = styled.button`
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: #49bbbd;
  }
`;
