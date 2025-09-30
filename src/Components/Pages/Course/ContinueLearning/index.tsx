import React from "react";
import {
  Section,
  HeaderRow,
  CardsRow,
  Card,
  CardImg,
  CardBody,
  Title,
  AuthorRow,
  ProgressRow,
  ProgressOuter,
  ProgressInner,
  LessonText,
  Pagination,
  PageButton,
} from "./Styled";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Pic13_5 from "/Pic13.5.png";
import Pic22 from "/Pic22.png";
import Pic19_2 from "/Pic19.2.png";
import AvatarImg from "/Pic20.png";

const ContinueLearning: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      img: Pic13_5,
      progress: "70%",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      img: Pic22,
      progress: "70%",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      img: Pic19_2,
      progress: "70%",
    },
  ];

  return (
    <Section>
      <HeaderRow>
        <h2>Welcome back, ready for your next lesson?</h2>
        <a>View history</a>
      </HeaderRow>

      <CardsRow>
        {courses.map((c) => (
          <Card key={c.id}>
            <CardImg className="main-course-img" src={c.img} alt={c.title} />
            <CardBody>
              <Title>{c.title}</Title>
              <AuthorRow>
                <img src={AvatarImg} alt="Author avatar" />
                <span>Lina</span>
              </AuthorRow>
              <ProgressRow>
                <ProgressOuter>
                  <ProgressInner w={c.progress} />
                </ProgressOuter>
                <LessonText>Lesson 5 of 7</LessonText>
              </ProgressRow>
            </CardBody>
          </Card>
        ))}
      </CardsRow>

      <Pagination>
        <PageButton>{"<"}</PageButton>
        <PageButton>{">"}</PageButton>
      </Pagination>
    </Section>
  );
};

export default ContinueLearning;
