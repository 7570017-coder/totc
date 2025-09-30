import styled from "styled-components";

/* Layout */
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  padding: 80px 180px;

  @media (max-width: 1200px) {
    padding: 60px 100px;
    grid-template-columns: 1.5fr 1fr;
    gap: 30px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 50px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
  }
`;

export const Left = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Right = styled.div`
  background: #f0f7ff;
  border-radius: 12px;
  padding: 20px;
  align-self: flex-start;

  @media (max-width: 1024px) {
    align-self: stretch;
  }
`;

/* Title */
export const Title = styled.h2`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CardTypeLabel = styled.div`
  color: #5b5b5b;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px 0 8px 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

/* Card types */
export const CardTypes = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const CardLogo = styled.img`
  height: 50px;
  object-fit: contain;
  border-radius: 8px;
  padding: 6px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

/* Form */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #5b5b5b;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  color: #9d9b9b;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: #21c0be;
    box-shadow: 0 0 0 2px rgba(33, 192, 190, 0.2);
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const HalfRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    cursor: pointer;
  }

  label {
    color: #9d9b9b;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const ConfirmButton = styled.button`
  background: #49bbbd;
  color: #fff;
  padding: 14px;
  border-radius: 12px;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 12px;
  }
`;

/* Summary */
export const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SummaryTitle = styled.h3`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const SummaryImage = styled.img`
  height: 70px;
  border-radius: 6px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export const SummaryText = styled.div`
  flex: 1;

  p {
    color: #000;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  small {
    color: #5b5b5b;
    font-family: "avenir next lt pro bold", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const SummaryPrice = styled.div`
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5b5b5b;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  letter-spacing: 0.4px;
  border-top: 1px solid #5b5b5b;
  padding-top: 12px;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 160%;
  }
`;

export const SummaryLabel = styled.span``;

export const SummaryValue = styled.span`
  font-weight: 500;
`;

export const TotalRow = styled(SummaryRow)`
  color: #000;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  letter-spacing: 0.4px;
  border-top: 1px solid #5b5b5b;
  padding-top: 10px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
