import React, { useState } from "react";
import {
  LessonWrapper,
  LessonTitle,
  LessonList,
  LessonItem,
  LessonHeader,
  LessonIcon,
  LessonArrow,
  LessonDesc,
} from "./Styled";
import { FaChevronDown } from "react-icons/fa";

const lessons = [
  { title: "Lorem ipsum dolor sit amet" },
  { title: "Consectetur adipiscing elit, sed do" },
  { title: "Eiusmod tempos Lorem ipsum" },
  { title: "Lorem ipsum dolor sit amet" },
  { title: "Lorem ipsum dolor sit amet" },
];

const OnlineLesson2: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleLesson = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <LessonWrapper>
      <LessonTitle>Online coaching lessons for remote learning</LessonTitle>
      <LessonList>
        {lessons.map((lesson, index) => (
          <LessonItem key={index}>
            <LessonHeader onClick={() => toggleLesson(index)}>
              <LessonIcon />
              <span>{lesson.title}</span>
              <LessonArrow isopen={openIndex === index}>
                <FaChevronDown />
              </LessonArrow>
            </LessonHeader>
            <LessonDesc isopen={openIndex === index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
              consectetur adipiscing elit, sed do eiusmod temporLorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos
              Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
              eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
              adipiscing elit, sed do eiusmod tempor
            </LessonDesc>
          </LessonItem>
        ))}
      </LessonList>
    </LessonWrapper>
  );
};

export default OnlineLesson2;
