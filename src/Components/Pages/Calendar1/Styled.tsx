// Styled.tsx
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;

  @media (max-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const Sidebar = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 1;
    padding: 15px;
  }
`;

export const BackButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #49bbbd;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 50px 0 10px;
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin: 30px 0 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px 0 8px;
  }
`;

export const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LessonItem = styled.div<{ active?: boolean; lessonColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active, lessonColor }) =>
    active ? "#49bbbd" : lessonColor};

  &:hover {
    background: #49bbbd;
  }

  svg {
    color: black;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`;

export const LessonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const LessonIcon = styled.div`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LessonText = styled.span`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DurationBadge = styled.span`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const MainContent = styled.div`
  background: #9dccff4d;

  @media (max-width: 768px) {
    order: 1;
  }
`;

// Grid Layout for Main Content
export const MainGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100vh;
  gap: 0;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const TopSection = styled.section`
  background: #49bbbd;
`;

export const MiddleSection = styled.section``;

export const FormSection = styled.section`
  padding: 20px 50px 80px 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 20px 40px 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px 30px 20px;
  }
`;

// TopBar Styles
export const TopBarContainer = styled.div`
  padding: 26px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Timer = styled.div`
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// MiddleBar Styles
export const MiddleBarContainer = styled.div`
  padding: 30px;

  @media (max-width: 1200px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const MiddleTitle = styled.h1`
  color: #252641;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const MiddleSubtitle = styled.p`
  color: #696984;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Form Styles
export const FormContainer = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputPair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const Label = styled.label<{ small?: boolean }>`
  font-size: ${({ small }) => (small ? "12px" : "14px")};
  color: #5b5b5b;
  font-family: "avenir next lt pro bold", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: block;

  @media (max-width: 480px) {
    font-size: ${({ small }) => (small ? "11px" : "13px")};
  }
`;

const baseInput = css`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  color: #9d9b9b;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 16px; /* Changed from 14px to 16px to prevent zoom */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: #49bbbd;
    box-shadow: 0 0 0 2px rgba(73, 187, 189, 0.2);
  }

  /* Prevent zoom on iOS */
  @media screen and (max-width: 768px) {
    font-size: 16px;
    transform: scale(1);
    transform-origin: center;
  }

  @media (max-width: 480px) {
    padding: 14px 12px; /* Increased padding for better touch */
    font-size: 16px; /* Maintain 16px on mobile */
  }
`;

export const Input = styled.input`
  ${baseInput};

  /* Specific styles for input */
  &::placeholder {
    font-size: 14px;
    color: #9d9b9b;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Select = styled.select`
  ${baseInput};
  appearance: auto;

  /* Specific styles for select */
  option {
    font-size: 14px;
  }
`;

export const Textarea = styled.textarea`
  ${baseInput};
  min-height: 100px;
  resize: none;
  font-size: 16px; /* Ensure textarea also has 16px */

  &::placeholder {
    font-size: 14px;
    color: #9d9b9b;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    min-height: 80px;
    font-size: 16px; /* Maintain 16px on mobile */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const SaveButton = styled.button`
  background: #49bbbd;
  border: 1px solid #49bbbd;
  padding: 16px 40px;
  border-radius: 12px;
  color: #fff;
  font-family: "avenir next lt pro bold", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  min-width: 150px;

  &:hover {
    background: #fff;
    border: 1px solid #49bbbd;
    color: #49bbbd;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(73, 187, 189, 0.3);
  }

  @media (max-width: 480px) {
    padding: 14px 30px;
    font-size: 16px;
    min-width: 120px;
    width: 100%;
  }
`;
