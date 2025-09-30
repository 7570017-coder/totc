import React from "react";
import { CtaOuter, CtaWrapper, CtaTitle, CtaText, CtaButton } from "./Styled";
import { useNavigate } from "react-router";

const OnlineLesson = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseCalendar1");
  return (
    <CtaOuter>
      <CtaWrapper>
        <CtaTitle>Online coaching lessons for remote learning.</CtaTitle>
        <CtaText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </CtaText>
        <CtaButton onClick={handleCheckout}>Start learning now</CtaButton>
      </CtaWrapper>
    </CtaOuter>
  );
};

export default OnlineLesson;
