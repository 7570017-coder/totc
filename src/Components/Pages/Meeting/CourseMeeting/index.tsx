import React from "react";
import styled from "styled-components";
import Header from "../Header";
import VideoCall from "../VideoCall";
import CourseContents from "../CourseContents";
import BookForYou from "../Book";

const CourseMeeting: React.FC = () => {
  return (
    <PageWrapper>
      <MainGrid>
        <LeftColumn>
          <Header />
          <VideoCall />
        </LeftColumn>

        <RightColumn>
          <CourseContents />
          <BookForYou />
        </RightColumn>
      </MainGrid>
    </PageWrapper>
  );
};

export default CourseMeeting;

const PageWrapper = styled.div`
  background: #9dccff4d;
  min-height: 100vh;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px 60px;
  }

  @media (min-width: 1200px) {
    padding: 60px 80px;
  }

  @media (min-width: 1400px) {
    padding: 100px;
  }
`;

const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 35px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1024px) {
    gap: 35px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1024px) {
    gap: 35px;
  }
`;
