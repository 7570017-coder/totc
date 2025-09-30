import React from "react";
import { Section, Container, TextBox, ImageBox } from "./Styled";
import { useNavigate } from "react-router";
import Pic13 from "/Pic13.2.png";

const Inspiration: React.FC = () => {
  const nav = useNavigate();
  const navigate = () => {
    nav("/MemberShip");
  };
  return (
    <Section>
      <Container>
        <TextBox>
          <p className="source">
            By Themadbrains in <span>inspiration</span>
          </p>
          <h2>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button onClick={() => nav("/Course")}>Start learning now</button>
        </TextBox>

        <ImageBox>
          <img src={Pic13} alt="Swift UI Inspiration" />
        </ImageBox>
      </Container>
    </Section>
  );
};

export default Inspiration;
