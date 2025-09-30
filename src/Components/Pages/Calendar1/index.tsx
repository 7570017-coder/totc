// index.tsx
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
  FormSection,
  TopBarContainer,
  Title,
  SubTitle,
  Timer,
  MiddleBarContainer,
  MiddleTitle,
  MiddleSubtitle,
  FormContainer,
  Form,
  InputGroup,
  Label,
  Input,
  Select,
  Textarea,
  SaveButton,
  ButtonContainer,
  InputPair,
} from "./Styled";

import { useNavigate } from "react-router";
import { FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiClock } from "react-icons/fi";

const colors = ["#F48C064D", "#9DCCFF4D", "#EE645B4D", "#9DCCFF4D"];

const lessons = new Array(16).fill(null).map((_, i) => ({
  id: i,
  title: `Lesson 0: Introduction about XD`,
  duration: "30 mins",
  color: colors[i % colors.length],
}));

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CalendarsPage");
  const [activeLesson, setActiveLesson] = useState<number | null>(0);

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
                <MiddleTitle>Create new event</MiddleTitle>
                <MiddleSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                  elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmodadipiscing elit, sed do
                  eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
                </MiddleSubtitle>
              </div>
            </MiddleBarContainer>
          </MiddleSection>

          <FormSection>
            <FormContainer>
              <Form>
                <InputGroup>
                  <Label>Event Name</Label>
                  <Input placeholder="Adobe XD Auto - Animate : Your Guide to Creating" />
                </InputGroup>

                <InputGroup>
                  <Label>Date & Time</Label>
                  <InputPair>
                    <div>
                      <Label small>Start date / Time</Label>
                      <Input placeholder="September 24, 2017 07:59 am" />
                    </div>
                    <div>
                      <Label small>End date / Time</Label>
                      <Input placeholder="September 24, 2017 07:59 am" />
                    </div>
                  </InputPair>
                </InputGroup>

                <InputGroup>
                  <Label>Location</Label>
                  <Input placeholder="211B Thornridge Cir, Syracuse, Connecticut 35624" />
                </InputGroup>

                <InputGroup>
                  <Label>Notification & Email</Label>
                  <InputPair>
                    <div>
                      <Label small>Notification</Label>
                      <Select>
                        <option>30 mins</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </Select>
                    </div>
                    <div>
                      <Label small>Email</Label>
                      <Input placeholder="jessica.hansome@example.com" />
                    </div>
                  </InputPair>
                </InputGroup>

                <InputGroup>
                  <Label>Event Description</Label>
                  <Textarea placeholder="Lorem ipsum dolor sit amet..." />
                </InputGroup>

                <ButtonContainer>
                  <SaveButton>Save Now</SaveButton>
                </ButtonContainer>
              </Form>
            </FormContainer>
          </FormSection>
        </MainGrid>
      </MainContent>
    </Container>
  );
};

export default CoursePage;
