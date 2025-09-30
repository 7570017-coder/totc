import styled from "styled-components";

export const Container = styled.section`
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

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
    margin-bottom: 70px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 25px;
  padding: 40px 30px;
  gap: 40px;
  text-align: center;

  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
    padding: 60px 40px 30px 60px;
    gap: 50px;
    border-radius: 40px;
  }

  @media (min-width: 1200px) {
    padding: 80px 60px 35px 100px;
    gap: 80px;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  order: 2;

  @media (min-width: 900px) {
    order: 1;
    justify-content: flex-start;
  }
`;

export const MainImage = styled.img`
  width: 250px;
  height: auto;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1200px) {
    width: 400px;
  }
`;

export const Content = styled.div`
  flex: 2;
  order: 1;

  @media (min-width: 900px) {
    order: 2;
  }
`;

export const Name = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const Email = styled.p`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 8px 0 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.24px;
  margin: 0;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 180%;
    letter-spacing: 0.3px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    letter-spacing: 0.36px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 900px) {
    justify-content: flex-start;
    gap: 12px;
    margin-top: 15px;
  }
`;

export const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #49bbbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #49bbbd;
  font-size: 16px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #49bbbd;
  }

  @media (min-width: 768px) {
    width: 33px;
    height: 33px;
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`;

export const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  order: 3;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 900px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;
