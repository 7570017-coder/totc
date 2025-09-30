import styled from "styled-components";

const ACCENT = "#49bbbd";
const DARK = "#252641";
const MUTED = "#696984";
const LIGHT_BG = "#f3fbfb";
const BORDER = "#e6f3f3";

export const Container = styled.aside`
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
  font-family: "Avenir Next LT Pro Bold", sans-serif;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 40px 30px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${DARK};
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const CompletedText = styled.span`
  color: ${ACCENT};
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const CalendarButton = styled.button`
  background: transparent;
  border: none;
  color: ${ACCENT};
  font-size: 16px;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;

  &:hover {
    background: ${LIGHT_BG};
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ProgressWrap = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: 14px;
    margin-bottom: 18px;
  }
`;

export const ProgressSegment = styled.div<{ filled?: boolean }>`
  flex: 1;
  height: 5px;
  background: ${({ filled }) => (filled ? ACCENT : "#e9f6f5")};
  box-shadow: ${({ filled }) =>
    filled ? "inset 0 -3px 0 rgba(0,0,0,0.03)" : "none"};
  transition: background 180ms ease;
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.div`
  width: 100%;
`;

export const ItemHeader = styled.button`
  width: 100%;
  background: #fff;
  border: 1px solid rgba(73, 187, 189, 0.12);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  transition: box-shadow 180ms ease, border-color 180ms ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    padding: 14px;
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ItemTitle = styled.div`
  font-size: 14px;
  color: ${DARK};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${MUTED};
  font-size: 12px;

  svg {
    color: ${MUTED};
    font-size: 12px;
  }

  span {
    color: ${MUTED};
  }

  @media (min-width: 768px) {
    font-size: 13px;

    svg {
      font-size: 14px;
    }
  }
`;

export const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #252641cc;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  justify-content: space-between;

  svg {
    color: #252641cc;
    font-size: 12px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: auto;
    justify-content: flex-end;
    font-size: 13px;

    svg {
      font-size: 14px;
    }
  }
`;

export const Chevron = styled.span`
  margin-left: 8px;
  color: ${MUTED};
  display: inline-flex;
  align-items: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ContentBox = styled.div`
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${ACCENT};
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LessonRow = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const LessonIndex = styled.span<{ active?: boolean }>`
  display: inline-block;
  min-width: 26px;
  text-align: center;
  color: ${({ active }) => (active ? ACCENT : "#000")};
  font-weight: 700;
  font-size: 14px;
`;

export const LessonTitle = styled.span<{ active?: boolean }>`
  color: ${({ active }) => (active ? ACCENT : "#252641")};
  font-weight: ${({ active }) => (active ? 700 : 500)};
  font-size: 14px;
  text-align: left;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
  }
`;

export const LessonTime = styled.span`
  color: #000;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const LockIcon = styled.span`
  color: #000;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
