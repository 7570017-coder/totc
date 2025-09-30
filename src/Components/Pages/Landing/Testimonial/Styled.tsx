import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px;
  background: #ffffff;
  font-family: "Avenir Next LT Pro Bold", sans-serif;

  @media (max-width: 1200px) {
    padding: 60px 80px;
    gap: 40px;
  }

  @media (max-width: 900px) {
    padding: 40px 40px;
    gap: 30px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: left;
  }

  small {
    color: #525596;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4px;

    @media (max-width: 1024px) {
      font-size: 18px;
      letter-spacing: 3px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      letter-spacing: 2px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #2f327d;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 15px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  p {
    color: #696984;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.52px;
    word-break: break-word;
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 24px 40px;
  border: 1px solid #49bbbd;
  border-radius: 80px;
  background: white;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  color: #49bbbd;
  font-size: 22px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.44px;
  margin-top: 40px;

  &:hover {
    background: #00cbb8;
    color: white;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 20px 35px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 18px 30px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 16px 25px;
    margin-top: 20px;
    width: 100%;
    justify-content: center;
  }
`;

export const MediaWrapper = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;

  @media (max-width: 900px) {
    max-width: 400px;
    width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const Card = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50px;
  background: white;
  border-radius: 20px;
  border-left: 20px solid #f67766;
  padding: 40px 40px 30px 35px;
  box-shadow: 2px 4px 60px 0 rgba(41, 44, 124, 0.1);
  width: 420px;

  @media (max-width: 1200px) {
    width: 310px;
    left: 30px;
    padding: 30px 30px 25px 25px;
  }

  @media (max-width: 900px) {
    width: 350px;
  }

  /* Remove absolute positioning only on mobile */
  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    left: 0;
    width: 90%;
    max-width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 15px 15px;
    border-left-width: 10px;
    margin-top: 0;
  }

  p {
    color: #5f5f7e;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.44px;
    border-left: 2px solid #bdbdd1;
    padding-left: 25px;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding-left: 20px;
      line-height: 160%;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding-left: 15px;
      line-height: 150%;
      margin-bottom: 15px;
    }
  }
`;

export const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 12px;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 15px;
  }
`;

export const UserName = styled.span`
  color: #5f5f7e;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 0;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }
`;

export const StarsRow = styled.div`
  color: #ffb800;
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 2px;
  }
`;

export const ReviewsText = styled.span`
  color: #80819a;
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
