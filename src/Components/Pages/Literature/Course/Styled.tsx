import styled from "styled-components";

export const LiteratureWrapper = styled.div`
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
export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 86px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const BookCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const BookImage = styled.img`
  border-radius: 6px;
  width: 100%;
  height: auto;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 0 5px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

export const BookInfo = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const BookPrice = styled.p`
  color: rgba(73, 187, 189, 0.8);
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.6px;
  margin: 0;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 30px 0;
  gap: 10px;

  @media (max-width: 768px) {
    margin: 30px 0 20px 0;
  }

  @media (max-width: 480px) {
    margin: 20px 0 15px 0;
    gap: 5px;
  }
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background: ${({ active }) => (active ? "#49bbbd" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ active }) => (active ? "#3aa1a3" : "#ddd")};
  }

  &.nav-button {
    background: rgba(73, 187, 189, 0.2);
    color: #49bbbd;

    &:hover {
      background: rgba(73, 187, 189, 0.35);
    }
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
`;
