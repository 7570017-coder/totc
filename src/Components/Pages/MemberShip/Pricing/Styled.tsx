import styled, { css } from "styled-components";

export const PricingWrapper = styled.section`
  padding: 80px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

export const PricingTitle = styled.h2`
  color: #49bbbd;
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const PricingCard = styled.div<{ highlight?: boolean }>`
  background: #fff;
  border-radius: 12px;
  padding: 25px 20px;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;

  ${(props) =>
    props.highlight &&
    css`
      border-color: #49bbbd;
      box-shadow: 0 8px 8px 0 rgba(38, 50, 56, 0.12),
        0 16px 24px 0 rgba(38, 50, 56, 0.08);
      transform: scale(1.05);
    `}

  &:hover {
    transform: ${(props) =>
      props.highlight ? "scale(1.08)" : "translateY(-8px)"};
    box-shadow: 0 8px 8px 0 rgba(38, 50, 56, 0.12),
      0 16px 24px 0 rgba(38, 50, 56, 0.08);
  }

  @media (max-width: 1024px) {
    ${(props) =>
      props.highlight &&
      css`
        transform: scale(1.02);

        &:hover {
          transform: scale(1.05);
        }
      `}
  }

  @media (max-width: 768px) {
    padding: 20px 15px;

    ${(props) =>
      props.highlight &&
      css`
        transform: none;

        &:hover {
          transform: translateY(-5px);
        }
      `}
  }
`;

export const PricingHeader = styled.div`
  margin-bottom: 20px;

  h4 {
    color: #49bbbd;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.2px;
    align-items: center;
    gap: 8px;
    display: flex;
    margin: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;

    h4 {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 8px 0;

  @media (max-width: 480px) {
    gap: 4px;
    margin: 6px 0;
  }
`;

export const Price = styled.div`
  color: var(--Black, #2d3436);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const PriceLabel = styled.div`
  color: var(--Black, #2d3436);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 10px;
    letter-spacing: 1.5px;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  flex-grow: 1;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--Black, #2d3436);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 26px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
    gap: 8px;
  }
`;

export const IconWrapper = styled.span<{ bg?: string; color?: string }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.bg || "#e6f8fc"};
  color: ${(props) => props.color || "#23bdee"};
  flex-shrink: 0;
  font-size: 11px;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
`;

export const Button = styled.button<{ variant?: "outline" | "solid" }>`
  width: 100%;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  font-family: "avenir next lt pro bold", sans-serif;

  ${(props) =>
    props.variant === "outline"
      ? css`
          background: transparent;
          border: 1px solid #adadad;
          color: #49bbbd;

          &:hover {
            background: #49bbbd;
            color: #fff;
            border: none;
          }
        `
      : css`
          background: #49bbbd;
          color: #fff;
          border: none;

          &:hover {
            background: #fff;
            color: #49bbbd;
            border: 1px solid #adadad;
          }
        `}

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 15px;
  }
`;

export const Badge = styled.span`
  background: #fff;
  color: var(--Black, #2d3436);
  text-align: center;
  font-size: 10px;
  font-family: "avenir next lt pro bold", sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 12px;
  border: 1px solid #6c5ce7;
  border-radius: 99px;
  margin-left: auto;

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 4px 8px;
    letter-spacing: 1.5px;
  }
`;
