import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
  gap: 48px;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 16px;
    overflow: hidden;
  }

  @media (max-width: 480px) {
    gap: 24px;
    padding: 12px;
    overflow: hidden;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  max-width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  border-radius: 29px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 350px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    border-radius: 16px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);

  h1 {
    margin: 0;
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 37px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    margin: 0;
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 920px) {
    left: 20px;
    right: 20px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    left: 15px;
    bottom: 15px;

    h1 {
      font-size: 22px;
      margin-left: 20px;
    }

    p {
      font-size: 16px;
      margin-left: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    flex: none;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 420px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 12px;
  }
`;

export const WelcomeTitle = styled.div`
  text-align: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(73, 187, 189, 0.6);
  border-radius: 40px;
  padding: 6px;
  width: fit-content;
  margin: 0 auto 18px;
  border: 1px solid rgba(33, 192, 190, 0.1);

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;

export const TabButton = styled.button<{ active?: boolean }>`
  position: relative;
  border: none;
  background: transparent;
  color: #fff;
  font-weight: 700;
  padding: 10px 28px;
  border-radius: 30px;
  cursor: pointer;
  z-index: 2;
  transition: color 0.15s ease;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  ${(p) =>
    p.active &&
    `
    background: #49bbbd;
    box-shadow: 0 6px 18px rgba(26,166,163,0.18);
  `}

  &:not(:first-child) {
    margin-left: 6px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 13px;
    flex: 1;
    text-align: center;
  }
`;

export const Description = styled.p`
  text-align: left;
  color: #5b5b5b;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Label = styled.label`
  color: #000;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 16px 44px 16px 16px;
  border-radius: 24px;
  border: 1.5px solid #49bbbd;
  color: #acacac;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: #fff;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }

  &:focus {
    box-shadow: 0 8px 18px rgba(33, 192, 190, 0.12);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    transform: scale(1);
    transform-origin: center;
  }

  @media (max-width: 480px) {
    padding: 14px 40px 14px 14px;
    font-size: 16px;
  }
`;

export const EyeIcon = styled.button`
  position: absolute;
  right: 12px;
  top: 70%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  color: #000;
  padding: 6px;
  display: grid;
  place-items: center;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    right: 10px;
    padding: 4px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 4px;

  label {
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;

    a {
      align-self: flex-end;
    }
  }
`;

export const LoginButton = styled.button`
  margin-left: auto;
  display: inline-block;
  padding: 16px 80px;
  border-radius: 36px;
  background: #49bbbd;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 20px;
    margin-left: 0;
    font-size: 16px;
  }
`;
