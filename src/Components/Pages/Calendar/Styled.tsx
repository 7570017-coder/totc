import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
  font-family: "avenir next lt pro bold", sans-serif;

  @media (max-width: 1200px) {
    grid-template-columns: 350px 1fr;
  }

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
  border-radius: 12px;

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
  overflow-y: hidden;

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

export const ContentSection = styled.section`
  padding: 20px;
  height: 100%;

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
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
  padding: 30px 60px;

  @media (max-width: 1200px) {
    padding: 25px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
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

// Content Grid (Calendar + Notes)
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-height: calc(100vh - 300px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-height: none;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

// Calendar Styles
export const CalendarContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const CalendarNav = styled.button`
  background: #49bbbd;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 18px;

  &:hover {
    background: #3aa9ab;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;

export const CalendarTitle = styled.h2`
  color: #252641;
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CurrentDate = styled.div`
  background: #49bbbd;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 12px;
    margin-bottom: 15px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const CalendarDay = styled.div<{ header?: boolean }>`
  text-align: center;
  padding: 10px;
  font-weight: ${(props) => (props.header ? "600" : "400")};
  color: ${(props) => (props.header ? "#49bbbd" : "#252641")};
  font-size: ${(props) => (props.header ? "14px" : "16px")};

  @media (max-width: 480px) {
    padding: 6px;
    font-size: ${(props) => (props.header ? "12px" : "14px")};
  }
`;

export const CalendarDate = styled.div<{ empty?: boolean; today?: boolean }>`
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;

  ${(props) =>
    props.empty &&
    `
    visibility: hidden;
  `}

  ${(props) =>
    props.today &&
    `
    background: #49bbbd;
    color: white;
    font-weight: 600;
  `}

  &:hover {
    background: ${(props) => (!props.empty ? "#e0f7f8" : "transparent")};
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

// Notes Styles (iPhone-like)
export const NotesContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const NotesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const NotesTitle = styled.h2`
  color: #252641;
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AddNoteButton = styled.button`
  background: #49bbbd;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 18px;

  &:hover {
    background: #3aa9ab;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;

export const NotesList = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;

  @media (max-width: 1024px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
  }
`;

export const NoteItem = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid #49bbbd;

  &:hover {
    background: #e0f7f8;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const NoteText = styled.p`
  color: #252641;
  font-size: 14px;
  margin: 0 0 5px 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const NoteTime = styled.span`
  color: #696984;
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const EmptyNotes = styled.div`
  text-align: center;
  color: #696984;
  font-size: 14px;
  padding: 40px 20px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 30px 15px;
  }
`;
