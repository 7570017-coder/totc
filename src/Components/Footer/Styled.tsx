import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #252641;
  color: #ffffff;
  padding: 60px 20px 30px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

export const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;

  img {
    width: auto;
    height: auto;
    cursor: pointer;
  }

  span {
    color: #fff;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.88px;
    text-align: left;
    padding: 10px 0 10px 20px;
    border-left: 1px solid #626381;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    span {
      border-left: none;
      border-top: 1px solid #626381;
      margin-left: 0;
      padding: 20px 0 0 0;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export const Newsletter = styled.div`
  margin-bottom: 40px;

  h4 {
    color: #b2b3cf;
    text-align: center;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.04px;
    margin-top: 60px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: 30px;
      letter-spacing: 0.8px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      margin-top: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 12px;
  max-width: 420px;
  margin: 0 auto;

  input {
    flex: 1;
    padding: 15px 30px;
    border-radius: 80px;
    border: 1px solid #83839a;
    background: transparent;
    color: #ffffff;
    font-size: 18px;

    &::placeholder {
      color: #83839a;
    }

    @media (max-width: 768px) {
      padding: 12px 20px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      padding: 10px 15px;
      font-size: 14px;
    }
  }

  button {
    padding: 15px 35px;
    border-radius: 80px;
    border: none;
    background: #49bbbd;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease-in;

    &:hover {
      background: #31a8b9;
    }

    @media (max-width: 768px) {
      padding: 12px 25px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      padding: 10px 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    max-width: 300px;
  }
`;

export const BottomLinks = styled.div`
  margin-top: 30px;
  font-size: 13px;
  color: #a1a1b6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  a {
    color: #b2b3cf;
    text-align: center;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.88px;
    text-decoration: none;
    padding: 0 12px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 0 8px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 0 6px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Copy = styled.p`
  color: #b2b3cf;
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.88px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const PrivacyPolicy = styled.span`
  border-left: 1px solid #626381;
  border-right: 1px solid #626381;
  padding: 0 12px;
  color: #b2b3cf;
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.88px;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0 6px;
    border-left: none;
    border-right: none;
    border-top: 1px solid #626381;
    border-bottom: 1px solid #626381;
    padding: 8px 0;
  }
`;
