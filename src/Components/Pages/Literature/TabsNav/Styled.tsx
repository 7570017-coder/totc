import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  padding: 60px 120px;
  background: #fff;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: 1200px) {
    padding: 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 10px;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 16px 27px;
  min-width: 180px;
  border-radius: 8px;
  border: none;
  background: ${({ active }) => (active ? "#49bbbd" : "#BBBBBB80")};
  color: ${({ active }) => (active ? "#fff" : "#696969")};
  text-align: center;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;

  &:hover {
    background: ${({ active }) => (active ? "#3aa1a3" : "#e2e2e2")};
  }

  @media (max-width: 1024px) {
    min-width: 160px;
    padding: 14px 24px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    padding: 12px 20px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    padding: 10px 16px;
    font-size: 16px;
  }
`;
