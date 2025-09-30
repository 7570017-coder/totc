import React from "react";
import {
  Container,
  TopImage,
  Title,
  Paragraph,
  Tags,
  Tag,
  Author,
  Avatar,
  AuthorInfo,
  FollowButton,
  ContentWrapper,
} from "./Styled";

const ArticleSection: React.FC = () => {
  return (
    <Container>
      <TopImage src="Pic21.png" alt="Article Banner" />

      <ContentWrapper>
        <Title>
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </Title>

        <Paragraph>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </Paragraph>
        <Paragraph>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. TOTC is a platform
          that allows educators to create online classes whereby they can store
          the course materials online; manage assignments, quizzes and exams;
          monitor due dates; grade results and provide students with feedback
          all in one place. TOTC is a platform
        </Paragraph>
        <Paragraph>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place. TOTC is a platform
          that allows educators to create online classes whereby they can store
          the course materials online; manage
        </Paragraph>

        <Tags>
          <Tag>affordable</Tag>
          <Tag>stunning</Tag>
          <Tag>making</Tag>
          <Tag>madbrains</Tag>
        </Tags>

        <Author>
          <Avatar src="Pic20.2.png" alt="Author" />
          <AuthorInfo>
            <p>Written by</p>
            <h4>Lina</h4>
          </AuthorInfo>
          <FollowButton>Follow</FollowButton>
        </Author>
      </ContentWrapper>
    </Container>
  );
};

export default ArticleSection;
