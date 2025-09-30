import styled from "styled-components";

const ACCENT = "#49bbbd";
const WHITE = "#ffffff";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  font-family: "avenir next lt pro bold", sans-serif;
  height: 300px;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 1200px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background: ${WHITE};
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 20px;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  color: #000;
  outline: none;

  @media (min-width: 768px) {
    padding: 14px 18px;
    font-size: 18px;
    width: auto;
  }
`;

export const SearchButton = styled.button`
  background: ${ACCENT};
  color: ${WHITE};
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #3aa3a5;
  }

  @media (min-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${WHITE};
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  svg {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
    gap: 8px;

    svg {
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
