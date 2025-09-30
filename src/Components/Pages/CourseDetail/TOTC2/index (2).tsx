import React, { useState } from "react";
import {
  Section,
  Content,
  Title,
  Description,
  LearnMore,
  MediaWrapper,
  ImageContainer,
  PlayButton,
  IframeWrapper,
} from "./Styled";

import DotsImg from "/Dots1.png";
import Pic3 from "/Pic3.png";
import PlayBtn from "/play-button.png";

const TOTC2 = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Section background={DotsImg}>
      <Content>
        <Title>
          Everything you can do in a physical classroom,{" "}
          <span>you can do with TOTC</span>
        </Title>
        <Description>
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </Description>
        <LearnMore href="#">Learn more</LearnMore>
      </Content>

      <MediaWrapper>
        <ImageContainer>
          <img src={Pic3} alt="Classroom" />
          <PlayButton>
            <img src={PlayBtn} alt="Play" />
          </PlayButton>
        </ImageContainer>
      </MediaWrapper>
    </Section>
  );
};

export default TOTC2;
