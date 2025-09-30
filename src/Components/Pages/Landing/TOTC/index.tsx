import React from "react";
import {
  Section,
  Title,
  Description,
  CardContainer,
  Card,
  CardOverlay,
  CardHeading,
  CardButton,
} from "./Styled";

import AnimatedContent from "../../../UI/AnimatedContent/AnimatedContent";
import Pic1 from "/Pic1.png";
import Pic2 from "/Pic2.png";

const TOTC = () => {
  return (
    <Section>
      <Title>
        What is <span>TOTC?</span>
      </Title>
      <Description>
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </Description>

      <CardContainer>
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <Card background={Pic1}>
            <CardOverlay />
            <CardHeading>FOR INSTRUCTORS</CardHeading>
            <CardButton variant="light">Start a class today</CardButton>
          </Card>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <Card background={Pic2}>
            <CardOverlay />
            <CardHeading>FOR STUDENTS</CardHeading>
            <CardButton variant="teal">Enter access code</CardButton>
          </Card>
        </AnimatedContent>
      </CardContainer>
    </Section>
  );
};

export default TOTC;
