import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 60px 80px;
  }

  @media (max-width: 900px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 28px;

  h2 {
    color: #2f327d;
    font-family: "avenir", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
    margin: 0;
    margin-top: 80px;

    @media (max-width: 1024px) {
      font-size: 32px;
      margin-top: 60px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
      margin-top: 40px;
      line-height: 140%;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      margin-top: 30px;
    }
  }

  p {
    margin: 0px;
    margin-bottom: 100px;
    color: #696984;
    text-align: center;
    font-family: "avenir", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;

    @media (max-width: 1024px) {
      font-size: 20px;
      margin-bottom: 80px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 60px;
      line-height: 160%;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const MainCard = styled.article`
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const MainImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
    border-radius: 15px;
  }
`;

export const Tag = styled.span<{ variant?: "news" | "press" }>`
  display: inline-block;
  padding: 6px 25px;
  border-radius: 80px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  background: #49bbbd;
  position: absolute;
  bottom: 14px;
  left: 14px;

  @media (max-width: 480px) {
    padding: 4px 15px;
    font-size: 12px;
    bottom: 10px;
    left: 10px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .tag {
    align-self: flex-start;
    margin-bottom: 6px;
    padding: 2px 35px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 12px;
    color: #ffffff;
    background: #49bbbd;

    @media (max-width: 768px) {
      padding: 2px 25px;
      font-size: 11px;
    }

    @media (max-width: 480px) {
      padding: 2px 20px;
      font-size: 10px;
    }
  }

  .title {
    color: #252641;
    font-family: "avenir", sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%;
    margin: 0;
    margin-top: 20px;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 160%;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .desc {
    color: #696984;
    font-family: "avenir", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.4px;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 160%;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .readmore {
    margin-top: 6px;
    color: #696984;
    font-family: "avenir", sans-serif;
    font-weight: 400;
    text-decoration: underline;
    font-size: 16px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const SideStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 900px) {
    gap: 40px;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`;

export const SideCard = styled.article`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 16px;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 200px 1fr;
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 200px 1fr;
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 150px 1fr;
    gap: 8px;
  }
`;

export const SideImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 172px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  span {
    position: absolute;
    bottom: 14px;
    right: 14px;
    left: auto;

    @media (max-width: 480px) {
      bottom: 8px;
      right: 8px;
    }
  }

  @media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

export const SideContent = styled.div`
  padding: 10px 0;

  .title {
    color: #252641;
    font-family: "avenir", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%;
    margin: 0 0 8px 0;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 160%;
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }

  .desc {
    color: #696984;
    font-family: "avenir", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.4px;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 13px;
      line-height: 160%;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }
`;
