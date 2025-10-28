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

export const MarketingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const MarketingCard = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MarketingImg = styled.img`
  object-fit: cover;

  &.main-marketing-img {
    border-radius: 20px 20px 0 0;
    margin-bottom: 0;
    padding: 20px 20px 0 20px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const MarketingContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 15px;
`;

export const MarketingMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: 0.28px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #696984;

  svg {
    font-size: 18px;
    color: #d9d9d9;
  }

  @media (max-width: 480px) {
    font-size: 11px;

    svg {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Desc = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.4px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

export const MarketingFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const OldPrice = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.36px;
  text-decoration-line: line-through;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const NewPrice = styled.span`
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 40px auto 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 30px auto 0 auto;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin: 20px auto 0 auto;
  }
`;

export const PageButton = styled.button`
  background: #49bbbd;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease;
  min-width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3aa3a5;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
    min-width: 40px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 35px;
  }
`;
