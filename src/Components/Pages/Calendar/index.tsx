import React, { useState } from "react";
import {
  Container,
  Sidebar,
  MainContent,
  SectionTitle,
  LessonList,
  LessonItem,
  LessonLeft,
  LessonIcon,
  LessonText,
  DurationBadge,
  BackButton,
  MainGrid,
  TopSection,
  MiddleSection,
  ContentSection,
  TopBarContainer,
  Title,
  SubTitle,
  Timer,
  MiddleBarContainer,
  MiddleTitle,
  MiddleSubtitle,
  ContentGrid,
  CalendarContainer,
  CalendarHeader,
  CalendarNav,
  CalendarTitle,
  CalendarGrid,
  CalendarDay,
  CalendarDate,
  NotesContainer,
  NotesHeader,
  NotesTitle,
  AddNoteButton,
  NotesList,
  NoteItem,
  NoteText,
  NoteTime,
  EmptyNotes,
  CurrentDate,
} from "./Styled";

import { useNavigate } from "react-router";
import { FaBookOpen } from "react-icons/fa";
import {
  FiArrowLeft,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";

const colors = ["#F48C064D", "#9DCCFF4D", "#EE645B4D", "#9DCCFF4D"];

const lessons = new Array(16).fill(null).map((_, i) => ({
  id: i,
  title: `Lesson 0: Introduction about XD`,
  duration: "30 mins",
  color: colors[i % colors.length],
}));

// Sample notes data
const sampleNotes = [
  { id: 1, text: "Meeting with design team", time: "10:00 AM" },
  { id: 2, text: "Review prototype feedback", time: "2:30 PM" },
  { id: 3, text: "Submit weekly report", time: "4:00 PM" },
];

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CalendarsPage");
  const [activeLesson, setActiveLesson] = useState<number | null>(0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [notes, setNotes] = useState(sampleNotes);
  const [newNote, setNewNote] = useState("");

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar days
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const today = new Date();

  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const addNewNote = () => {
    if (newNote.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setNotes((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: newNote,
          time,
        },
      ]);
      setNewNote("");
    }
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <BackButton onClick={handleCheckout}>
          <FiArrowLeft />
        </BackButton>

        <SectionTitle>Change Simplification</SectionTitle>
        <LessonList>
          {lessons.slice(0, 4).map((l, i) => (
            <LessonItem
              key={l.id}
              active={activeLesson === i}
              lessonColor={l.color}
              onClick={() => setActiveLesson(i)}
            >
              <LessonLeft>
                <LessonIcon>
                  <FaBookOpen />
                </LessonIcon>
                <LessonText>{l.title}</LessonText>
              </LessonLeft>
              <DurationBadge>{l.duration}</DurationBadge>
            </LessonItem>
          ))}
        </LessonList>

        <SectionTitle>PRACTICE QUIZ</SectionTitle>
        <LessonList>
          {lessons.slice(4).map((l, i) => (
            <LessonItem
              key={l.id}
              active={activeLesson === i + 4}
              lessonColor={l.color}
              onClick={() => setActiveLesson(i + 4)}
            >
              <LessonLeft>
                <LessonIcon>
                  <FaBookOpen />
                </LessonIcon>
                <LessonText>{l.title}</LessonText>
              </LessonLeft>
              <DurationBadge>{l.duration}</DurationBadge>
            </LessonItem>
          ))}
        </LessonList>
      </Sidebar>

      {/* Main Content with Grid Layout */}
      <MainContent>
        <MainGrid>
          <TopSection>
            <TopBarContainer>
              <div>
                <Title>Learn about Adobe XD & Prototyping</Title>
                <SubTitle>Introduction about XD</SubTitle>
              </div>
              <Timer>
                <FiClock /> <span>1 hour</span>
              </Timer>
            </TopBarContainer>
          </TopSection>

          <MiddleSection>
            <MiddleBarContainer>
              <div>
                <MiddleTitle>Share and refer</MiddleTitle>
                <MiddleSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed
                  do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                  elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmodadipiscing elit, sed do
                  eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum
                  dolor sit amet, consectetur adi piscing elit, sed do
                  eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                  elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmodadipiscing elit, sed do
                  eiusmodeiusmodadipiscing elit, sed do eiusmodLorem <br />
                  eiusmodLorem dolor sit amet, consectetur adipiscing
                </MiddleSubtitle>
              </div>
            </MiddleBarContainer>
          </MiddleSection>

          <ContentSection>
            <ContentGrid>
              <CalendarContainer>
                <CalendarHeader>
                  <CalendarNav onClick={() => navigateMonth("prev")}>
                    <FiChevronLeft />
                  </CalendarNav>
                  <CalendarTitle>
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </CalendarTitle>
                  <CalendarNav onClick={() => navigateMonth("next")}>
                    <FiChevronRight />
                  </CalendarNav>
                </CalendarHeader>

                <CurrentDate>
                  Today:{" "}
                  {today.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CurrentDate>

                <CalendarGrid>
                  {/* Day headers */}
                  {dayNames.map((day) => (
                    <CalendarDay key={day} header>
                      {day}
                    </CalendarDay>
                  ))}

                  {/* Calendar dates */}
                  {calendarDays.map((day, index) => (
                    <CalendarDate
                      key={index}
                      empty={!day}
                      today={
                        day === today.getDate() &&
                        currentMonth.getMonth() === today.getMonth() &&
                        currentMonth.getFullYear() === today.getFullYear()
                      }
                    >
                      {day}
                    </CalendarDate>
                  ))}
                </CalendarGrid>
              </CalendarContainer>

              <NotesContainer>
                <NotesHeader>
                  <NotesTitle>Reminders</NotesTitle>
                  <AddNoteButton onClick={addNewNote}>
                    <FiPlus />
                  </AddNoteButton>
                </NotesHeader>

                <NotesList>
                  {notes.map((note) => (
                    <NoteItem key={note.id} onClick={() => deleteNote(note.id)}>
                      <NoteText>{note.text}</NoteText>
                      <NoteTime>{note.time}</NoteTime>
                    </NoteItem>
                  ))}

                  {notes.length === 0 && (
                    <EmptyNotes>
                      No reminders yet. Tap + to add one. Click the added one
                      again to remove.
                    </EmptyNotes>
                  )}
                </NotesList>

                <input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a new reminder..."
                  onKeyPress={(e) => e.key === "Enter" && addNewNote()}
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    marginTop: "10px",
                    fontSize: "16px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </NotesContainer>
            </ContentGrid>
          </ContentSection>
        </MainGrid>
      </MainContent>
    </Container>
  );
};

export default CoursePage;
