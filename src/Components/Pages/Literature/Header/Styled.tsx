import styled from "styled-components";

export const Container = styled.div`
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

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 0 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 20px;
  }
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const Info = styled.div`
  flex: 1;
  border-radius: 20px;
  padding: 50px 45px 35px 50px;
  background: rgba(255, 255, 255, 0.8);

  @media (max-width: 1024px) {
    padding: 30px 35px 25px 40px;
  }

  @media (max-width: 768px) {
    padding: 25px 30px 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 15px 15px;
  }
`;

export const Name = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.6px;
  margin: 0;
  margin-bottom: 7px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    gap: 10px;
  }
`;

export const Title = styled.p`
  color: rgba(45, 52, 54, 0.7);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Description = styled.p`
  color: #2d3436;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-family: "avenir next lt pro bold", sans-serif;
  color: rgba(45, 52, 54, 0.8);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 24px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const EnrollButton = styled.button`
  background: #49bbbd;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #3aa1a3;
  }

  @media (max-width: 1024px) {
    padding: 10px 24px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    font-size: 13px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #49bbbd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #49bbbd;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: #49bbbd;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;
