import styled from "styled-components";

export const MarketingWrapper = styled.section`
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

export const MarketingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
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
`;
