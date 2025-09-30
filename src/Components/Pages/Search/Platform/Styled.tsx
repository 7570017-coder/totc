import styled from "styled-components";

export const Container = styled.section`
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

export const Content = styled.div`
  background: #9dccff33;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  margin: 0 auto;
  gap: 40px;

  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
    padding: 30px 60px;
    gap: 60px;
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    padding: 30px 120px;
  }
`;

export const Left = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;

  svg {
    color: #55efc4;
    font-size: 18px;
  }

  @media (min-width: 900px) {
    justify-content: flex-start;
    font-size: 17px;

    svg {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background: #49bbbd;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "avenir next lt pro bold", sans-serif;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 250px;

  &:hover {
    background: #3aa3a5;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 14px 30px;
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1200px) {
    max-width: 500px;
  }
`;
