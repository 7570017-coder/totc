import styled from "styled-components";

export const Section = styled.section`
  background: #9dccff33;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
    gap: 60px;
  }
`;

export const TextBox = styled.div`
  flex: 1;
  max-width: 100%;
  text-align: center;

  @media (min-width: 900px) {
    max-width: 550px;
    text-align: left;
  }

  p.source {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;

    span {
      color: #49bbbd;
      font-weight: 400;
    }

    @media (min-width: 768px) {
      font-size: 22px;
      margin-bottom: 24px;
    }
  }

  h2 {
    color: #2f327d;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 150%;
    }

    @media (min-width: 1200px) {
      font-size: 40px;
    }
  }

  p.description {
    color: #696984;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.48px;
    margin-bottom: 25px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 180%;
    }

    @media (min-width: 1200px) {
      font-size: 24px;
    }
  }

  button {
    background: #49bbbd;
    border: none;
    color: #fff;
    padding: 16px 32px;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s ease-in;
    width: 100%;
    max-width: 300px;

    &:hover {
      background: #31a8b9;
    }

    @media (min-width: 768px) {
      width: auto;
      padding: 18px 36px;
      font-size: 15px;
    }

    @media (min-width: 1200px) {
      padding: 20px 40px;
      font-size: 16px;
    }
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
  }

  @media (min-width: 768px) {
    img {
      max-width: 500px;
    }
  }

  @media (min-width: 1200px) {
    img {
      max-width: none;
    }
  }
`;
