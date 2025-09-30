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
  TopBarContainer,
  Title,
  SubTitle,
  Timer,
  ContentWrapper,
  HeroImage,
  SectionBlock,
  SectionHeading,
  SectionText,
  ReviewCard,
  ReviewHeader,
  ReviewAvatar,
  ReviewName,
  ReviewStars,
  ReviewText,
} from "./Styled";

import { useNavigate } from "react-router";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import Pic3 from "/Pic3.3.png";
import Pic20_2 from "/Pic20.2.png";

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

        <SectionTitle>PRACTICE QUIZ</SectionTitle>
        <LessonList>
          {lessons.slice(0).map((l, i) => (
            <LessonItem
              key={l.id}
              active={activeLesson === i + 4}
              lessonColor={l.color}
              onClick={() => setActiveLesson(i + 0)}
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

      {/* Main Content */}
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

          <ContentWrapper>
            <HeroImage src={Pic3} alt="Hero" />

            <SectionBlock>
              <SectionHeading>O6 Super Coins on the way</SectionHeading>
              <SectionText>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmod
              </SectionText>
            </SectionBlock>

            <SectionBlock>
              <SectionHeading>Who this course is for?</SectionHeading>
              <SectionText>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodL
              </SectionText>
            </SectionBlock>

            <SectionBlock>
              <SectionHeading>Archievable</SectionHeading>
              <SectionText>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodLWho this course is
                for? <br /> Lorem ipsum dolor sit amet, consectetur adi piscing
                elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL
              </SectionText>
            </SectionBlock>

            <ReviewCard>
              <ReviewHeader>
                <ReviewAvatar src={Pic20_2} alt="avatar" />
                <div>
                  <ReviewName>Bulkin Simons</ReviewName>
                  <ReviewStars>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#F48C06" />
                    ))}
                  </ReviewStars>
                </div>
              </ReviewHeader>
              <ReviewText>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem
              </ReviewText>
            </ReviewCard>
          </ContentWrapper>
        </MainGrid>
      </MainContent>
    </Container>
  );
};

export default CoursePage;
