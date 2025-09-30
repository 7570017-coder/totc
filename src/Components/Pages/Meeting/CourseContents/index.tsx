import React, { useState } from "react";
import {
  Container,
  HeaderRow,
  Title,
  HeaderRight,
  CompletedText,
  CalendarButton,
  ProgressWrap,
  ProgressSegment,
  Accordion,
  Item,
  ItemHeader,
  ItemLeft,
  ItemTitle,
  ItemInfo,
  ItemMeta,
  Chevron,
  ContentBox,
  LessonRow,
  LessonIndex,
  LessonTitle,
  LessonTime,
  LockIcon,
} from "./Styled";

import { GoBook } from "react-icons/go";
import {
  FaCalendarAlt,
  FaLock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";

type Lesson = {
  title: string;
  time: string;
  locked?: boolean;
};

type Section = {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
  lessons: Lesson[];
};

const SECTIONS: Section[] = [
  {
    id: "get-started",
    title: "Get Started",
    duration: "1 Hour",
    lessonsCount: 5,
    lessons: [
      { title: "Intro to Course", time: "10:00" },
      { title: "Setup & Tools", time: "12:00" },
      { title: "Basic Concepts", time: "08:00" },
    ],
  },
  {
    id: "illustrator",
    title: "Illstarator Structuors",
    duration: "2 Hour",
    lessonsCount: 3,
    lessons: [
      { title: "Lorem ipsum dolor sit amet", time: "65:00" }, // active
      { title: "Lorem ipsum dolor", time: "25:00", locked: true },
      { title: "Lorem ipsum dolor sit amet", time: "30:00", locked: true },
    ],
  },
  {
    id: "using-illustrator",
    title: "Using Illstrator",
    duration: "1 Hour",
    lessonsCount: 4,
    lessons: [],
  },
  {
    id: "what-is-pandas",
    title: "What is Pandas?",
    duration: "12:54",
    lessonsCount: 5,
    lessons: [],
  },
  {
    id: "work-with-numpy",
    title: "Work with Numpy",
    duration: "59:00",
    lessonsCount: 3,
    lessons: [],
  },
];

const CourseContents: React.FC = () => {
  // default open the second section (illustrator) to match the design
  const [openSection, setOpenSection] = useState<string>("illustrator");
  const [completed, setCompleted] = useState({ done: 2, total: 5 });

  const toggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <Container>
      <HeaderRow>
        <Title>Course Contents</Title>
      </HeaderRow>
      <HeaderRight>
        <CompletedText>
          {completed.done}/{completed.total} COMPLETED
        </CompletedText>
        <CalendarButton aria-label="Calendar">
          <FaCalendarAlt />
        </CalendarButton>
      </HeaderRight>
      <ProgressWrap>
        {/* 5 segments, first two filled to show 2/5 */}
        <ProgressSegment filled />
        <ProgressSegment filled />
        <ProgressSegment />
        <ProgressSegment />
        <ProgressSegment />
      </ProgressWrap>

      <Accordion role="list">
        {SECTIONS.map((sec) => {
          const isOpen =
            openSection === sec.title.replace(/\s+/g, "").toLowerCase()
              ? openSection === sec.title.replace(/\s+/g, "").toLowerCase()
              : openSection === sec.id.replace(/\s+/g, "").toLowerCase()
              ? true
              : openSection === sec.id; // fallback: open by id

          // For simplicity, check with both id and title-keys (we open by id above)
          const expanded = openSection === sec.id;

          return (
            <Item key={sec.id}>
              <ItemHeader
                aria-expanded={expanded}
                onClick={() => toggle(sec.id)}
                type="button"
              >
                <ItemLeft>
                  <ItemTitle>{sec.title}</ItemTitle>
                  <ItemInfo>
                    <FiClock />
                    <span>{sec.duration}</span>
                  </ItemInfo>
                </ItemLeft>

                <ItemMeta>
                  <GoBook />
                  <span style={{ marginLeft: 8 }}>
                    {sec.lessonsCount} Lessons
                  </span>
                  <Chevron>
                    {expanded ? <FaChevronUp /> : <FaChevronDown />}
                  </Chevron>
                </ItemMeta>
              </ItemHeader>

              {expanded && sec.lessons && sec.lessons.length > 0 && (
                <ContentBox>
                  {sec.lessons.map((lesson, idx) => {
                    const active = idx === 0; // first lesson is active in design
                    return (
                      <LessonRow key={idx} active={active}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <LessonIndex active={active}>{idx + 1}.</LessonIndex>
                          <LessonTitle active={active}>
                            {lesson.title}
                          </LessonTitle>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <LessonTime>{lesson.time}</LessonTime>
                          {lesson.locked && (
                            <LockIcon aria-hidden>
                              <FaLock />
                            </LockIcon>
                          )}
                        </div>
                      </LessonRow>
                    );
                  })}
                </ContentBox>
              )}
            </Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default CourseContents;
