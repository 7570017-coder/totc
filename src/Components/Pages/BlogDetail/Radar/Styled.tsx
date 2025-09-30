import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const TopImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  padding: 80px 180px 80px 180px;

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

export const Title = styled.h2`
  margin: 15px 0;
  color: #2f327d;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 180%;
  }

  @media (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const Paragraph = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.32px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0.4px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    letter-spacing: 0.48px;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 25px;
  }

  @media (min-width: 1200px) {
    gap: 35px;
  }
`;

export const Tag = styled.span`
  background: #49bbbd1a;
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 20px;
  border-radius: 36px;

  @media (min-width: 768px) {
    font-size: 15px;
    padding: 12px 24px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 13px 26px;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #696984;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1200px) {
    width: 77px;
    height: 77px;
  }
`;

export const AuthorInfo = styled.div`
  p {
    margin: 0;
    font-size: 12px;
    color: #777;
  }
  h4 {
    margin: 2px 0 0;
    font-size: 14px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    p {
      font-size: 13px;
    }
    h4 {
      font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    p {
      font-size: 14px;
    }
    h4 {
      font-size: 16px;
    }
  }
`;

export const FollowButton = styled.button`
  background: #fff;
  color: #49bbbd;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #49bbbd;
  cursor: pointer;
  transition: 0.3s ease;
  width: 100%;

  &:hover {
    background: #49bbbd;
    color: #fff;
  }

  @media (min-width: 768px) {
    width: auto;
    margin-left: auto;
    padding: 13px 60px;
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    padding: 13px 80px;
    font-size: 16px;
  }
`;
