import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Section,
  Container,
  Heading,
  Viewport,
  Track,
  Card,
  Avatar,
  Name,
  Text,
  ArrowButton,
  AppSection,
  AppText,
  AppButtons,
  AppButton,
} from "./Styled";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaAndroid, FaApple } from "react-icons/fa";

import Pic from "/Pic20.2.png";

const SAMPLE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

const Students: React.FC = () => {
  const items = useMemo(
    () =>
      new Array(8).fill(null).map((_, i) => ({
        id: i,
        name: "Bulkin Simons",
        text: SAMPLE_TEXT,
        img: Pic,
      })),
    []
  );

  return (
    <Section>
      <Container>
        <Heading>What our students have to say</Heading>
        <Viewport>
          <ArrowButton side="left">
            <FiChevronLeft />
          </ArrowButton>
          <Track style={{ width: "100%" }}>
            {items.slice(0, 4).map((it) => (
              <div key={it.id} style={{ flex: "1 0 0%" }}>
                <Card>
                  <Avatar src={it.img} alt={it.name} />
                  <Name>{it.name}</Name>
                  <Text>{it.text}</Text>
                </Card>
              </div>
            ))}
          </Track>
          <ArrowButton side="right">
            <FiChevronRight />
          </ArrowButton>
        </Viewport>
        <AppSection>
          <AppText>APP is available for free</AppText>
          <AppButtons>
            <AppButton href="#" color="#1fb6ff">
              <FaAndroid /> Android APP
            </AppButton>
            <AppButton href="#" color="#21c0be">
              <FaApple /> IOS APP
            </AppButton>
          </AppButtons>
        </AppSection>
      </Container>
    </Section>
  );
};

export default Students;
