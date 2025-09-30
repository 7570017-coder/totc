import styled from "styled-components";

export const CallWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    border-radius: 24px;
  }
`;

export const CallImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;

  @media (min-width: 768px) {
    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    border-radius: 12px;
  }
`;
