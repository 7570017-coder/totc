import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import {
  Section,
  Content,
  Title,
  Description,
  LearnMore,
  MediaWrapper,
  ImageContainer,
  PlayButton,
} from "./Styled";

import AnimatedContent from "../../../UI/AnimatedContent/AnimatedContent";
import DotsImg from "/Dots1.png";
import Pic3 from "/Pic3.png";

const TOTC2 = () => {
  const handlePlayClick = () => {
    // No video functionality - just a static play button
    console.log("Play button clicked");
  };

  return (
    <Section background={DotsImg}>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <Content>
          <Title>
            Everything you can do in a physical classroom,{" "}
            <span>you can do with TOTC</span>
          </Title>
          <Description>
            TOTC's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </Description>
          <LearnMore href="#">Learn more</LearnMore>
        </Content>
      </AnimatedContent>

      <MediaWrapper>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <ImageContainer>
            <img src={Pic3} alt="Classroom" />
            <PlayButton onClick={handlePlayClick}>
              <FaPlayCircle />
            </PlayButton>
          </ImageContainer>
        </AnimatedContent>
      </MediaWrapper>
    </Section>
  );
};

export default TOTC2;
