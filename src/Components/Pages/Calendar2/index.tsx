import React from "react";
import {
  Container,
  Sidebar,
  SectionTitle,
  LessonList,
  LessonItem,
  LessonLeft,
  LessonIcon,
  LessonText,
  DurationBadge,
  BackButton,
  MainContent,
  TopBarContainer,
  Title,
  SubTitle,
  Timer,
  ContentWrapper,
  ShareSection,
  ShareTitle,
  ShareText,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  SocialIcons,
  SocialIcon,
} from "./Styled";

import { useNavigate } from "react-router";
import {
  FaBookOpen,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowLeft, FiClock } from "react-icons/fi";

const colors = ["#F48C064D", "#9DCCFF4D", "#EE645B4D", "#9DCCFF4D"];
const lessons = new Array(16).fill(null).map((_, i) => ({
  id: i,
  title: `Lesson 0${i + 1}: Introduction about XD`,
  duration: "30 mins",
  color: colors[i % colors.length],
}));

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CalendarsPage");

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <BackButton onClick={handleCheckout}>
          <FiArrowLeft />
        </BackButton>

        <SectionTitle>Change Simplification</SectionTitle>
        <LessonList>
          {lessons.slice(0, 4).map((l) => (
            <LessonItem key={l.id} lessonColor={l.color}>
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
          {lessons.slice(4).map((l) => (
            <LessonItem key={l.id} lessonColor={l.color}>
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
        <TopBarContainer>
          <div>
            <Title>Learn about Adobe XD & Prototyping</Title>
            <SubTitle>Introduction about XD</SubTitle>
          </div>
          <Timer>
            <FiClock /> <span>1 hour</span>
          </Timer>
        </TopBarContainer>

        <ContentWrapper>
          <ShareSection>
            <ShareTitle>Share and Refer</ShareTitle>
            <ShareText>
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur
              adi piscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit,
              sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
              <br />
              eiusmodLorem dolor sit amet, consectetur adipiscing
            </ShareText>
          </ShareSection>

          {/* Cards */}
          {["#9DCCFF4D", "#F48C064D", "#EE645B4D"].map((bg, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div>
                  <CardTitle>06 Super Coins on the way</CardTitle>
                  <CardSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adi
                  </CardSubtitle>
                </div>
                <SocialIcons>
                  <SocialIcon>
                    <FaTwitter />
                  </SocialIcon>
                  <SocialIcon>
                    <FaFacebookF />
                  </SocialIcon>
                  <SocialIcon>
                    <FaInstagram />
                  </SocialIcon>
                  <SocialIcon>
                    <FaYoutube />
                  </SocialIcon>
                  <SocialIcon>
                    <FaWhatsapp />
                  </SocialIcon>
                </SocialIcons>
              </CardHeader>
              <CardBody bg={bg}>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodL
              </CardBody>
            </Card>
          ))}
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default CoursePage;
